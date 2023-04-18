import React, {Component} from "react";
import { Buttons } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";
export class App extends Component {

state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

handleClick = e => {
this.setState(prevState => ({
[e]: prevState[e] + 1,
}));
};

countTotalFeedback = () => {
  const votes = Object.values(this.state);
  return votes.reduce((acc, vote) => acc + vote, 0);
};

countPositiveFeedbackPercentage = (good, total) => {
  return Math.round((good / total) * 100);
}

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const percend = this.countPositiveFeedbackPercentage(good, total);

    return (
      <>
      <Section title='Please leave feedback'>
      <Buttons options={options} onLeaveFeedback = {this.handleClick}/>
      {!total 
       ? (<Notification message={"There is no feedback"} />)
       : (
        <Statistics 
        good = {good} 
        neutral = {neutral} 
        bad = {bad}
        total = { total }
        percend = { percend }
        />
       ) 
      }
      </Section>
    </>
    );
  }
};