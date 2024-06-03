import { SlashCommandBuilder } from "discord.js";

const pingCommand = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  async execute(interaction: any) {
    await interaction.reply("Chupala!");
  },
};

export default pingCommand;
