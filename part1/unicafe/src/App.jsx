import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.statistic}</td>
    </tr>
  );
};

const Statistics = (props) => {
  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" statistic={props.good} />
          <StatisticLine text="neutral" statistic={props.neutral} />
          <StatisticLine text="bad" statistic={props.bad} />
          <StatisticLine text="all" statistic={props.all} />
          <StatisticLine
            text="average"
            statistic={Math.round((props.value / props.all) * 100) / 100}
          />
          <StatisticLine
            text="positive"
            statistic={Math.round((props.good / props.all) * 10000) / 100 + "%"}
          />
        </tbody>
      </table>
    </>
  );
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
      <Button
        handleClick={() => {
          setGood(good + 1);
          setAll(all + 1);
          setValue(value + 1);
        }}
        text="good"
      />
      <Button
        handleClick={() => {
          setNeutral(neutral + 1);
          setAll(all + 1);
        }}
        text="neutral"
      />
      <Button
        handleClick={() => {
          setBad(bad + 1);
          setAll(all + 1);
          setValue(value - 1);
        }}
        text="bad"
      />
      {all > 0 && (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          all={all}
          value={value}
        />
      )}
    </div>
  );
};

export default App;
