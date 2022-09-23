import React, { Component } from "react";

class ListGroup extends Component {
  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item">All genres</li>
        {this.props.genres.map((g) => (
          <li key={g._id} className="list-group-item">
            {g.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default ListGroup;
