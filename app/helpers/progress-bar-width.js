import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

export default helper(function progressBarWidth(percentage) {
  let str = 'width:' + (percentage < 100 ? percentage : '100') + '%';
  return htmlSafe(str);
});
