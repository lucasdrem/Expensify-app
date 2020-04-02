class Counter extends React.Component {
  constructor (props){
    super(props);
    this.addOneHandle = this.addOneHandle.bind(this);
    this.minusOneHandle = this.minusOneHandle.bind(this);
    this.resetHandle = this.resetHandle.bind(this);
    this.state = {
      count: 0
    };
  }
  componentDidMount(){
    try{
      const json = localStorage.getItem('count');
      const count = JSON.parse(json);
      this.setState(() => ({count}))
    } catch(e){

    }

  }
  componentDidUpdate (prevProps, prevState){
    if(prevState.count !== this.state.count){
      const json = JSON.stringify(this.state.count);
      localStorage.setItem('count', json);
    }
  }
  addOneHandle () {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }
  minusOneHandle () {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }
  resetHandle () {
    this.setState((prevState) => {
      return {
        count: 0
      };
    });
  }

  render() {
    return (
      <div>
      <h1>Count: {this.state.count}</h1>
      <button onClick={this.addOneHandle}>+1</button>
      <button onClick={this.minusOneHandle}>-1</button>
      <button onClick={this.resetHandle}>Reset</button>
      </div>
    )
  }
}

// Counter.defaultProps = {
//   count: 0
// }

ReactDOM.render(<Counter />, document.getElementById('app'));