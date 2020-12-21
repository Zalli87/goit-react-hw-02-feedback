import './App.css';
import React from 'react';
import FeedbackOptions from './components/Feedback/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Container from './components/Container/Container';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification'

class App extends React.Component {
state = {
        good: 0,
        neutral: 0,
        bad: 0
};
  
  leaveFeedback = option => {
    this.setState({ [option]: this.state[option] + 1 });
  }

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, feedback) => total + feedback, 0);
  };
  
 countPositiveFeedbackPercentage = () => {
   const { good } = this.state;
   const totalFeedback = this.countTotalFeedback();
      return  Math.round(good / totalFeedback * 100);
 };
  
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Section title="Please leave feedback">
      <FeedbackOptions
        options={Object.keys(this.state)}
        onLeaveFeedback={this.leaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ?
            (<Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()} />) :
            (< Notification message="No feedback given" />)}
          </Section>
        </Container>
    );
    
  };

}

export default App;
