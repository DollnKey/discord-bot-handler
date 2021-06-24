const CommandBase = require("../../../structures/base/CommandBase");

module.exports = class pingCommand extends CommandBase {
    constructor(client) {
        super(client, {
            name: 'ping', 
            aliases: ['botping'],
            category: 'public'
        })
        this.client = client;
    }; async run(message, args) {
        const { channel, guild, member, author, content, mentions } = message;
        return channel.send(`...`).then(async msg => {
            msg.edit(`Ping: **${this.client.ws.ping}**ms.\nTempo de Resp: **${msg.createdTimestamp - message.createdTimestamp}**ms.`)
        })
    }
}