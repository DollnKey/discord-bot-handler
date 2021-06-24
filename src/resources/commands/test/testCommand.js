const CommandBase = require("../../../structures/base/CommandBase");

module.exports = class TestCommands extends CommandBase {
    constructor(client) {
        super(client, {
            name: "ping",
            aliases: ['latency', 'botping'],
            category: "piblic"
        });

        this.client = client;
    }; async run(message, args) {
        const { author, member, channel, guild, content, mentions } = message;

        return channel.send(`...`).then(async msg => {
            msg.edit(`Ping: **${this.client.ws.ping}**ms.\nTempo de Resp: **${msg.createdTimestamp - message.createdTimestamp}**ms.`)
        })
    }
}