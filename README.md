# slack-deno-emoji-notice
絵文字登録を通知してくれるSlack platformを利用したBot  
![](./screenshot/screenshot.png)

# Setup
本BotはSlack CLIを利用して作成しています  
公式サイトのスタートアップガイドに従ってCLIのインストールを行なってください  

# 個別設定
[env.ts](./env.ts) に通知を受け取りたいチャンネルのIDに変更してください  

# 利用方法
プロジェクトのディレクトリに移動し以下Slack CLIコマンドを実行してデプロイとトリガー作成を行うことで利用可能になります  
```
% slack deploy
% slack trigger create --trigger-def ./src/triggers/emoji_notice_event_trigger.ts
```
