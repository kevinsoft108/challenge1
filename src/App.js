import React, { useState, useEffect } from 'react';

function fetchData() {
  return Math.round(Math.random() * 900);
}

function getColor(num) {
  var color;
  if (1 <= num && num < 300) {
    color = 'green';
  } else if (301 <= num && num < 600) {
    color = 'red';
  } else {
    color = 'blue';
  }

  return color;
}

function App() {
  const [color, setColor] = useState(null);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    var delay = 0;
    var num;
    var setButtonColor = function() {
      if (color) return;
      num = fetchData();
      if (num%2 === 1) {
        delay = delay + 500;
        setTimeout(setButtonColor, delay);
      } else {
        setColor(getColor(num));
      }
    }

    setButtonColor();
  }, [color]);

  function resetColor() {
    const copy = [...colors];
    if (color) {
      copy.unshift(color);
      setColors(copy);
    }
    const newColor = getColor(fetchData());
    setColor(newColor);
  }

  return (
    <div className="App">
      <button style={{backgroundColor: color}} onClick={resetColor}>Change Me</button>
      <ul className="colors">
        {colors.map((c, i) => <li key={i}>{c}</li>)}
      </ul>
    </div>
  );
}

export default App;
