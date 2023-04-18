import { Buttons } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";
import { useState } from "react";

export const App = () => {

const [good, setGood] = useState(0);
const [neutral, setNeutral] = useState(0);
const [bad, setBad] = useState(0);

const handleClick = e => {
switch (e) {
  case 'good': 
  setGood(good + 1);
  break;

  case 'neutral': 
  setNeutral(neutral + 1);
  break;

  case 'bad': 
  setBad(bad + 1);
  break;

  default:
    return
}
};

    const total = good + neutral + bad;
    const percend = Math.round((good / total) * 100);

    return (
      <>
      <Section title='Please leave feedback'>
      <Buttons options={{good, neutral, bad}} onLeaveFeedback = {handleClick}/>
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
};