const ListenerBase = require("../../../structures/base/ListenerBase");

module.exports = class ReadyListener extends ListenerBase {
    constructor(client) {
        super(client, {
            name: "ready"
        });

        this.client = client
    }

    async run() {
        this.client.loggers.space();
        this.client.loggers.space();

        try {
            this.client.loggers.load();
            this.client.user.setActivity({ name: "DollnKey, és lindo :)", type: 1 })
        } catch(err) {
            this.client.loggers.error(err)
        }
    }
}