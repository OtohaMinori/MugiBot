/* eslint-disable max-len */
/* eslint-disable no-tabs */

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('invite')
		.setDescription('Invite the bot!'),
	async execute(interaction) {
		const ping = new MessageEmbed()
            .setColor('RANDOM')
            .setAuthor('むぎちゃん', 'https://cdn.discordapp.com/avatars/882519953100656680/dd87a83415c4f4b77ade768d34e694f4.png', 'https://csj.yeyunstudio.com')
			.setThumbnail('https://cdn.discordapp.com/avatars/882519953100656680/dd87a83415c4f4b77ade768d34e694f4.png')
			.addFields(
				{ name: 'Sorry... It\'s a private bot', value: 'But you can try to ask [him](https://discord.com/users/826327097945489408) for invite link', inline: true },
			)
			.setFooter('Copyright © Project CSJ', 'https://cdn.discordapp.com/avatars/882519953100656680/dd87a83415c4f4b77ade768d34e694f4.png');
		interaction.reply({ embeds: [ping], ephemeral: true });
	},
};
