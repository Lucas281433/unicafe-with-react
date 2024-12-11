import { useState } from "react";
import { Card, CardImg, Container, Stack } from "react-bootstrap";

import coffeImage from "./assets/coffee.jpg"
import CustomButton from "./components/CustomButton/CustomButton";
import Statistics from "./components/Statistic/Statistics";

  /**
   * The App component renders the main application with a card
   * with three buttons and a table with statistics.
   * 
   * The state of the App component is defined by the following
   * properties:
   * - good: the number of good feedbacks
   * - neutral: the number of neutral feedbacks
   * - bad: the number of bad feedbacks
   * - all: the total number of feedbacks
   * - average: the average of the feedbacks (good:1, neutral:0, bad:-1)
   * - positive: the percentage of positive feedbacks
   * 
   * The component renders a card with a title and a stack of three
   * buttons. Each button has a different color and a different text.
   * When a button is clicked, the corresponding state is updated.
   * The component also renders a table with the following columns:
   * - Good: the number of good feedbacks
   * - Neutral: the number of neutral feedbacks
   * - Bad: the number of bad feedbacks
   * - All: the total number of feedbacks
   * - Average: the average of the feedbacks (good:1, neutral:0, bad:-1)
   * - Positive: the percentage of positive feedbacks
   * 
   * Returns a JSX.Element
   */
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  /**
   * Updates the state of the App component to reflect a good feedback.
   * Returns nothing
   */
  const feedbackGood = () => {
    setGood(good + 1);
    setAll(all + 1);
    setAverage((good + 1 - bad) / (all + 1));
    setPositive(((good + 1) / (all + 1)) * 100);
  };

  /**
   * Updates the state of the App component to reflect a neutral feedback.
   * Returns nothing
   */
  const feedbackNeutral = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
    setAverage((good - bad) / (all + 1));
    setPositive((good / (all + 1)) * 100);
  };

  /**
   * Updates the state of the App component to reflect a bad feedback.
   * Returns nothing
   */
  const feedbackBad = () => {
    setBad(bad + 1);
    setAll(all + 1);
    setAverage((good - (bad + 1)) / (all + 1));
    setPositive((good / (all + 1)) * 100);
  };

  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center container">
      <h1 className="title-app">Unicafe</h1>
      <Card
        className="border-4 border-primary-subtle card">
        <CardImg src={coffeImage} />
        <Card.Body className="card-body">
          <h1 className="text-center card-title">
            Give Feedback
          </h1>
          <Stack className="d-flex flex-row justify-content-around">
            <CustomButton
              text="Good"
              handleClick={feedbackGood}
              color="success"
            />
            <CustomButton
              text="Neutral"
              handleClick={feedbackNeutral}
              color="warning"
            />
            <CustomButton text="Bad" handleClick={feedbackBad} color="danger" />
          </Stack>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            all={all}
            average={average}
            positive={positive}
          />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default App;
