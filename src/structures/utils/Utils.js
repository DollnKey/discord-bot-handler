const {readdir, readdirSync} = require('fs')

module.exports = class Utils {
    constructor(client) {
        this.client = client
    }

    async loadCommands() {
        readdir("./src/resources/commands", (err, files) => {
            if (err) return this.client.loggers.error(` Ocorreu um erro com o Structure Commands!\n${err}`)
            for (const dir of files) {
                readdir(`./src/resources/commands/${dir}/`, (err, commands) => {
                    if (err)  return this.client.loggers.error(`Ocorreu um erro com o Structure Commands!\n${err}`)
                    for (const com of commands) {
                        try {
                            if (!com) return;
                            const command = new (require(`../../resources/commands/${dir}/${com}`))(this.client);
                            this.client.commands.set(command.name, command);
                            command.aliases.map(a => this.client.aliases.set(a, command));
                        } catch (e) {
                            return this.client.loggers.error(`[ERROR] | Ocorreu um erro com algum Comando!\n${e}`)
                        }
                    }

                })
            }
        });
    }

	async loadEvents() {
        const eventFolder = readdirSync('./src/resources/listeners/')
        for (const dir of eventFolder) {
            const folderFiles = readdirSync(`./src/resources/listeners/${dir}/`).filter(d => d.endsWith('.js'));
            for (const file of folderFiles) {
                const eventFile = new (require(`../../resources/listeners/${dir}/${file}`))(this.client);

                const listener = eventFile
                this.client.on(listener.name, (...args) => {
                    listener.run(...args)
                })
            };
        };
    }
}