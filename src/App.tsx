import ListGroup from "./ListGroup";

let items = ["New York", "London", "Paris", "Singapore", "Tahoe City"];

function App() {
  return (
    <ListGroup
      items={items}
      heading={"Cities"}
      onSelectItem={(item: String) => {
        console.log(item);
      }}
    />
  );
}

export default App;
