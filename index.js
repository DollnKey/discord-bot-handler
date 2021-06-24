const {Intents} = require('discord.js')
const ClientManager = require("./src/managers/clientManager");
const client = new ClientManager({ ws: { intents: Intents.ALL } })

client.initilzie()
.catch(err => client.loggers.error(err))
