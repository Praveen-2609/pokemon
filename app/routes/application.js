import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service fetch;
  async model() {
    let response = await this.fetch.makeAPICall(
      'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'
    );
    let pokemon = [];
    for (let i = 0; i < response.results.length; i++) {
      pokemon[i] = await this.fetch.makeAPICall(response.results[i].url);
    }
    return pokemon;
  }
}
