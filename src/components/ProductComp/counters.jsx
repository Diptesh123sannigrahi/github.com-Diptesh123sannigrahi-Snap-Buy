import React, { useEffect, useState } from "react";
import Counter from "./counter";
import { Button } from "@mui/material";

const Counters = () => {
  const [counter, setCounter] = useState(() => {
    return [];
  });

  useEffect(() => {
    setCounter(JSON.parse(localStorage.getItem("items")));
  }, []);

  const handleReset = () => {
    localStorage.clear();
    localStorage.setItem("items", JSON.stringify([]));
  };

  const handleIncrement = (data) => {
    const counters = [...counter];
    const index = counter.indexOf(data);
    counters[index] = { ...data };
    counters[index].value++;
    setCounter(counters);
    localStorage.setItem("items", JSON.stringify(counters));
  };

  const handleDelete = (indx) => {
    const counters = counter.filter((c) => c.id !== indx);
    setCounter(counters);
    localStorage.setItem("items", JSON.stringify(counters));
  };

  return (
    <React.Fragment>
      <Button onClick={handleReset}>Reset</Button>

      {counter.map((counter) => (
        <Counter
          key={counter.id}
          onIncrement={handleIncrement}
          onDelete={handleDelete}
          counter={counter}
        >
          <h4>Counter #{counter.id}</h4>
        </Counter>
      ))}
    </React.Fragment>
  );
};

export default Counters;
