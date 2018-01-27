import BaseService from './BaseService';

export default class LabelsService extends BaseService {

    listLabels({ userId = 'me'} = {}) {
        return window.gapi.client.gmail.users.labels.list({userId})
    }

    getLabel({ userId = 'me', labelId: id}) {
        return window.gapi.client.gmail.users.labels.get({userId, id})
    }

    async listDetailLabels({ userId = 'me'} = {}) {
        const { result: { labels } } = await this.listLabels({ userId });
        const labelsRequest = labels.map(label => this.getLabel({ labelId: label.id }));
        let response = await this.executeBatch(labelsRequest);
        return Object.values(response.result).map(labelResponse => labelResponse.result);
    }

}