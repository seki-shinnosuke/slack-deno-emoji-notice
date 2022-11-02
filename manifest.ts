import { Manifest } from "deno-slack-sdk/mod.ts";
import EmojiNoticeWorkflow from "./src/workflows/emoji_notice_workflow.ts";

/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/future/manifest
 */
export default Manifest({
  name: "emoji-notice-bot",
  description: "登録された絵文字を通知してくれるBot",
  icon: "assets/icon.png",
  workflows: [EmojiNoticeWorkflow],
  outgoingDomains: [],
  botScopes: ["commands", "chat:write", "chat:write.public", "emoji:read"],
});
