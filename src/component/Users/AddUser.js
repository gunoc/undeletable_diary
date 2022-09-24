import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredMovie, setEnteredMovie] = useState("");
  const [enteredReview, setEnteredReview] = useState("");
  const [enteredStars, setEnteredStars] = useState("");
  
  
  const addMovieHandler = (event) => {
    event.preventDefault(/* enteredMovie, enteredStars */);

    if(enteredMovie.trim().length === 0 || enteredReview.trim().length === 0 || enteredStars.trim().length === 0){
        return;
    }
    if(+enteredStars < 0){
        return;
    }

    props.onAddMovie(enteredMovie,enteredStars,enteredReview);
    setEnteredMovie('');
    setEnteredReview('');
    setEnteredStars('');
  };

  const movieChangeHandler = (event) => {
    setEnteredMovie(event.target.value);
  };

  const reviewChangeHandler = (event) => {
    setEnteredReview(event.target.value);
  };

  const starsChangeHandler = (event) => {
    setEnteredStars(event.target.value);
  };


  return (
    <Card className={classes.input}>
      <form onSubmit={addMovieHandler}>
        <label htmlFor="movie">
          Movie👀
        </label>
        <input
          id="movie"
          type="text"
          value={enteredMovie}
          onChange={movieChangeHandler}
        />
        <label htmlFor="review">One-Line Review</label>
        <input
          id="review"
          type="text"
          value={enteredReview}
          onChange={reviewChangeHandler}
        />
        <label htmlFor="stars">Stars🌠</label>
        <input
          id="stars"
          type="number"
          value={enteredStars}
          onChange={starsChangeHandler}
          step={0.5}
        />
        <Button type="submit">
          Add <br /> review
        </Button>
      </form>
    </Card>
  );
};
export default AddUser;
