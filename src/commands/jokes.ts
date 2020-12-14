import axios from "axios";
import { Command, flags } from "@oclif/command";

export default class Jokes extends Command {
  static description = "Get a random joke.";

  static flags = {};

  async run() {
    this.getJokes();
  }

  getJokes = async () => {
    try {
      const JOKES_URL = "https://dad-jokes.p.rapidapi.com/random/joke";
      const API_KEY = "8efac4fd3amshf239fb505eb2a21p12a89djsne89b3fa02711";

      const response = await axios.get(JOKES_URL, {
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
          useQueryString: true,
        },
      });
      return response.data;
    } catch (e) {
      console.log(e.message);
    }
  };
}
