import { Client, Collection } from "discord.js";
import { Command } from "./types";

/**
 * Defines an extended class of Client to include a commands Collection and in that
 * way be able to use it on the main.ts
 */
class ExtendedClient extends Client {
  commands: Collection<string, Command>;

  constructor(options: any) {
    super(options);
    this.commands = new Collection();
  }
}

export default ExtendedClient;
