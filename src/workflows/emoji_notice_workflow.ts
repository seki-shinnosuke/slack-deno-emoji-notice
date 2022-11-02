import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";
import { EmojiNoticeFunction } from "../functions/emoji_notice_function.ts";

const EmojiNoticeWorkflow = DefineWorkflow({
  callback_id: "emoji_notice_workflow",
  title: "Emoji notice",
  description: "新規登録された絵文字を通知してくれます",
  input_parameters: {
    properties: {
      subtype: {
        type: Schema.types.string,
      },
      emojiName: {
        type: Schema.types.string,
      },
    },
    required: ["subtype"],
  },
});

EmojiNoticeWorkflow.addStep(
  EmojiNoticeFunction,
  {
    subtype: EmojiNoticeWorkflow.inputs.subtype,
    emojiName: EmojiNoticeWorkflow.inputs.emojiName,
  },
);

export default EmojiNoticeWorkflow;
