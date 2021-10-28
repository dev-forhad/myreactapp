export default function BoilingVerdict({ celsius = 0 }) {
  debugger;
  if (celsius > 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water could not boil.</p>;
}
