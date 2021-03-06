# Процедура авторизации Lineage 2

> Два сервера - `сервер авторизации` и "игровой сервер". Каждый из них шифрует пакеты для клиента немного по-разному.

## Общая информация

- Пакеты представляют собой массивы байтов
- Байты поступают и записываются в обратном порядке в сокет TCP (см. Little Endian)
- Пакеты состоят из длины (2 байта), типа пакета (1 байт) и содержимого (любое количество байтов)
- Содержимое пакета будет называться данными, передаваемыми в пакете (ключи, идентификатор сеанса и т. Д.), За исключением длины и типа пакета
- Длина пакета не шифруется и не учитывается при расчете контрольной суммы, так как она рассчитывается после. При расчете контрольной суммы учитывается тип пакета, а также его содержимое. Тип пакета, содержимое и контрольная сумма шифруются вместе с использованием алгоритма Blowfish.
- Длина пакета - число, указывающее длину всего пакета. Другими словами, он также включает в себя длину зашифрованных данных (которая состоит из содержимого и типа пакета, контрольной суммы и зашифрована с использованием алгоритма Blowfish) и два байта для самого числа, указывающего длину
- Blowfish-это алгоритм блочного шифра, который обрабатывает блоки по 8 байт каждый, что означает, что длина содержимого пакета вместе с типом и контрольной суммой должна быть кратна 8 (для этого контрольная сумма отбивается от содержимого пакета с требуемым количеством нулей)
- Обратите внимание, что в зависимости от того, соберете ли вы пакет заранее в порядке Little Endian или позже развернете алгоритмы шифрования и вычисления контрольной суммы, соответственно, он будет отличаться.
Это может быть важно, если, например, библиотека, выбранная для вашего языка программирования Blowfish, может шифровать байты только в прямом порядке (Big Endian)

## Порядок взаимодействия сервера авторизации с клиентом

Для удобства я буду обозначать префиксом " S "пакеты, отправленные сервером, и" C " - отправленные клиентом, потому что они могут иметь один и тот же идентификатор, но разное содержимое

> Пакет S / 0x00 (Init) не подписан контрольной суммой, все остальные пакеты подписаны

> S / 0x00 (Init) шифруется с использованием алгоритма XOR, все остальные пакеты не шифруются.

Все пакеты шифруются с использованием алгоритма Blowfish с ключом, случайным образом сгенерированным для каждого соединения и отправленным в пакете S / 0x00 (Init), за исключением пакета S / 0x00 (Init), который шифруется ключом, изобретенным разработчиками игры (проводным в клиенте)

Шифрование с использованием алгоритма Blowfish всегда является последним, т. е.:

```meta
# S / 0x00 шифрование пакетов (Init)
data = xor.encrypt (data)
data = blowfish.encrypt (data, STATIC_KEY)

# Шифрование любого другого пакета
data = checksum.sign (data)
data = blowfish.encrypt (data, SESSION_KEY)
```

Расшифровка всегда идет одинаково:

```meta
# Расшифровка любого входящего пакета
data = blowfish.decrypt (data, SESSION_KEY)
data = checksum.verify (data)
```

Содержимое пакета C / 0x00 (RequestAuthLogin) поставляется с алгоритмом шифрования RSA с использованием ключа, который сервер отправляет в пакете S / 0x00 (Init). Шифруется только содержимое, но не длина или тип пакета. Сам пакет зашифрован, как обычно. Содержимое дополнительно шифруется, так как содержит логин и пароль

Процедура взаимодействия для успешной авторизации:

1. _User инициализирует клиента с помощью логина и пароля_
2. Клиент подключается к серверу (порт сокета по умолчанию 2106)
3. Сервер отправляет `S / 0x00` пакет ([Init](https://github.com/npetrovski/l2js-client/blob/master/src/network/serverpackets/Init.ts))
4. Клиент отправляет `C / 0x07` пакет ([AuthGameGuard](https://github.com/npetrovski/l2js-client/blob/master/src/network/clientpackets/AuthGameGuard.ts))
5. Сервер отправляет `S / 0x0b` пакет ([GGAuth](https://github.com/npetrovski/l2js-client/blob/master/src/network/serverpackets/GGAuth.ts))
6. Клиент отправляет имя пользователя и пароль в пакете `C / 0x00` ([RequestAuthLogin](https://github.com/npetrovski/l2js-client/blob/master/src/network/clientpackets/RequestAuthLogin.ts))
7. Сервер проверяет имя пользователя и пароль и отправляет "S / 0x03` ([LoginOk](https://github.com/npetrovski/l2js-client/blob/master/src/network/serverpackets/LoginOk.ts))
8. Клиент запрашивает список игровых серверов с пакетом "C / 0x05". ([RequestServerList](https://github.com/npetrovski/l2js-client/blob/master/src/network/clientpackets/RequestServerList.ts))
9. Сервер отправляет список игровых серверов в пакете "S / 0x04". ([ServerList](https://github.com/npetrovski/l2js-client/blob/master/src/network/serverpackets/ServerList.ts))
10. Клиент выбирает сервер из списка и отправляет пакет "C / 0x02". ([RequestServerLogin](https://github.com/npetrovski/l2js-client/blob/master/src/network/clientpackets/RequestServerLogin.ts))
11. Сервер отправляет пакет "S / 0x07` ([PlayOK](https://github.com/npetrovski/l2js-client/blob/master/src/network/serverpackets/PlayOk.ts))

Затем клиент отключается от сервера авторизации и подключается к игровому серверу.

## Отправка пакетов сервером авторизации.

Пакеты записываются в виде массива байтов:

1. Запишите 1 байт типа пакета, например, 0x00
2. Мы формируем и добавляем содержимое пакета (идентификатор сеанса, версия сервера, ключи, нулевой байт конца ключа Blowfish и т. Д.)
3. Вычисляем контрольную сумму для текущего массива байтов
4. Мы достигаем длины текущего массива байтов с нулевыми байтами до кратного 8
5. Добавьте контрольную сумму в массив
6. Мы шифруем текущий массив байтов с помощью алгоритма Blowfish
7. Вычислите длину результирующего массива
8. Мы добавляем к значению длины 2, чтобы учесть сами два байта длины
9. Добавьте длину в начало массива

_Из сокета TCP байты должны считываться в обратном порядке._