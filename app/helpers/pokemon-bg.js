import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

export default helper(function pokemonBg([types]) {
  let typescolor = {
    grass: 'rgb(120, 200, 80)',
    fire: 'rgb(240, 128, 48)',
    water: 'rgb(104, 144, 240)',
    bug: 'rgb(168, 184, 32)',
    normal: 'rgb(168, 168, 120)',
    poison: 'rgb(160, 64, 160)',
    electric: 'rgb(248, 208, 48)',
    ground: 'rgb(224, 192, 104)',
    fairy: 'rgb(238, 153, 172)',
    fighting: 'rgb(192, 48, 40)',
    psychic: 'rgb(248, 88, 136)',
    flying: 'rgb(168, 144, 240)',
    steel: 'rgb(184, 184, 208)',
    ice: 'rgb(152, 216, 216)',
    ghost: 'rgb(112, 88, 152)',
    rock: 'rgb(184, 160, 56)',
  };
  if (types.length === 1) {
    return htmlSafe('background-color:' + typescolor[types[0].type.name]);
  } else if (types.length === 2) {
    return htmlSafe(
      'background: linear-gradient(90deg,' +
        typescolor[types[0].type.name] +
        ' 50%, ' +
        typescolor[types[1].type.name] +
        ' 50%)'
    );
  }
});
