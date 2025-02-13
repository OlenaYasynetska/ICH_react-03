// import React from "react";
import Rating from "./components/Rating/Rating";
import List from "./components/List/List";

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