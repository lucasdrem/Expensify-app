let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
}
const minusOne = () => {
  count--;
  renderCounterApp();
}
const resetAll = () => {
  count = 0;
  renderCounterApp();
}
const elementId = document.getElementById('app');

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick = {addOne}> +1</button>
      <button onClick = {minusOne}>-1</button>
      <button onClick = {resetAll}>Reset</button>
    </div>
  )
  ReactDOM.render(templateTwo, elementId);
}
renderCounterApp();
