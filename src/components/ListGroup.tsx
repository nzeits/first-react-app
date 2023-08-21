import { useState } from "react";
//Typesctipt interface
//Props treated as immutable 
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

//instead of using props - destructure it using the  {} and add the properties like items and heading
function ListGroup({ items, heading, onSelectItem }: Props) {
  //Hook - allows us to tap into built in feature in React
  //useState will have data or state that will change overtime
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //MouseEvent is type annotation in Typesctipt

  return (
    //Empty brackets tells react to use a Fragment
    //Fragments allow you to add more than one element to a return
    <>
      <h1>{heading}</h1>
      {/* //If it's true the result is the second value - so False would display No Item Found */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
