const chalk = require('chalk')

module.exports = class Logger {
    constructor(client) {
        this.client = client;
    }

    load() {
        return console.log(`[${chalk.cyan.bold(this.client.user.tag)}] | Iniciado com sucesso, sem errors.`)
    }

    space() {
        return console.log('')
    }

    error(content) {
        return console.log(content)
    }
}