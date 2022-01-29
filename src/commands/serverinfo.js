const color = require('../colors')

module.exports = {
  name: 'serverinfo',
  description: 'Displays info about the server.\n',
  args: false,
  guildOnly: true,
  execute(m) {
    try {
      const serverEmbed = {
        color: '0099ff',
        title: '**Server Info**',
        description: this.description.toString(),
        fields: [
          {
            name: 'Server name: ',
            value: m.guild.name,
            inline: false,
          },
          {
            name: 'Member count: ',
            value: m.guild.memberCount,
            inline: false,
          },
          {
            name: 'Current owner: ',
            value: m.guild.owner,
            inline: false,
          },
          {
            name: 'Server created: ',
            value: m.guild.createdAt.toLocaleDateString(),
            inline: false,
          },
        ],
        footer: {
          text: 'Powered by n4m3x',
        },
      }

      m.channel.send({ embed: serverEmbed })
    } catch (err) {
      console.error(color.fgRed, `Error when calling command, ${err}`)
    }
    console.log(color.fgYellow, 'Command ;serverinfo completed successfully.\n')
  },
}
