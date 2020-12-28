import { Command, flags } from "@oclif/command";
import fs from "fs";
import chalk from "chalk";
import * as inquirer from "inquirer";
import { Answers } from "inquirer";

export default class TaskManager extends Command {
  static description = "Task manager";

  static flags = {
    list: flags.boolean({
      char: "l",
      description: "List tasks.",
    }),
    add: flags.boolean({
      char: "a",
      description: "Add a task.",
    }),
    check: flags.boolean({
      char: "c",
      description: "Mark as done task.",
    }),
    delete: flags.boolean({
      char: "d",
      description: "Delete a task.",
    }),
  };

  async run() {
    const { flags } = this.parse(TaskManager);

    if (flags.add) {
      if (this.readFileContent().length === 10) {
        throw new Error("you have 10 task");
      }
      const { task }: Answers = await inquirer.prompt([
        {
          type: "input",
          name: "task",
          message: "Add a task.",
          validate: (time: string) => {
            if (time.length < 1) {
              return chalk.red("uh oh! you haven't added a task yet.");
            }
            return true;
          },
        },
      ]);
      this.addTask(task);
    }
    if (flags.list) {
      this.listTasks();
    }
    if (flags.delete) {
      const { taskToDelete }: Answers = await inquirer.prompt([
        {
          type: "list",
          name: "taskToDelete",
          message: "Choose a task to delete.",
          choices: this.readFileContent().map((task, index) => {
            return {
              name: `${index + 1} - ${task} `,
              value: index,
            };
          }),
        },
      ]);
      this.deleteTask(taskToDelete);
    }
    if (flags.check) {
      const { taskToCheck }: Answers = await inquirer.prompt([
        {
          type: "list",
          name: "taskToCheck",
          message: "Choose a task to mark as completed.",
          choices: this.readFileContent().map((task, index) => {
            return {
              name: `${index + 1} - ${task} `,
              value: index,
            };
          }),
        },
      ]);
      this.checkTask(taskToCheck);
    }
  }

  writeToFile = (input: string) => {
    fs.writeFileSync("test.txt", `${input}\n`, { encoding: "utf-8" });
  };

  readFileContent = () => {
    const taskList = fs
      .readFileSync("test.txt", {
        encoding: "utf-8",
      })
      .split("\n");
    //delete empty new line
    taskList.splice(-1, 1);
    return taskList;
  };

  addTask = (input: string) => {
    fs.appendFileSync("test.txt", `${input}\n`, { encoding: "utf-8" });
    console.log("Task added");
  };

  listTasks = () => {
    console.log(chalk.bold.bgYellow.blue(`\n To Do List \n`));
    // if tasks are checked as done then add tick
    this.readFileContent().forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
      console.log("----------------");
    });
  };

  checkTask = (index: string) => {
    const tasks = this.readFileContent();
    tasks[parseInt(index)] = `${tasks[parseInt(index)]} ✔︎`;
    this.writeToFile(tasks.join("\n"));
    console.log(`Marked as completed.`);
  };

  deleteTask = (index: string) => {
    const tasks = this.readFileContent();
    tasks.splice(parseInt(index), 1);
    this.writeToFile(tasks.join("\n"));
    console.log(`Successfully deleted.`);
  };
}
