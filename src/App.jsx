import "./App.css";
import { Featured, Movies } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Featured />
      <Movies />
    </>
  );
}

export default App;
