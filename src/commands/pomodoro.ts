import { Command, flags } from "@oclif/command";
import notifier from "node-notifier";
import * as inquirer from "inquirer";
import chalk from "chalk";
import { Answers } from "inquirer";

export default class Pomodoro extends Command {
  static description = "Set a pomodoro timer.";

  static flags = {
    custom: flags.boolean({
      char: "c",
      description: "Add a custom time",
    }),
  };

  async run() {
    const { flags } = this.parse(Pomodoro);

    if (flags.custom) {
      const question: Answers = await inquirer.prompt([
        {
          type: "input",
          name: "customTime",
          message: "Add a custom time in minutes.",
          validate: (time: string) => {
            if (time.length < 1) {
              return chalk.red("uh oh! you haven't added a time yet.");
            }
            return true;
          },
        },
      ]);
      this.setTime(question.customTime);
    } else {
      this.setTime();
    }
  }

  notifier = () => {
    notifier.notify({
      title: "My notification",
      message: "Well done, you earned your break 😁!!",
      sound: "Glass",
      wait: true,
    });
  };

  setTime = (timeout: string = "25") => {
    const time = parseInt(timeout) * 60 * 100;
    console.log(chalk.green("\n", `Setting timer for ${timeout} min`));
    setTimeout(this.notifier, time);
  };
}
