import React from "react";

import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.movies}>
        <h1>I'd watched...</h1>
      <ul>
        {props.movies.map((movie) => (
          <li key={movie.id}>
            {movie.name} // {movie.star} stars <br /> {movie.review }
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
