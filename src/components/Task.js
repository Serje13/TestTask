import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "regenerator-runtime/runtime";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.location.task,
      name: "",
      isLoading: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
  }

  componentDidMount = () => {};

  handleChange = event => {
    const { task } = this.state;
    task.name = event.target.value;
    this.setState({ name: event.target.value, task });
  };

  sendRequest = () => {
    const task = this.state.task;
    this.setState({ isLoading: true }, async () => {
      try {
        const results = await axios.put(
          `https://jsonplaceholder.typicode.com/posts/1`,
          { data: task },
          { method: "put" }
        );
        const data = results.data.data;
        this.setState({
          task: data
        });
      } catch (err) {
        console.log(err);
      }
    });
  };
  render() {
    const { task } = this.state;
    return (
      <div>
        <div className="task-page">
          <div className="task-description">
            <label style={{ margin: "0" }}>Task Name:</label>
            <input
              className="inline-editor"
              value={this.state.task.name}
              onChange={this.handleChange}
              onBlur={this.sendRequest}
            />
          </div>
          <div className="task-description">
            Task Description:{" "}
            {task.description !== undefined
              ? task.description
              : "Task Description should be Here"}
          </div>
          <Link
            to={{
              pathname: `/`,
              id: task.id,
              task
            }}
          >
            <button className="go-to-main-button">Go Back</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Task;
