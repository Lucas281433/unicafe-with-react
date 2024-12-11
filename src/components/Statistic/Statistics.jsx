import { Card, Table } from "react-bootstrap";

import StatisticLine from "../StatisticLine/StatisticLine";
import "./Statistics.css";

/**
 * Statistics renders a table with the following columns:
 * - Good: the number of good feedbacks
 * - Neutral: the number of neutral feedbacks
 * - Bad: the number of bad feedbacks
 * - All: the total number of feedbacks
 * - Average: the average of the feedbacks (good:1, neutral:0, bad:-1)
 * - Positive: the percentage of positive feedbacks
 * If no feedback has been given, it renders a message "No feedback given"
 * @param {{good:number, neutral:number, bad:number, all:number, average:number, positive:number}} props
 * @returns {JSX.Element}
 */

const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div className="text-center">
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <Card className="mt-3">
      <h1 className="text-center">Statistics</h1>
      <Table className="text-center">
        <tbody>
          <tr>
            <td>
              <StatisticLine text="Good" />
            </td>
            <td>
              <StatisticLine value={props.good} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text="Neutral" />
            </td>
            <td>
              <StatisticLine value={props.neutral} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text="Bad" />
            </td>
            <td>
              <StatisticLine value={props.bad} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text="All" />
            </td>
            <td>
              <StatisticLine value={props.all} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text="Average" />
            </td>
            <td>
              <StatisticLine value={props.average.toFixed(1)} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text="Positive" />
            </td>
            <td>
              <StatisticLine value={`${props.positive.toFixed(1)} % `} />
            </td>
          </tr>
        </tbody>
      </Table>
    </Card>
  );
};

export default Statistics;
