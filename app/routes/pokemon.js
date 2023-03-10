import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PokemonRoute extends Route {
  @service fetch;

  async model(params) {
    let details = this.modelFor('application')[params.id - 1];
    let species = await this.pokemon_character_species(details.species.url);
    if (species.evolves_from_species !== null) {
      var evolved_species_img =
        await this.pokemon_character_evolved_species_img(species);
    }
    return {
      details,
      species,
      evolves: {
        name: species.evolves_from_species,
        img: evolved_species_img,
      },
    };
  }

  async pokemon_character_species(api) {
    return await this.fetch.makeAPICall(api);
  }

  async pokemon_character_evolved_species_img(species) {
    return await this.fetch.makeAPICall(
      'https://pokeapi.co/api/v2/pokemon/' +
        species.evolves_from_species.name +
        '/'
    );
  }
}
