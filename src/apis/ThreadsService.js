import BaseService from './BaseService';

export default class ThreadsService extends BaseService{

    getThread({ userId= 'me', threadId: id }) {
        return window.gapi.client.gmail.users.threads
            .get({ id, userId })
    }

    listThreads({ userId = 'me', maxResults = 25, labelIds }) {
        return window.gapi.client.gmail.users.threads
            .list({userId, maxResults, labelIds: labelIds })
    }

    async listThreadsWithMessage({ userId = 'me', maxResults = 25, labelIds }) {
        const { result: { threads, resultSizeEstimate } } = await this.listThreads({ userId, maxResults, labelIds });
        if (resultSizeEstimate > 0) {
            const threadsRequests = threads.map(thread => this.getThread({ threadId: thread.id }));
            let response = await this.executeBatch(threadsRequests);
            return Object.values(response.result).map(threadResponse => threadResponse.result);
        } else {
            return [];
        }
    }

}