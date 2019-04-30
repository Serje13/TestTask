import React from "react";
import { Table } from "react-bootstrap";
import data from "../assets/tasks.json";
import Row from "./Row";

class TaskTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  componentDidMount = () => {
    this.sortTasks();
  };

  sortTasks() {
    const sortFunction = (a, b) => {
      var idA = a.id;
      var idB = b.id;
      return idA > idB ? 1 : -1;
    };
    const res = data.sort(sortFunction);
    this.allTasks = res;
    this.setState({
      tasks: this.allTasks
    });
  }

  render() {
    const tasks = this.state.tasks;
    return (
      <div>
        <Table responsive striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Tags</th>
              <th>Actual effort</th>
              <th>Estimated effort</th>
              <th>Due date</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, i) =>
              task.obj_status === "active" ? <Row key={i} task={task} /> : null
            )}
          </tbody>
        </Table>
      </div>
    );
  }
}
export default TaskTable;
