export default class LabelsService {

    async listLabels() {
        const response = await window.gapi.client.gmail.users.labels.list({userId: 'me'})
        return response.result.labels;
    }

}