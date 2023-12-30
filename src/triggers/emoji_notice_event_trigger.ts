import { Trigger } from "deno-slack-api/types.ts";
import EmojiNoticeWorkflow from "../workflows/emoji_notice_workflow.ts";
import { TriggerTypes } from "deno-slack-api/typed-method-types/workflows/triggers/mod.ts";

const emojiNoticeEventTrigger: Trigger<typeof EmojiNoticeWorkflow.definition> =
  {
    type: TriggerTypes.Event,
    event: {
      event_type: "slack#/events/emoji_changed",
    },
    name: "Emoji notification",
    description: "新規登録された絵文字を通知してくれます",
    workflow: "#/workflows/emoji_notice_workflow",
    inputs: {
      subtype: {
        value: "{{data.subtype}}",
      },
      emojiName: {
        value: "{{data.name}}",
      },
    },
  };

export default emojiNoticeEventTrigger;
