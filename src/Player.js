import React, {Component} from 'react';

export default class Player extends Component {
  constructor(props){
    super(props);

    this.state = {
      score: this.props.score
    }
  }

  handleDec(event){
    this.setState({
      score: this.state.score - 1
    })
  }

  handleInc(event){
    this.setState({
      score: this.state.score + 1
    })
  }

  render(){
    const styles = {
      player: {
        display: 'flex',
        padding: 10
      },
      name: {
        flex: 1
      },
      playerScore: {
        width: 200
      },
      score: {
        padding: 20
      },
      button: {
        padding: 10
      }
    }

    return(
      <div style={styles.player}>
        <div style={styles.name}>
          {this.props.name}
        </div>
        <div style={styles.playerScore}>
          <div>
            <button style={styles.button} onClick={()=> this.handleDec()}>-</button>
            <span style={styles.score}>{this.state.score}</span>
            <button style={styles.button} onClick={()=> this.handleInc()}>+</button>
          </div>
        </div>
      </div>
    )
  }
}
