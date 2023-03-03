import Component from '@glimmer/component';
import { action } from '@ember/object';
import { get } from '@ember/object';

export default class ProfileComponent extends Component {
  get abilities() {
    return this.concatstr(this.args.profile.details.abilities, 'ability.name');
  }

  get types() {
    return this.concatstr(this.args.profile.details.types, 'type.name');
  }

  get egggroups() {
    return this.concatstr(this.args.profile.species.egg_groups, 'name');
  }

  @action
  concatstr(arr, params) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
      str += get(arr[i], params);
      if (i < arr.length - 1) {
        str += ',';
      }
    }
    return str;
  }
}
