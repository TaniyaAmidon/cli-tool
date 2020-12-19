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
    this.writeToFile();
  }

  writeToFile = () => {
    //fs.mkdirSync("/tmp");
    fs.writeFileSync("/tmp/test.MD", "hello", { encoding: "utf-8" });
    console.log("done");
  };
}
