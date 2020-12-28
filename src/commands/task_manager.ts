import { Command, flags } from "@oclif/command";
import fs from "fs";
import chalk from "chalk";
import * as inquirer from "inquirer";
import { Answers } from "inquirer";

export default class TaskManager extends Command {
  static description = "Task manager";

  static flags = {
    add: flags.boolean({
      char: "a",
      description: "Add a task.",
    }),
    list: flags.boolean({
      char: "l",
      description: "List tasks.",
    }),
    update: flags.boolean({
      char: "u",
      description: "Update a task.",
    }),
    delete: flags.boolean({
      char: "d",
      description: "Delete a task.",
    }),
    check: flags.boolean({
      char: "c",
      description: "Mark as done task.",
    }),
  };

  async run() {
    const { flags } = this.parse(TaskManager);

    if (flags.add) {
      const question: Answers = await inquirer.prompt([
        {
          type: "input",
          name: "addTask",
          message: "Add a task.",
          validate: (time: string) => {
            if (time.length < 1) {
              return chalk.red("uh oh! you haven't added a task yet.");
            }
            return true;
          },
        },
      ]);
      this.writeToFile(question.addTask);
    }
    if (flags.list) {
      this.readFile();
    }
    if (flags.update) {
      // list all tasks
      // choose one to update
      // update
    }
    if (flags.delete) {
      // list all tasks
      // choose one to delete
      // delete
    }
    if (flags.check) {
      // list all tasks
      // check the task done
    } else {
      // list all
    }
  }

  writeToFile = (input: string) => {
    //check if file is empty or not
    fs.appendFileSync("test.txt", `- ${input}\n`, { encoding: "utf-8" });
    console.log("Task added");
  };

  readFile = () => {
    const fileContent = fs.readFileSync("test.txt", { encoding: "utf-8" });
    console.log(fileContent);
  };
}
