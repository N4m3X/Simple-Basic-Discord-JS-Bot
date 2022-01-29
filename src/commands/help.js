const color = require('../colors')

module.exports = {
  name: 'help',
  description: 'All commands for the bot and general help.\n',
  args: false,
  guildOnly: false,
  execute(m) {
    try {
      const helpEmbed = {
        color: '0099ff',
        title: '**Commands Help**',
        description: this.description.toString(),
        fields: [
          {
            name: 'Help',
            value: 'This command that you are running right now.\nUsage: `;help`',
            inline: false,
          },
          {
            name: 'Prune',
            value: 'Clears between 1 and 99 messages in a channel.\nUsage: `;prune <1-99>`',
            inline: false,
          },
          {
            name: 'Server Info',
            value:
              'Display info about the server that the bot is running on.\nUsage: `;serverinfo`',
            inline: false,
          },
          {
            name: 'User Info',
            value: 'Displays info about a tagged user.\nUsage: `;userinfo <@user>`\n\n',
            inline: false,
          },
        ],
        footer: {
          text: 'Powered by n4m3x',
        },
      }
      m.channel.send({ embed: helpEmbed })
    } catch (err) {
      console.error(color.fgRed, `Error when calling command, ${err}`)
    }
    console.log(color.fgYellow, 'Command ;help completed successfully.\n')
  },
}
