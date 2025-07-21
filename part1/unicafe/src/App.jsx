import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

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
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {Math.round(value / all * 100 ) / 100}</p>
      <p>positive {Math.round(good / all * 10000) / 100}%</p>
    </div>
  );
};

export default App;
