import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
  queryParams = ['name'];

  @tracked name = '';

  get characters() {
    for (let i = 0; i < this.model.length; i++) {
      let { name } = this.model[i];
      this.model[i] = {
        ...this.model[i],
        isValid: name.startsWith(this.name),
      };
    }
    return this.model;
  }
}
