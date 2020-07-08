import React from 'react';

class CycleCounter extends React.Component {

  constructor(props){
    super(props);
    this.state = {counter : 0};
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(e){
    let newVal = this.state.counter+1 == this.props.cycle ? 0 : this.state.counter+1;
    this.setState({counter: newVal});
  }

  render() {
    return (
      <button
        data-testid="cycle-counter"
        style={{ fontSize: '1rem', width: 120, height: 30, }}
        onClick={this.onButtonClick}>{this.state.counter}</button>
    );
  }
}

export default CycleCounter;
