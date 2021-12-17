import ServerQuery from '../../query/server.query';

/** @namespace  test/Store/Server/Server/Dispatcher/serverDispactcher */
export class serverDispatcher {
    async getServer() {
        return ServerQuery();
    }
}

export default new serverDispatcher();