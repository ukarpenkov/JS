import React from 'react';



class App extends React.Component {

  state = {
    count: 0
  }

  handleClick = (num) => {
    this.setState({
      count: this.state.count + num
    })
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.count}</p>
        <button
          onClick={() => this.handleClick(+1)}
        >+</button>
        <button
          onClick={() => this.handleClick(-1)}
        >-</button>
      </div>
    );
  }
}
export default App;
