import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

export default function ListGroup({
  items,
  heading,
  onSelectItem,
}: ListGroupProps) {
  let [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <Button
        onClick={() => {
          console.log("Button pressed!");
        }}
      >
        Test
      </Button>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
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
