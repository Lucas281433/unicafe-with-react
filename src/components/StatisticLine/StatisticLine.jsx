/**
 * StatisticLine is a functional component that renders a single
 * statistic line of the statistics table.
 * 
 * Props:
 * - text (string): The text to display for the statistic
 * - value (number): The value of the statistic
 * 
 * Returns a JSX.Element
 */

const StatisticLine = (props) => {
  return (
    <div>
      {props.text} {props.value}
    </div>
  );
};

export default StatisticLine;
