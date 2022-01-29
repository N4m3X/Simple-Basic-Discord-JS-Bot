const color = require('../colors')

module.exports = {
  name: 'userinfo',
  description: 'Displays basic info about the tagged user.\n',
  args: true,
  guildOnly: true,
  execute(m) {
    if (!m.mentions.users.size) return m.reply('you need to tag a valid user')

    let taggedUser = m.mentions.users.first()
    let user = m.guild.member(taggedUser)

    try {
      const userEmbed = {
        color: '0099ff',
        title: '**User Info**',
        description: this.description.toString(),
        fields: [
          {
            name: 'Username: ',
            value: taggedUser.username,
            inline: false,
          },
          {
            name: 'Tag: ',
            value: `#${taggedUser.discriminator}`,
            inline: false,
          },
          {
            name: 'Joined Discord: ',
            value: taggedUser.createdAt.toLocaleDateString(),
            inline: false,
          },
          {
            name: 'Joined this server: ',
            value: user.joinedAt.toLocaleDateString(),
            inline: false,
          },
        ],
        footer: {
          text: 'Powered by n4m3x',
        },
      }
      m.channel.send({ embed: userEmbed })
    } catch (err) {
      console.error(color.fgRed, `Error when calling command, ${err}`)
    }
    console.log(color.fgYellow, 'Command ;userinfo completed successfully.\n')
  },
}
