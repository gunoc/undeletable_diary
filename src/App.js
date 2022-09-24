import React, { useState } from "react";

import AddUser from "./component/Users/AddUser";
import UsersList from "./component/Users/UsersList";
  //book 탭도 만들어서 movie(드라마도 있으니 contents로 변경?)랑 둘이 합치는건? one-line은 quote으로.
function App() {
  const [moviesList, setMoviesList] = useState([]);

  const addMovieHandler = (mName, mStar,mReview) => {
    setMoviesList((prevMoviesList) => {
      return [...prevMoviesList, { name: mName, star: mStar, review: mReview, id: Math.random().toString() }];
    });
  };

  return (
    <div>
      <AddUser onAddMovie={addMovieHandler}></AddUser>
      <UsersList movies={moviesList}></UsersList>
    </div>
  );
}

export default App;
