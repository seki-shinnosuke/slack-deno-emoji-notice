import { DefineFunction, Schema, SlackFunction } from "deno-slack-sdk/mod.ts";
import { SlackAPI } from "deno-slack-api/mod.ts";
import env from "../../env.ts";

export const EmojiNoticeFunction = DefineFunction({
  callback_id: "emoji_notice_function",
  title: "Emoji notice",
  source_file: "src/functions/emoji_notice_function.ts",
  input_parameters: {
    properties: {
      subtype: {
        type: Schema.types.string,
        description: "Subtype",
      },
      emojiName: {
        type: Schema.types.string,
        description: "Emoji name",
      },
    },
    required: ["subtype"],
  },
});

export default SlackFunction(EmojiNoticeFunction, ({ inputs, token }) => {
  let message = "";
  if (inputs.subtype === "add" && inputs.emojiName != undefined) {
    message = `新しい絵文字「${inputs.emojiName}」が追加されました\n\n:${inputs.emojiName}:`;
  } else {
    return {
      outputs: {},
    };
  }

  const client = SlackAPI(token, {});
  client.chat.postMessage({
    channel: env.EMOJI_NOTIFICATION_CHANNEL_ID,
    text: message,
  });
  return {
    outputs: {},
  };
});
