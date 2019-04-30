import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const Row = ({ task }) => {
  return (
    <React.Fragment>
      <tr>
        <td>{task.id}</td>
        <td>
          <Link
            to={{
              pathname: `/task/${task.id}`,
              id: task.id,
              task
            }}
            className={
              task.is_high_priority === true ? "is-hi-priority" : "task-name"
            }
          >
            {task.name}
          </Link>
        </td>
        <td>{task.tags}</td>
        <td>{task.actual_effort}</td>
        <td>{task.estimated_effort}</td>
        <td>
          <Moment format="DD/MM/YYYY HH:MM:SS">{task.due_date}</Moment>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default Row;
