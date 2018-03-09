import React, {Component} from 'react';

export default class AddPlayer extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: ""
    }
    this.onPlayerChange = this.onPlayerChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  onPlayerChange(event){
    this.setState({
      name: event.target.value
    })
  }

  handleAdd(event){
    this.props.onAdd(this.state.name)
  }
  render(){
    return (
      <div>
        <input onChange={this.onPlayerChange} value={this.state.name}/>
        <button onClick={this.handleAdd}>Add Players</button>
      </div>
    )
  }
}
