import ClockList from "./components/ClockList";
import Form from "./components/Form";
function App() {
  const quantities = [1];
  console.log("app component render");
  return (
    <div>
      <ClockList quantities={quantities} />
      <Form />
    </div>
  );
}

export default App;
