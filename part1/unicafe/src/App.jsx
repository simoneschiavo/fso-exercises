import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Statistics = (props) => {
  return (
    <>
      <h1>statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.all}</p>
      <p>average {Math.round((props.value / props.all) * 100) / 100}</p>
      <p>positive {Math.round((props.good / props.all) * 10000) / 100}%</p>
    </>
  );
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => {
        setGood(good + 1);
        setAll(all + 1);
        setValue(value + 1);
      }} text="good" />
      <Button handleClick={() => {
        setNeutral(neutral + 1);
        setAll(all + 1);
      }} text="neutral" />
      <Button handleClick={() => {
        setBad(bad + 1);
        setAll(all + 1);
        setValue(value - 1);
      }} text="bad" />
      {all>0 && <Statistics good={good} neutral={neutral} bad={bad} all={all} value={value} />}
    </div>
  );
};

export default App;
