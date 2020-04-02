console.log('app.js is running!');
const app = {
  titulo: 'Ferramenta de visibilidade',
  elementoBotao: 'Mostrar Segredo',
  segredo: []
};

const showSegredo = () => {
  app.segredo.push('O segredo é estudar muito e respeitar os pais');
  app.elementoBotao = 'Esconder Segredo';
  renderapp();
};

const hideSegredo = () => {
  app.segredo = [];
  app.elementoBotao = 'Mostrar Segredo';
  renderapp();
};

const elementId = document.getElementById('app');
const renderapp = () => {
  const template = (
    <div>
    <h1>{app.titulo}</h1>
    <button onClick={app.segredo.length === 0 ? showSegredo : hideSegredo}>{app.elementoBotao}</button>
    <p>{app.segredo}</p>
    </div>
  )
  ReactDOM.render(template, elementId);
}
renderapp();