# ssh (ないしは githubとの接続の確立)

githubとのやりとり(fetch, pull, push)はssh接続を利用して行うため、sshによる接続の確立が必要である。

## ssh 基礎知識

sshそのものの説明については割愛する。githubとの接続に必要なsshの知識については以下の通り。

- 秘密鍵 (private key)
  - ローカルマシンの外に持ち出してはいけないもの
  - ssh-agentに登録するもの
- githubに登録するのは公開鍵 (public key)
  - ローカルマシンの外に持ち出しても問題ないもの
  - githubに登録するもの

## 手順

基本的には **GitHub ドキュメント** の以下の項目を上から順番に実行する

1. [新しい SSH キーを生成して ssh-agent に追加する](https://docs.github.com/ja/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
2. [GitHub アカウントへの新しい SSH キーの追加](https://docs.github.com/ja/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)
3. [SSH 接続をテストする](https://docs.github.com/ja/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection)

## 補足および注意事項

### パスフレーズについて

vscodeを用いる場合、パスフレーズは空で作成すること。

<https://code.visualstudio.com/docs/devcontainers/containers#_dev-containers-limitations>

> If you clone a Git repository using SSH and your SSH key has a passphrase, VS Code's pull and sync features may hang when running remotely.
> Either use an SSH key without a passphrase, clone using HTTPS, or run git push from the command line to work around the issue.
>
> (機械翻訳) SSH を使用して Git リポジトリをクローンし、SSH キーにパスフレーズが設定されている場合、VS Code のプル機能と同期機能がリモートで実行中にハングする可能性があります。
> この問題を回避するには、 **パスフレーズのない SSH キーを使用するか** 、HTTPS を使用してクローンするか、コマンドラインから git push を実行してください。
