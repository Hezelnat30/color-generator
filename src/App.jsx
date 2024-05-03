import { useState } from "react";

function App() {
  const [color, setColor] = useState("#000");
  const [opacity, setOpacity] = useState(1);

  function handleColorChange(e) {
    setColor(e.target.value);
  }
  function handleOpacityChange(e) {
    const opacityValue = Number(e.target.value);
    setOpacity(opacityValue);
  }

  function getRGB() {
    const red = parseInt(color.slice(1, 3), 16);
    const green = parseInt(color.slice(3, 5), 16);
    const blue = parseInt(color.slice(5, 7), 16);

    return `rgb (${red}, ${green}, ${blue})`;
  }

  function getOpacityPercentage() {
    const opacityPercentage = Math.round(opacity * 100);
    return `${opacityPercentage}%`;
  }

  function getCssCode() {
    const cssCode = `background-color: ${color}; opacity: ${opacity};`;
    return cssCode.trim();
  }

  return (
    <div className="app">
      <h1>Color Generator</h1>
      <input type="color" value={color} onChange={handleColorChange} />
      <br />
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={opacity}
        onChange={handleOpacityChange}
      />
      {color && (
        <div
          className="color-box"
          style={{ backgroundColor: color, opacity: opacity }}
        ></div>
      )}
      {color && (
        <div className="color-info">
          <p>Hex : {color}</p>
          <p>RGB : {getRGB()}</p>
          <p>Opacity : {getOpacityPercentage()}</p>
          <pre>
            <code>{getCssCode()}</code>
          </pre>
        </div>
      )}
    </div>
  );
}

export default App;
