console.log('app.js is running!');
const app = {
    title: 'Indecision app!',
    subtitle: 'Coloque sua vida em suas mãos',
    options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  let option = e.target.elements.option.value;
  if(option){
    app.options.push(option);
    rendertemplate();
  }
};

const onFormDelete = (e) => {
  e.preventDefault();
  app.options = [];
  rendertemplate()
};

const onMakeDecision = () => {
  const numeroRand = Math.floor(Math.random() * app.options.length);
  const option = app.options[numeroRand];
};

const elementId = document.getElementById('app');

const numbers = [30, 20, 10];

const rendertemplate = () => {
const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Aqui estão suas opcões' : 'Sem opcões'}</p> 
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>O que eu deveria fazer?</button>
      <button onClick={onFormDelete}>Deletar</button>
      <ul>{
        app.options.map((opt, i) => <li key={opt[i]}>Opções: {opt}</li>)
      }</ul>
      <form onSubmit={onFormSubmit}>
      <input type="text" name="option"/>
      <button>Submit</button>
      </form>
    </div>
  );
  ReactDOM.render(template, elementId);
}

rendertemplate();




