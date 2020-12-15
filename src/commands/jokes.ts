import chalk from "chalk";
import { lowerFirst } from "lodash";
import axios from "axios";
import { Command, flags } from "@oclif/command";
import chalkAnimation from "chalk-animation";

export default class Jokes extends Command {
  static description = "Get a random joke";

  async run() {
    this.getJokes();
  }

  getJokes = async () => {
    try {
      const JOKES_URL = "https://dad-jokes.p.rapidapi.com/random/joke";
      const API_KEY = "8efac4fd3amshf239fb505eb2a21p12a89djsne89b3fa02711";

      const { data } = await axios.get(JOKES_URL, {
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
          useQueryString: true,
        },
      });
      const { punchline, setup } = data.body[0];

      console.log("\n", chalk.green(setup));
      chalkAnimation.karaoke(".....................................");
      setTimeout(() => {
        console.log("\n", chalk.yellow(punchline));
        console.log("\n", "(〃´艸｀)");
      }, 6000);
    } catch (e) {
      console.log(chalk.red(e.message));
    }
  };
}
