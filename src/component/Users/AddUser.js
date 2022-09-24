import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const addMovieHandler = (event) => {
    event.preventDefault();
  };
  const placeholder = "Type here";

  return (
    <Card className={classes.input}>
      <form onSubmit={addMovieHandler}>
        <label htmlFor="movie" placeholder={placeholder}>
          Movie👀
        </label>
        <input id="movie" type="text" />
        <label htmlFor="review">One-Line Review</label>
        <input id="review" type="text" />
        <label htmlFor="stars">Stars🌠</label>
        <input id="stars" type="number" />
        <Button type="submit">Add <br /> review</Button>
      </form>
    </Card>
  );
};
export default AddUser;
