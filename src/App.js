import React, { useEffect, useState } from "react";
import Tabs from "./components/Tabs";
import Tab from "./components/Tab";
import List from "./components/List";
import Grid from "./components/Grid";

const App = () => {
  const [superHeroes, setSuperHeroes] = useState([]);

  useEffect(() => {
    const getSuperHeroes = async () => {
      const response = await fetch(
        "https://tppublic.blob.core.windows.net/test-data/super-heroes.json"
      );
      const data = await response.json();
      setSuperHeroes(data);
    };

    getSuperHeroes();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Superheroes</h1>
      <Tabs>
        <Tab title="List view">
          <List heroes={superHeroes} />
        </Tab>
        <Tab title="Grid view">
          <Grid heroes={superHeroes} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default App;
