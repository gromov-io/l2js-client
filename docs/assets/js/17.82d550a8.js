<<<<<<< HEAD:docs/assets/js/17.4a13f435.js
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{384:function(e,t,a){"use strict";a.r(t);var n=a(44),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"game-protocol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#game-protocol"}},[e._v("#")]),e._v(" Game Protocol")]),e._v(" "),a("p",[e._v("The same encryption scheme (with only minor differences) was used both pre- and post-C4, so it was essentially unchanged.")]),e._v(" "),a("p",[e._v("All game server/client packets are enciphered using an XOR-based scheme.")]),e._v(" "),a("p",[e._v("The initial key is made of two parts: a dynamic part given by the game server and a pre-shared part known to the game client (and server) in advance. Legacy clients had two pre-shared key parts. The one to be selected was determined by evaluating the dynamic key part sent by the server.")]),e._v(" "),a("p",[e._v("During cipher operations, the last 4 bytes (DWORD) of the dynamic key part is incremented by the amount of bytes processed by each operation.")]),e._v(" "),a("p",[e._v("Once a client connects, it will immediately send an unenciphered protocol version packet. The server will respond with an unenciphered packet specifying whether the protocol is supported and disclose the mutable key part. The server, if applicable, will also identify itself and send an initial opcode obfuscation key for the client. If the opcode obfuscation key is not 0, the client will then shuffle most of its 1st and 2nd opcodes.")]),e._v(" "),a("p",[e._v("The CM obfuscation key also changes each time a character is logged in.")]),e._v(" "),a("p",[e._v("Except for the first packet, each game server packet is transmitted by taking the following steps:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("1. Write packet data\n2. Encipher payload using XOR with both parts of the key\n3. Update the mutable part of the key\n4. Send packet\n")])])]),a("p",[e._v("Except for the first packet, each game client packet is transmitted by taking the following steps:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("1. Write packet data\n2. Obfuscate opcode(s)\n3. Encipher payload using XOR with both parts of the key\n4. Update the mutable part of the key\n5. Send packet Game server/client packets are not padded.")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{388:function(e,t,a){"use strict";a.r(t);var n=a(44),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"game-protocol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#game-protocol"}},[e._v("#")]),e._v(" Game Protocol")]),e._v(" "),a("p",[e._v("The same encryption scheme (with only minor differences) was used both pre- and post-C4, so it was essentially unchanged.")]),e._v(" "),a("p",[e._v("All game server/client packets are enciphered using an XOR-based scheme.")]),e._v(" "),a("p",[e._v("The initial key is made of two parts: a dynamic part given by the game server and a pre-shared part known to the game client (and server) in advance. Legacy clients had two pre-shared key parts. The one to be selected was determined by evaluating the dynamic key part sent by the server.")]),e._v(" "),a("p",[e._v("During cipher operations, the last 4 bytes (DWORD) of the dynamic key part is incremented by the amount of bytes processed by each operation.")]),e._v(" "),a("p",[e._v("Once a client connects, it will immediately send an unenciphered protocol version packet. The server will respond with an unenciphered packet specifying whether the protocol is supported and disclose the mutable key part. The server, if applicable, will also identify itself and send an initial opcode obfuscation key for the client. If the opcode obfuscation key is not 0, the client will then shuffle most of its 1st and 2nd opcodes.")]),e._v(" "),a("p",[e._v("The CM obfuscation key also changes each time a character is logged in.")]),e._v(" "),a("p",[e._v("Except for the first packet, each game server packet is transmitted by taking the following steps:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("1. Write packet data\n2. Encipher payload using XOR with both parts of the key\n3. Update the mutable part of the key\n4. Send packet\n")])])]),a("p",[e._v("Except for the first packet, each game client packet is transmitted by taking the following steps:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("1. Write packet data\n2. Obfuscate opcode(s)\n3. Encipher payload using XOR with both parts of the key\n4. Update the mutable part of the key\n5. Send packet Game server/client packets are not padded.")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);
>>>>>>> 0f5e1c38f123acdb501222abc1a29c177f98857f:docs/assets/js/17.82d550a8.js
