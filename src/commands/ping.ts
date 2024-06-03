import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import ExtendedClient from "../client";

const pingCommand = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  async execute(
    client: ExtendedClient,
    interaction: ChatInputCommandInteraction
  ) {
    await interaction.reply("Chupala!");
  },
};

export default pingCommand;
