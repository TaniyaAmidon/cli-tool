import { Command, flags } from "@oclif/command";
import notifier from "node-notifier";

export default class Pomodoro extends Command {
  static description = "Set a pomodoro timer.";

  static flags = {};

  async run() {
    notifier.notify({
      title: "My notification",
      message: "Hello, there!",
      sound: "Glass",
      wait: true,
    });
  }
}
