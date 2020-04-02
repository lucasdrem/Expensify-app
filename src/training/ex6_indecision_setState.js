class IndecisionApp extends React.Component {
    constructor(props) {
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
        options: [],
        title: 'Está indeciso?',
        subtitle: 'Coloque sua vida em nossas mãos!'
      }
    }
    handleDeleteOptions (){
      this.setState(()=>{
        return {
          options: []
        }
      })
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
      this.setState ((prevState) => {
        return {
          options: prevState.options.concat([option])
        };
      });
    }
    render () {
      return (
        <div>
        <Header title={this.state.title} subtitle={this.state.subtitle}/>
        <Action 
        hasOptions={this.state.options.length > 0}
        handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
      );
    }
  }
  
  class Header extends React.Component {
    render () {
      return (
        <div> 
          <h1>{this.props.title}</h1>
          <h2>{this.props.subtitle}</h2>
        </div>
      );
    }
  }
  
  class Action extends React.Component {
  
    render () {
      return (
        <div>
          <button onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
          >
          O que eu deveria fazer?
          </button>
        </div>
      );
    }
  }
  
  class Options extends React.Component {
  
    render () {
      return (
        <div>
        <p>Opções:</p>
        <button onClick={this.props.handleDeleteOptions}>Deletar</button>
        <Option optionsText={this.props.options}/>
      </div>
      );
    }
  }
  
  class Option extends React.Component {
    render () { 
      return (
        <div>
          <ul>{
            this.props.optionsText.map( (el, i) =>{
              return <li key={i}>{el}</li>
            })
          }
            </ul>
        </div>
      );
    }
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
      this.setState (() => {
        return {error} //es6 error:error, usar esse que deixei sem comentar
      })
      e.target.elements.option.value = ''
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