const ListenerBase = require("../../../structures/base/ListenerBase");
require('dotenv').config()

module.exports = class MessageListener extends ListenerBase {
    constructor(client) {
        super(client, {
            name: "message"
        });

        this.client = client
    }; async run(message) {
        const { member, author, channel, guild } = message
        if (author.bot || channel.type === 'dm') return;
        
        const isPrefix = process.env.PREFIX
        if(message.content.indexOf(isPrefix) !== 0) return; 
        const args = message.content.slice(isPrefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase()
        
        const command = this.client.commands.find(c => c.name.toLowerCase() === cmd||(c.aliases && c.aliases.includes(cmd)))
        if(command) { 
            command.run(message, args)
        }
    }
}