export default class ThreadsService {

    listThreads({ labelIds }) {
        return window.gapi.client.gmail.users.threads
            .list({userId: 'me', labelIds: labelIds })
            .then(response => response.result.threads);
    }

}