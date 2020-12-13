import { Command, flags } from "@oclif/command";
import * as inquirer from "inquirer";
import axios from "axios";
import chalk from "chalk";

export default class Forecast extends Command {
  static description = "get the weather forecast";

  static flags = {
    location: flags.boolean({
      char: "l",
      description: "Name of the location e.g. London",
    }),
  };

  callWeatherApi = async (input: string) => {
    const url = "http://wttr.in/";
    const response = await axios.get(`${url}/${input}`, {
      headers: {
        "User-Agent": "curl/7.54.0",
      },
    });
    console.log(response.data);
  };

  async run() {
    const { flags } = this.parse(Forecast);
    if (!flags.location) {
      this.callWeatherApi("");
    }

    if (flags.location) {
      const questions = await inquirer.prompt([
        {
          type: "input",
          name: "location",
          message: "Add your location",
          validate: (location) => {
            if (location.length < 0) {
              return "Add a valid location.";
            }
            const regex = /^[a-zA-Z\s]*$/;
            if (location.length > 0 && !location.match(regex)) {
              return "invalid";
            }
            return true;
          },
        },
        {
          type: "confirm",
          name: "oneLine",
          message: "Do you want one line format?",
          default: false,
        },
        {
          type: "confirm",
          name: "multiple",
          message: "Do you want to add more locations?",
          default: false,
        },
        {
          type: "input",
          name: "locations",
          message: "Add your locations.",
          when: (answers) => answers.multiple === true,
        },
      ]);

      if (questions.multiple) {
        console.log("weathers", "\n");
        if (questions.location) {
          this.callWeatherApi(`${questions.location}?format=3`);
        }

        questions.locations.split(",").forEach((location: string) => {
          this.callWeatherApi(`${location}?format=3`);
        });
      } else if (questions.oneLine) {
        const location = `${questions.location}?format=3`;
        console.log("\n");
        this.callWeatherApi(location);
      } else {
        console.log("\n");
        this.callWeatherApi(questions.location);
      }
    }
  }
}
