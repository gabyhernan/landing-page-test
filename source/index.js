// import $ from 'jquery'; Before using jQuery, install it with `npm install --save jquery`
import './javascript/nav.js';
import './style/style.scss';
import './style/style.css';
import './style/css-lib/bootstrap-theme.css';
import './style/css-lib/bootstrap-theme.min.css';
import './style/css-lib/bootstrap.css';
import './style/css-lib/bootstrap.min.css';

const saySomething = (something) => {
  console.log(something); // eslint-disable-line no-console
};

saySomething('Something! (index.js)');

/*
To use jQuery, first install it as a dependency: `npm install --save jquery`.
Then include `import $ from 'jquery';` at the top every JavaScript file that uses jQuery.
$('span').mouseover(() => {
  alert('span span!');
});
*/
