require("dotenv").config();

import { REST, Routes } from "discord.js";
import { Client, GatewayIntentBits } from "discord.js";

const refreshCommands = async () => {
  const commands = [
    {
      name: "ping",
      description: "Replies with Pong!",
    },
  ];

  // Verificar si process.env.DC_BOT_TOKEN está definido
  if (!process.env.DC_BOT_TOKEN || !process.env.DC_APP_ID) {
    throw new Error(
      "DC_BOT_TOKEN or DC_APP_ID not found in environment variables."
    );
  }

  const rest = new REST({ version: "10" }).setToken(process.env.DC_BOT_TOKEN);

  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(process.env.DC_APP_ID), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
};

refreshCommands().catch((error) => console.error(error));

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user?.tag ?? "none"}!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }
});

client.login(process.env.DC_BOT_TOKEN);
