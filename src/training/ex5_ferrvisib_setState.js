class Visibilidade extends React.Component {
    constructor(props) {
      super(props);
      this.showSegredo = this.showSegredo.bind(this);
      this.hideSegredo = this.hideSegredo.bind(this);
      this.state = {
        titulo: 'Ferramenta de visibilidade',
        elementoBotao: 'Mostrar Segredo',
        segredo: ''
      };
    }
  
    showSegredo (){
      this.setState((prevState) =>{
        return {
          segredo: 'O segredo é estudar muito e respeitar os pais',
          elementoBotao: 'Esconder Segredo'
        }
      })
    }
    
    hideSegredo (){
      this.setState((prevState) => {
        return {
          segredo: '',
          elementoBotao: 'Mostrar Segredo'
        }
      });
    }
  
    render() {
      return (
        <div>
        <h1>{this.state.titulo}</h1>
        <button onClick={this.state.segredo.length === 0 ? this.showSegredo : this.hideSegredo}>{this.state.elementoBotao}</button>
        <p>{this.state.segredo}</p>
        </div>
      )
    }
  }
  
  ReactDOM.render(<Visibilidade />, document.getElementById('app'));