export default function Text({ addEmoji, addBracket }) {
  let text = "I am JS ";
  if (addEmoji) {
    text = addEmoji(text, "💖");
  }
  if (addBracket) {
    text = addBracket(text);
  }
  return <div>{text}:</div>;
}