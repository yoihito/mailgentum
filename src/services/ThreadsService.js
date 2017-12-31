export default class ThreadsService {

    listThreads({ userId = 'me', maxResults = 25, labelIds }) {
        return window.gapi.client.gmail.users.threads
            .list({userId, maxResults, labelIds: labelIds })
            .then(response => response.result.threads)
            .then(threads => {
                console.log(threads);
                const batch = window.gapi.client.newBatch();
                const threadsRequests = threads.map(thread => window.gapi.client.request({
                    path: `gmail/v1/users/me/threads/${thread.id}`
                }));
                threadsRequests.forEach((request) => {
                    batch.add(request);
                });
                return batch
            }).then(response => {
                
            });
    }

}