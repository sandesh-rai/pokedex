import { useState } from "react";
import { Pokedex } from "./components/Pokedex";
import { Startup } from "./components/Startup";

function App() {
  const [startApp, setStartApp] = useState<boolean>(false);

  function startAppPressed() {
    setStartApp(true);
  }

  if (startApp) {
    return <Pokedex />;
  } else {
    return <Startup startAppPressed={startAppPressed} />;
  }
}

export default App;
