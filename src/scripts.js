// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
import webAPI from './webAPI.js'
// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');
// console.log(webAPI)
window.addEventListener('load', retrieveAllData);

function retrieveAllData() {
  webAPI.getData()
  .then(data => console.log(data))

}
