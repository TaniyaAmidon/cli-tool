import { Command, flags } from "@oclif/command";
import * as inquirer from "inquirer";
import axios from "axios";

export default class Forecast extends Command {
  static description = "describe the command here";

  static flags = {
    location: flags.string(),
  };

  // validations for spaces between words
  // validation for full stops and special characters
  // get one line weather Berlin?format=3
  // get multiple city one line weather wttr.in/{Nuremberg,Hamburg,Berlin}?format=3'
  // specify your own custom output format,
  async run() {
    const url = "http://wttr.in/";

    const { flags } = this.parse(Forecast);

    if (flags.location) {
      const location = flags.location;
      const response = await axios.get(`${url}/${location}`, {
        headers: {
          "User-Agent": "curl/7.54.0",
        },
      });
      console.log(response.data);
    } else {
      const response = await axios.get(url, {
        headers: {
          "User-Agent": "curl/7.54.0",
        },
      });
      console.log(response.data);
    }
  }
}
