import Service from '@ember/service';
import {action} from '@ember/object'

export default class FetchService extends Service {

    @action
    async makeAPICall(api) {
        let response = await fetch(api);
        response = await response.json();
        return response;
      }
}
