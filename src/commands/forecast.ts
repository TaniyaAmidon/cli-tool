import { Command, flags } from "@oclif/command";
import * as inquirer from "inquirer";
import axios from "axios";
import chalk from "chalk";
import { Answers } from "inquirer";

export default class Forecast extends Command {
  static description = "Get weather forecast";

  static flags = {
    location: flags.boolean({
      char: "l",
      description: "Get weather of a specified location e.g. London",
    }),
  };

  async run() {
    const { flags } = this.parse(Forecast);

    if (!flags.location) {
      this.getWeather();
    }

    if (flags.location) {
      const questions: Answers = await inquirer.prompt(this.getPrompts());

      const { location, multiple, oneLine, locations } = questions;
      if (location && multiple) {
        console.log(
          chalk.blueBright.bold("\n", "Here's your weather forecast:", "\n")
        );

        this.getWeather(`${location}?format=3`);

        locations.split(",").forEach((location: string) => {
          this.getWeather(`${location}?format=3`);
        });
      } else if (oneLine) {
        const formattedLocation = `${location}?format=3`;
        console.log("\n", chalk.blueBright.bold("Weather in:"));
        this.getWeather(formattedLocation);
      } else {
        this.getWeather(location);
      }
    }
  }

  getWeather = async (input: string = "") => {
    try {
      const URL = "http://wttr.in/";

      const { data } = await axios.get(`${URL}/${input}`, {
        headers: {
          "User-Agent": "curl/7.54.0",
        },
      });
      input === ""
        ? console.log("\n", data)
        : console.log(" ", chalk.yellow(data));
    } catch (err) {
      console.log(
        `Uh no! Having trouble getting weather this time: ${err.message}`
      );
    }
  };

  getPrompts = () => {
    return [
      {
        type: "input",
        name: "location",
        message: "Location?",
        validate: (location: string) => {
          if (location.length < 1) {
            return chalk.red("Uh oh, please add a valid location.");
          }
          // only allow letters and spaces
          const regex = /^[a-zA-Z\s]*$/;
          if (location.length > 0 && !location.match(regex)) {
            return chalk.red(
              "I see some fancy characters there. Please add a valid location."
            );
          }
          return true;
        },
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
        message: "Add multiple locations separated by commas e.g. london,paris",
        when: (answers: Answers) => answers.multiple === true,
      },
      {
        type: "confirm",
        name: "oneLine",
        message: "Do you want single line weather format?",
        default: false,
        when: (answers: Answers) => answers.multiple === false,
      },
    ];
  };
}
