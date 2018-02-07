import { Base64 } from 'js-base64';
import MailComposer from 'nodemailer/lib/mail-composer';
import BaseService from './BaseService';

export default class MessagesService extends BaseService {

    composeMessage(message) {
        return new Promise((resolve, reject) => {
            const mail = new MailComposer(message);
            mail.compile().build((err, composedMessage) => {
                resolve(composedMessage);
            });
        });
    }

    send({ encodedString: raw, userId = 'me'}) {
        return window.gapi.client.gmail.users.messages.send({
            userId,
            resource: { raw }
        });
    }

    async sendMessage(message) {
        const composedMessage = await this.composeMessage(message);
        const encodedString = Base64.encodeURI(composedMessage);
        return this.send({ encodedString });
    }
}