import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default class ApplicationRoute extends Route {
  @service fetch;
  async model() {
    let response = await this.fetch.makeAPICall(
      'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'
    );
    return response.results;
  }
}
