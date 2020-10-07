import React, { Component } from 'react';

class Bet extends Component {
    state = {
        player1: 0,
        player2: 0,
        stake1: 100,
        stake2: 100,
        total: 0
    };

    IncrementItem = () => {
        this.setState({ player1: this.state.player1 + 1 });
        this.setState({ stake1: this.state.stake1 - 1 });
        this.setState({ total: this.state.player1 + this.state.player2 + 1 })
    }
    DecreaseItem = () => {
        this.setState({ player2: this.state.player2 + 1 });
        this.setState({ stake2: this.state.stake2 - 1 })
        this.setState({ total: this.state.player1 + this.state.player2 + 1 })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6 offset-6">
                        <button className="btn btn-primary" onClick={this.IncrementItem}>Player 1</button>
                        <button className="btn btn-danger" onClick={this.DecreaseItem}>Player 2</button><br />


                        <h1 className="stake1">Stake:{this.state.stake1}</h1>
                        <h1 className="stake2">Stake:{this.state.stake2}</h1>
                        <h1>Total: {this.state.total}</h1>
                    </div>

                </div>
            </div>
        );
    }
}

export default Bet;
