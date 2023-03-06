import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service fetch;
  async model() {
    let response = this.modelFor('application');
    return response;
  }
}
