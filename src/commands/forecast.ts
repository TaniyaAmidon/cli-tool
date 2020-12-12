import { Command, flags } from "@oclif/command";
import * as inquirer from "inquirer";

export class Forecast extends Command {
  static description = "Weather forecast";

  static flags = {
    force: flags.boolean({ char: "f" }),
    file: flags.string(),
  };

  async run() {
    const { flags } = this.parse(Forecast);
    if (flags.force) console.log("--force is set");
    flags.file ? console.log(`--file is: ${flags.file}`) : console.log("nope");
  }
}
