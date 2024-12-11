import { Button } from "react-bootstrap";

/**
 * CreatedButton is a functional component that renders a Bootstrap Button.
 * 
 * Props:
 * - text (string): The text to display inside the button.
 * - color (string): The Bootstrap variant color of the button.
 * - handleClick (function): The function to be called when the button is clicked.
 */

const CreatedButton = (props) => {
    return (
      <Button
        className="ms-3 me-3"
        variant={props.color}
        onClick={props.handleClick}
      >
        {props.text}
      </Button>
    );
  };

  export default CreatedButton