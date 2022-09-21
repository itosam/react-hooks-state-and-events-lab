import React, {useState} from "react";//use state added
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [isDarkMode, setIsDarkMode] = useState(false)// the state added for dark mode
//Then, use that variable to determine if our app should be in dark mode or light mode.
//replaced the "false" in appClass w/isDarkMode variable to determine the class.
  const appClass = isDarkMode ? "App dark" : "App light"

  function handleClick(){
    setIsDarkMode((isDarkMode)=> !isDarkMode)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{isDarkMode ? "Light" : "Dark"} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
