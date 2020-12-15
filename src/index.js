import _ from 'lodash';
import './style.css';
import Pattern from './pattern.png';
import Xml from './sample.xml';
import Csv from './sample.csv';
import toml from './sample.toml';
import yaml from './sample.yaml';
import json from './sample.json5';

console.log(toml.title);
console.log(toml.owner.name);

console.log(yaml.title);
console.log(yaml.owner.name);

console.log(json.title);
console.log(json.owner.name);

function component() {

  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  //Add the image to our existing div.
  const myImage = new Image();

  myImage.src = Pattern;

  element.appendChild(myImage);

  console.log(Xml);
  console.log(Csv);

  return element;

}

document.body.appendChild(component());