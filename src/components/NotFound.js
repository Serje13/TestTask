import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="not-found">
    <div className="message">
      404 Page Not Found!!!
      <div>
        <Link to="/">
          <button className="go-to-main-button">Return to Main</button>
        </Link>
      </div>
    </div>
  </div>
);

export default NotFound;
