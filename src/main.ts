import * as dotenv from "dotenv";
dotenv.config();

import { GatewayIntentBits, Interaction } from "discord.js";
import { readdirSync } from "fs";
import { join } from "path";
import ExtendedClient from "./client";
import { Command } from "./types";
/**
 * This file is responsible for initializing the Bot, and reading the commands
 * that are available on the commands folder
 */

/*Tells to the bot the discord the events he is going to process */
const client = new ExtendedClient({
  intents: ["Guilds", "GuildMessages", "GuildVoiceStates"],
});

/*Read and register the commands*/
const commandsPath = join(__dirname, "commands");
const commandFiles = readdirSync(commandsPath).filter((file) =>
  file.endsWith(".js")
);

for (const file of commandFiles) {
  try {
    const commandModule = require(join(commandsPath, file));
    const command: Command = commandModule.default;
    if (!command) {
      throw new Error(`Default export not found in ${file}`);
    }
    client.commands.set(command.data.name, command);
  } catch (error) {
    console.error(`Error loading command from ${file}:`, error);
  }
}

client.once("ready", () => {
  console.log(`Logged in as ${client.user?.tag}`);
});

/*
Is listening for a command entered by a user and the it validate's if the command
exists on the app
*/
client.on("interactionCreate", async (interaction: Interaction) => {
  if (!interaction.isCommand()) return;

  // Usar type guard para asegurarse de que es un ChatInputCommandInteraction
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(client, interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: "There was an error executing that command!",
      ephemeral: true,
    });
  }
});

// Login to Discord with your app's token
client.login(process.env.DC_BOT_TOKEN);
