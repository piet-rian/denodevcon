// hectorm/otpauth と libs/qrcode と Google Authenticator アプリを用いたワンタイムパスワードによる認証の例

import * as OTPAuth from "@hectorm/otpauth"; // see. https://jsr.io/@hectorm/otpauth
import { qrcode } from "@libs/qrcode" // see. https://jsr.io/@libs/qrcode/doc/~/qrcode


// Create a new TOTP object.
const totp = new OTPAuth.TOTP({
  issuer: "sample-topt", // アプリケーション名的なものを設定 
  label: "piet-rian", // アプリケーション内におけるユーザーを一意に定める文字列
  algorithm: "SHA1", // ハッシュアルゴリズムの指定
  digits: 6, // ワンタイムパスワードの桁数 // 6桁以上
  period: 30, // ワンタイムパスワードの有効時間(単位:秒)
  secret: "NB2W45DFOIZA" // OTPAuth.Secret.fromBase32("NB2W45DFOIZA"), // 固有キー
});

// Authenticator アプリ用の URL(QRコード用)を出力
const uri = totp.toString(); // or 'OTPAuth.URI.stringify(totp)'

// コンソールによるテスト想定であるため console 指定しているが
// svg にすると svg が出てくるためブラウザではこっちの指定にしたほうがよい
qrcode(uri, {output: "console"});

// Google Authenticator で表示されている数字を入力
const token = prompt("input key")!;

// 認証
const delta = totp.validate({ token, window: 1 });

// null が帰ってきてなければとりあえず認証成功と見て良さそう
console.log(delta);

