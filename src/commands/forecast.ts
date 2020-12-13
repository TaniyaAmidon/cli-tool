import { Command, flags } from "@oclif/command";
import * as inquirer from "inquirer";
import axios, { AxiosResponse } from "axios";
import * as chalk from "chalk";

interface Questions {
  location: "string";
  multiple: "boolean";
  oneLine: "boolean";
  locations: "string";
}

export default class Forecast extends Command {
  static description = "Get weather forecast";

  static flags = {
    location: flags.boolean({
      char: "l",
      description: "Get weather of a specified location e.g. London",
    }),
  };

  callWeatherApi = async (input: string = "") => {
    const URL = "http://wttr.in/";
    const response: AxiosResponse<any> = await axios.get(`${URL}/${input}`, {
      headers: {
        "User-Agent": "curl/7.54.0",
      },
    });
    console.log(response.data);
  };

  async run() {
    const { flags } = this.parse(Forecast);

    if (!flags.location) {
      this.callWeatherApi();
    }

    if (flags.location) {
      const questions: Questions = await inquirer.prompt([
        {
          type: "input",
          name: "location",
          message: "Weather in?",
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
          message: "Add your locations.",
          when: (answers) => answers.multiple === true,
        },
        {
          type: "confirm",
          name: "oneLine",
          message: "Do you want single line weather format?",
          default: false,
          when: (answers) => answers.multiple === false,
        },
      ]);

      const { location, multiple, oneLine, locations } = questions;
      if (location && multiple) {
        console.log(chalk.blue.bold("Here's your weather forecast"), "\n");

        this.callWeatherApi(`${location}?format=3`);

        locations.split(",").forEach((location: string) => {
          this.callWeatherApi(`${location}?format=3`);
        });
      } else if (oneLine) {
        const formattedLocation = `${location}?format=3`;
        console.log("\n");
        this.callWeatherApi(formattedLocation);
      } else {
        console.log("\n");
        this.callWeatherApi(location);
      }
    }
  }
}
