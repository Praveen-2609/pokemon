import { helper } from '@ember/component/helper';
import { get } from '@ember/object';

export default helper(function concatstr([arr,params]) {
  let str = '';
    for (let i = 0; i < arr.length; i++) {
      str += get(arr[i], params);
      if (i < arr.length - 1) {
        str += ',';
      }
    }
    return str;
  
});
