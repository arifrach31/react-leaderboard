import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Players from './Players';
import AddPlayer from './AddPlayer';

export default class Leaderboard extends Component {
  constructor(props){
    super(props);

    const PLAYERS = [
      {id: 1, name: "Mark Zukerberg", score: 85},
      {id: 2, name: "Jordan Walke", score: 80},
      {id: 3, name: "Arif Rachman", score: 50},
    ]

    this.state = {
      members: PLAYERS
    }
  }

  onPlayerAdd(name){
    let new_members = this.state.members;
    new_members.push({
      name: name,
      score: 10
    })
    this.setState({
      members: new_members
    });
  }
  render(){


    const styles = {
      container: {
        padding: 60,
      }
    }

    return(
      <div style={styles.container}>
        <h1>Leaderboard</h1>
        <Players members={this.state.members}/>
        <AddPlayer onAdd={this.onPlayerAdd}/>
      </div>
    );
  }
}
