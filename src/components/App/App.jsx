// import React from "react";
import Rating from "../Rating/Rating";
import List from "../List/List";

const App = () => {
  return (
    <div>
      <h1>Рейтинг</h1>
      <Rating />
      <h1>Список приглашенных</h1>
      <List />
    </div>
  );
};

export default App;