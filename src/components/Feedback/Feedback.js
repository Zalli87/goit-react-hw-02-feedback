import React from 'react';
import s from './Feedback.module.css';

class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };


    onGoodClick = () => {
        this.setState((prevState) => {
            return {
                good: prevState.good + 1,
            }
        });
        console.log('Click on good')
    };
    
    onNuetralClick = () => {
         this.setState((prevState) => {
            return {
                neutral: prevState.neutral + 1,
            }
        });
        console.log('Click on nuetral')
    };

    onBadclick = () => {
          this.setState((prevState) => {
            return {
                bad: prevState.bad + 1,
            }
        });
        console.log('Click on bad')
     };

    render() {
        return (
            <div>
                <h2>Please leave feedback</h2>
                <button type='button' onClick={this.onGoodClick} >Good</button>
                <button type='button' onClick={this.onNuetralClick} >Nuetral</button>
                <button type='button' onClick={this.onBadclick} >Bad</button>
                <h2>Statictics</h2>
                <p>Good: {this.state.good} </p>
                <p>Nuetral: {this.state.neutral} </p>
                <p>Bad: {this.state.bad} </p>
            </div>
        )
    }
}

export default Feedback;