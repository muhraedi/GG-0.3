import './App.css'
import Button from './Button';
import { ListFemale, ListMember } from './Family';
import RecipeList from './RecipeList';
import Toolbar from './Toolbar';
import Toolbar2 from './Toolbar2';
import ClickHandler from './ClickHandler';
import EvenPropagation from './ClickHandler2';
import Signup from './SignUp';
import ColorSwitch from './ColorSwitch';

import { useState } from 'react';
import Clock from './PropsAndConditionalRendering';
// import List from './List';

function App() {
  const numbers = [65, 44, 12, 4];
  const newArr = numbers.map(myFunction);

  const ages = [32, 33, 16, 40];
  const result = ages.filter(checkAdult)

  function checkAdult(age) {
    return age >= 18;
  }

  function myFunction(num) {
    return num * 10;
  }

  const [color, setColor] = useState('');

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString();
  };

  const [clicks, setClicks] = useState(0);

  function handleClickOutside() {
    setClicks(c => c + 1);
  }

  function getRandomLightColor() {
    let r = 150 + Math.round(100 * Math.random());
    let g = 150 + Math.round(100 * Math.random());
    let b = 150 + Math.round(100 * Math.random());
    return `rgb(${r}, ${g}, ${b})`;
  }

  function handleChangeColor() {
    let bodyStyle = document.body.style;
    bodyStyle.backgroundColor = getRandomLightColor();
  }

  return (
    <>
      <h1>{ newArr }</h1>
      <h1>{ result }</h1>
      {/* <List /> */}
      <ListFemale />
      <ListMember />
      <h1>Recipe List</h1>
      <RecipeList />
      <h1>Button</h1>
      <Button />
      <Toolbar />
      <Toolbar2 />
      <ClickHandler />
      <EvenPropagation />
      <Signup />

      <div>
        <h1>Colorful Clock</h1>
        <h3>Pick a color:</h3>
        <select value={color} onChange={handleColorChange}>
          <option value="lightcoral">Light Coral</option>
          <option value="midnightblue">Midnight Blue</option>
        </select>
        <Clock time={getCurrentTime()} color={color}/>
      </div>

      <div style={{ width: '100%', height: '100%' }} onClick={handleClickOutside}>
        <ColorSwitch onChangeColor={handleChangeColor} />
        <br />
        <br />
        <h2>Clicks on the page: {clicks}</h2>
    </div>
    </>
  )
}

export default App
