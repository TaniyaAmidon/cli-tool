import { Command, flags } from "@oclif/command";
import fs from "fs";

export default class TaskManager extends Command {
  static description = "Task manager";

  static flags = {
    add: flags.boolean({
      char: "a",
      description: "Add a task.",
    }),
    update: flags.boolean({
      char: "u",
      description: "Update a task.",
    }),
    delete: flags.boolean({
      char: "u",
      description: "Delete a task.",
    }),
    check: flags.boolean({
      char: "u",
      description: "Mark as done task.",
    }),
  };

  async run() {
    const { flags } = this.parse(TaskManager);
    if (flags.add) {
      this.writeToFile();
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

  writeToFile = () => {
    //fs.mkdirSync("/tmp");
    fs.writeFileSync("test.MD", "hello", { encoding: "utf-8" });
  };

  readFile = () => {
    const a = fs.readFileSync("test.MD", { encoding: "utf-8" });
    console.log(a);
  };
}
