export default class ThreadsService {

    async listThreads({ userId = 'me', maxResults = 25, labelIds }) {
        let response = await window.gapi.client.gmail.users.threads
            .list({userId, maxResults, labelIds: labelIds })
        const threads = response.result.threads;
        if (threads) {
            const batch = window.gapi.client.newBatch();
            const threadsRequests = threads.map(thread => (
                {
                    thread,
                    request: window.gapi.client.request({
                        path: `gmail/v1/users/me/threads/${thread.id}`
                    })
                }
            ));
            threadsRequests.forEach(({thread, request }) => {
                batch.add(request);
            });
            let response = await batch;
            return Object.values(response.result).map(threadResponse => threadResponse.result);
        } else {
            return [];
        }
    }

}