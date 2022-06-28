import Header from "./components/Header/Header";
import Lessons from "./components/Lessons/Lessons";

import "./App.css";
import Group from "./components/Groups/Group";
import Assistant from "./components/Assistant/Assistant";

const App = () => {

  return (
    <section className="app">
      <Header></Header>
      <Group></Group>
      <Assistant></Assistant>
    </section>
  );
}

export default App;
