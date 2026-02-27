import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Cards from "./component/Cards/Cards";

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((data) => setQuotes(data.quotes || []))
      .catch((error) => console.error("Error fetching quotes:", error));
  }, []);
  useEffect(() => {
    console.log("Quotes state:", quotes);
  }, [quotes]);

  return (
    <>
      <Navbar />
      <Cards quotes={quotes} />
    </>
  );
}

export default App;
