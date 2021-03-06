import MMOSession from "../../mmocore/MMOSession";
import LoginServerPacket from "./LoginServerPacket";
import BigInteger from "big-integer";

export default class RequestAuthLogin extends LoginServerPacket {
  private _username!: string;
  private _password!: string;
  private _session!: MMOSession;

  constructor(username: string, password: string, session: MMOSession) {
    super();
    this._username = username;
    this._password = password;
    this._session = session;
  }

  write(): void {
    if (this._username.length > 14) {
      throw Error("Username is too long");
    }

    if (this._password.length > 16) {
      throw Error("Password is too long");
    }

    const loginInfo: Uint8Array = new Uint8Array(128);

    loginInfo[0x5b] = 0x24;
    [...this._username].forEach((k, i) => (loginInfo[0x5e + i] = k.charCodeAt(0)));
    [...this._password].forEach((k, i) => (loginInfo[0x6c + i] = k.charCodeAt(0)));

    const e = BigInteger("65537", 10);
    const modulus = BigInteger(this._hexStr(this._session.publicKey), 16);
    const input = BigInteger(this._hexStr(loginInfo), 16);
    const encryptedLoginInfo: Uint8Array = Uint8Array.from(input.modPow(e, modulus).toArray(256).value);

    this.writeC(0);
    this.writeB(encryptedLoginInfo);
    this.writeD(this._session.sessionId);

    /**
     * GameGuard special
     * The rest 43 bytes are based on the GG protection algorithm, and depends on the server setup.
     * If no GG is enabled (bots are allowed), I think you can replace the code below with simply:
     *
     * this.writeB(Uint8Array.from(Array(43).fill(0)));
     */

    const query: Uint8Array = new Uint8Array(16);
    query.set(this._buffer.slice(5, 21), 0);

    const gg: string = this._hexStr(query);
    switch (gg) {
      case "D93D53271DA5722E8B031720A31E5BC3":
        // prettier-ignore
        this.writeB(Uint8Array.from([0x7f, 0x97, 0xf0, 0x78, 0x04, 0x3c, 0xe6, 0xd6, 0x71, 0x0c, 0xf6, 0x89, 0xdd, 0x9e, 0x06, 0x70]));
        break;
      case "00000000000000000000000000000000":
      default:
        // prettier-ignore
        this.writeB(Uint8Array.from([0x23, 0x01, 0x00, 0x00, 0x67, 0x45, 0x00, 0x00, 0xab, 0x89, 0x00, 0x00, 0xef, 0xcd, 0x00, 0x00]));
        break;
    }

    this.writeB(Uint8Array.from([0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00])); // footer
    this.writeB(Uint8Array.from(Array(16).fill(0)));
  }

  private _hexStr(buffer: Uint8Array) {
    return Array.from(Array.from(buffer), (byte) => ("0" + (byte & 0xff).toString(16)).slice(-2)).join("");
  }
}
