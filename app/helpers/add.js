import { helper } from '@ember/component/helper';

export default helper(function add(value) {
  return Number(value) + 1;
});
