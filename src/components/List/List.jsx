import { useState } from "react";
import "./List.css";
import { users } from "../../data/dataUsers";

const List = () => {
   const [people, setPeople] = useState(users);
   
  const removePerson = (id) => {
    setPeople(prevPeople => prevPeople.filter(person => person.id !== id));
  };

  return (
    <div className="list-container">
      <ul>
        {people.map(({ id, name, age }) => (
          <li key={id} className="list-item">
            {name} ({age} лет)
            <button onClick={() => removePerson(id)} className="remove-button">Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
