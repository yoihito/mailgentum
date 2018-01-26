export default class BaseService { 

    executeBatch(requests) {
        const batch = window.gapi.client.newBatch();
        requests.forEach((request) => {
            batch.add(request);
        });
        return batch;
    }   
}