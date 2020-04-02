import React from 'react';
import ReactDOM from 'react-dom';
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: [],
      subtitle: 'Coloque sua vida em nossas mãos!'
    }
  }
  //lifecycles! nao funciona em state base components
  componentDidMount(){
    try{
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
  
      if(options){
        this.setState(() => ({ options }));
        console.log('Carregando dados..');
      };
    } catch(e){
      //Fazer nada
    }

  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      console.log('Salvando dados...');
    };
  }
  componentWillUnmount(){
    console.log('Desmontou');
  }
//end
  handleDeleteOptions (){
    this.setState (() => ({ options: []}) );
  }
  handleDeleteOption(optionToRemove) {
    this.setState ((prevState) => ({
      options: prevState.options.filter((option) =>{
        return optionToRemove !== option
      })
    }));
  }
  handlePick () {
    const numeroRand = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[numeroRand])
  }
  handleAddOption(option){
    if(!option){
      return 'Entre com um valor válido'
    } else if(this.state.options.indexOf(option) > -1) {
      return 'Essa opção já existe'
    }
    this.setState ((prevState) => ({options: prevState.options.concat([option])}) );
  }
  render () {
    return (
      <div>
      <Header subtitle={this.state.subtitle}/>
      <Action 
      hasOptions={this.state.options.length > 0}
      handlePick={this.handlePick}
      />
      <Options 
        options={this.state.options}
        handleDeleteOption={this.handleDeleteOption}
        handleDeleteOptions={this.handleDeleteOptions}
      />
      <AddOption 
        handleAddOption={this.handleAddOption}
      />
    </div>
    );
  }
}

//  IndecisionApp.defaultProps = {
//   options: []
// }

const Header = (props) =>{
  return (
    <div> 
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
}

Header.defaultProps = {
  title: 'Indeciso?'
}

const Action = (props) =>{
  return (
    <div>
      <button onClick={props.handlePick}
      disabled={!props.hasOptions}
      >
      O que eu deveria fazer?
      </button>
    </div>
  );
}


const Options = (props) =>{
  return (
    <div>
    <p>Opções:</p>
    <button onClick={props.handleDeleteOptions}>Deletar tudo</button>
    {props.options.length ===0 && <p>Por favor, adicione opções!</p>}
    {
      props.options.map( (option) => <Option optionText={option} key={option} handleDeleteOption={props.handleDeleteOption}/> )
    }
  </div>
  );
}

const Option = (props) =>{
  return (
    <div>
      {props.optionText}
      <button 
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >remover</button>
    </div>
  );
}

class AddOption extends React.Component{
  constructor (props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption (e) {
    e.preventDefault();
    let option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState (() => ({error}) );//es6 error:error, usar esse que deixei sem comentar 
    if(!error){
      e.target.elements.option.value = ''
    }

  }
  render () {
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}
      <form onSubmit={this.handleAddOption}>
        <input type="text" name="option"/>
        <button>Adicionar opção</button>
      </form>
    </div>
    );
  }
}
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
