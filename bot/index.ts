import {
  Client, GuildTextBasedChannel, Intents,
} from 'discord.js'

import MessageHandler from './messageHandler'
import ReactionAddHandler from './reactionAddHandler'
import ReactionRemoveHandler from './reactionRemoveHandler'

import Secrets from '../config'

const client = new Client({ 
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
  partials: ['CHANNEL', 'MESSAGE'],
})

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', MessageHandler({
  client,
}))

client.on('raw', async ({ d: data, t: event }) => {
  if (['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(event)) {
    const {
      channel_id, user_id, message_id, emoji,
    } = data

    const channel = await client.channels.fetch(channel_id) as GuildTextBasedChannel
    const message = await channel.messages.fetch(message_id)

    const reaction = await message.reactions.resolve(
      emoji.id ? `${emoji.name}:${emoji.id}` : emoji.name,
    )

    const member = await channel.guild.members.fetch(user_id)

    if (event === 'MESSAGE_REACTION_ADD') await ReactionAddHandler(reaction, member)
    else await ReactionRemoveHandler(reaction, member)
  }
})

void client.login(Secrets.token)
