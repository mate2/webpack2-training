/*
import big from '../assets/big.jpeg';
import small from '../assets/small.jpeg';
import '../styles/image_viewer.css';

const image = document.createElement('img');
image.src = small;
document.body.appendChild(image);

const bigImage = document.createElement('img');
bigImage.src = big;
document.body.appendChild(bigImage);


const test = document.createElement('img');
test.src = 'http://www.lorempixel.com/1200/1200';
document.body.appendChild(test);
*/

import small from '../assets/small.jpeg';
import '../styles/image_viewer.css';

export default () => {
  const image = document.createElement('img');
  image.src = small;
  document.body.appendChild(image);
}