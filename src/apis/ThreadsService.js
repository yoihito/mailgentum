import parseMessage from 'gmail-api-parse-message';
import BaseService from './BaseService';

export default class ThreadsService extends BaseService {

    getThread({ userId= 'me', threadId: id, format = 'full' }) {
        return window.gapi.client.gmail.users.threads
            .get({ id, userId, format })
    }

    listThreads({ userId = 'me', maxResults = 25, labelIds }) {
        return window.gapi.client.gmail.users.threads
            .list({userId, maxResults, labelIds: labelIds })
    }

    modifyThread({ userId = 'me', threadId: id, addLabelIds = [], removeLabelIds = [] }) {
        return window.gapi.client.gmail.users.threads.modify({
            userId,
            id,
            addLabelIds,
            removeLabelIds,
        });
    }

    async listDetailedThreads({ userId = 'me', maxResults = 25, labelIds }) {
        const { result: { threads, resultSizeEstimate } } = await this.listThreads({ userId, maxResults, labelIds });
        if (resultSizeEstimate > 0) {
            const threadsRequests = threads.map(thread => this.getThread({ threadId: thread.id }));
            const response = await this.executeBatch(threadsRequests);
            return Object.values(response.result).map(threadResponse => {
                return {
                    ...threadResponse.result,
                    messages: threadResponse.result.messages.map(message => parseMessage(message))
                };
            });
        } else {
            return [];
        }
    }

    async markThreadAsRead({ userId = 'me', threadId }) {
        const response = await this.modifyThread({ userId, threadId, removeLabelIds: ['UNREAD'] });
        return response.result;
    }

    async getProcessedThread({ userId = 'me', threadId }) {
        const response = await this.getThread({ userId, threadId });

        return {
            ...response.result,
            messages: response.result.messages.map(message => parseMessage(message))
        };
    }

}