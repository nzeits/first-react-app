import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleClick = () => {
    setAlertVisibility(true);
  };

  const handleClose = () => {
    setAlertVisibility(false);
  };

  const [alertVivible, setAlertVisibility] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {alertVivible && <Alert onClose={handleClose}> My Alert </Alert>}
      <Button onClick={handleClick}>My Button</Button>
    </div>
  );
}

export default App;
