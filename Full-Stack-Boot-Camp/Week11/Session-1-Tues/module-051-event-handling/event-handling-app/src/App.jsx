import "./App.css";
import Button from "./components/Button";
import ContactForm from "./components/ContactForm";
import Counter from "./components/Counter";
import EventExplorer from "./components/EventExplorer";
import GreetingForm from "./components/GreetingForm";
import ItemList from "./components/ItemList";

function App() {
  return (
    <>
      <h1>Testing out Event Handlers</h1>
      {/* Simple onClick Handler with a button */}
      <Button />
      {/* useState Example with onClick */}
      <Counter />
      {/* onChange event on input */}
      <GreetingForm />
      {/* onSubmit with Form with preventDefault*/}
      <ContactForm />

      {/* event Handlers as Props */}
      <ItemList />

      {/* Accessing Event Data */}
      <EventExplorer />
    </>
  );
}

export default App;
