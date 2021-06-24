module.exports = class ListenerBase {
    constructor(client, options) {
        this.client = client
        this.name = options.name
    }
}