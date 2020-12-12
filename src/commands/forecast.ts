import { Command, flags } from "@oclif/command";

export default class Forecast extends Command {
  async run() {
    console.log("weather!");
  }
}
