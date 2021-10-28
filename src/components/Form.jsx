import React from "react";

export default class Form extends React.Component {
  state = {
    title: "JS",
    text: "JS Is Awesome",
    library: "React",
    isAwesome: true,
  };

  handleChange = (e) => {
    if (e.target.type === "text") {
      this.setState({
        title: e.target.value,
      });
    } else if (e.target.type === "textarea") {
      this.setState({
        text: e.target.value,
      });
    } else if (e.target.type === "select-one") {
      this.setState({
        library: e.target.value,
      });
    } else if (e.target.type === "checkbox") {
      this.setState({
        isAwesome: e.target.checked,
      });
    } else {
      console.log("Nothing");
    }
  };

  handleSubmit = (e) => {
    const { title, text, library, isAwesome } = this.state;
    e.preventDefault();
    console.log(title, text, library, isAwesome);
  };

  render() {
    const { title, text, library, isAwesome } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <textarea name="text" onChange={this.handleChange} value={text}>
            {" "}
          </textarea>
          <br />
          <br />
          <select value={library} onChange={this.handleChange}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
          </select>
          <br />
          <br />
          <input
            type="checkbox"
            checked={isAwesome}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
