const {Collection, Client} = require('discord.js')
const Logger = require('../structures/build/loggerBuild')
const Utils = require('../structures/utils/Utils')
require('dotenv').config()

module.exports = class ClientManager extends Client {
    constructor(...options) {
        super(...options)
        this.commands = new Collection()
        this.aliases = new Collection()
        this.utils = new Utils(this)
        this.loggers = new Logger(this)
    }

    async initilzie(token) {
        super.login(token || process.env.TOKEN)
        this.utils.loadCommands()
        this.utils.loadEvents()
    };
};