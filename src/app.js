import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp.js';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

/*new class syntax
class NewSyntax {
  name="lucas";
  getGreeting = () => {
    return `meu nome é ${this.name}`;
  }
}
const newS = new NewSyntax();
const getGreeting = newS.getGreeting;
console.log(getGreeting());
*/
