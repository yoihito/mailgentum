export default class LabelsService {

    listLabels() {
        return window.gapi.client.gmail.users.labels
            .list({userId: 'me'})
            .then(response => {
                return response.result.labels;
            });
    }

}