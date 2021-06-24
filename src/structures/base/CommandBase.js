module.exports = class CommandBase {
    constructor(client, options) {
        this.client = client

        this.name = options.name
        this.aliases = options.aliases
        this.category = options.category
    }
}