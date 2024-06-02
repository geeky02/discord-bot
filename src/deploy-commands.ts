import { REST, Routes } from "discord.js";
import * as dotenv from "dotenv";
import { readdirSync } from "fs";
import { join } from "path";
import { Command } from "./types";

dotenv.config();
/**
 * Tells to Discord the commands our bot will be using and listening for.
 */
const commands = [];
const commandsPath = join(__dirname, "commands");
const commandFiles = readdirSync(commandsPath).filter((file) =>
  file.endsWith(".js")
);

for (const file of commandFiles) {
  const command: Command = require(join(commandsPath, file)).default;
  commands.push(command.data.toJSON());
}

const rest = new REST({ version: "9" }).setToken(process.env.DC_BOT_TOKEN!);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(process.env.DC_APP_ID!), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
