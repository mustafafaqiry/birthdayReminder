import React, { useState } from "react";
import "./App.css";
import { data } from "./data";

const App = () => {
  const removeitems = () => {
    setstate([]);
  };
  const [state, setstate] = useState(data);
  const persons = state.length;
  return (
    <>
      <main>
        <section className="container">
          <h1>{persons} birthdays today</h1>
          {state.map((person) => {
            const { id, name, age, image } = person;
            return (
              <article className="person" key={id}>
                <img src={image} alt={name} />
                <div key={id}>
                  <h3>{name}</h3>
                  <p>{age} Years</p>
                </div>
              </article>
            );
          })}
          <button className="btn" onClick={removeitems}>
            Clear All
          </button>
        </section>
      </main>
    </>
  );
};

export default App;
