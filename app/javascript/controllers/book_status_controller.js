import { Controller } from "stimulus"
import consumer from '../channels/consumer';

export default class extends Controller {
    static targets = ['bookstatus']

    connect() {
        console.log("Will create a subscription for channel 'LibraryBookStatusChannel', library_book_id: %s", this.data.get('bookid'));

        this.channel = consumer.subscriptions.create({ channel: 'LibraryBookStatusChannel', library_book_id: this.data.get('bookid') }, {
            connected: this._cableConnected.bind(this),
            disconnected: this._cableDisconnected.bind(this),
            received: this._cableReceived.bind(this),
          });
    }

    _cableConnected() {
        console.log('_cableConnected');
    }

    _cableDisconnected() {
        console.log('_cableDisconnected');
    }

    _cableReceived(data) {
        console.log('_cableReceived');
        console.log(data);

        this.bookstatusTarget.innerHTML = data.message;
    }
}