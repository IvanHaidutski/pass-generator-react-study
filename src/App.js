import "./App.css";
import React from "react";
import ButtonNum from "./components/ButtonNum";
import generateFunc from "./utils/generateFunc";

function App() {
  const [placeHolderPass, setPlaseHolder] = React.useState("000000");
  const [passLength, setPassLength] = React.useState("6");
  const generatedPass = () => {
    return setPlaseHolder(generateFunc(passLength));
  };

  function copyPass() {
    navigator.clipboard
      .writeText(placeHolderPass)
      .then(function () {
        console.log("Text copied to clipboard");
      })
      .catch(function (error) {
        console.error("Error:", error);
      });
  }

  return (
    <div className="App">
      <div className="main-content">
        <h1>Get your extremely strong password! 🔐</h1>
        <div className="characters-text">Select number of characters</div>
        <div className="buttons">
          <ButtonNum num="6" passLength={passLength} onClick={setPassLength} />
          <ButtonNum num="7" passLength={passLength} onClick={setPassLength} />
          <ButtonNum num="8" passLength={passLength} onClick={setPassLength} />
          <ButtonNum num="9" passLength={passLength} onClick={setPassLength} />
          <ButtonNum num="10" passLength={passLength} onClick={setPassLength} />
        </div>
        <div className="pass-frame">{placeHolderPass}</div>
        <div className="btns-wrapper">
          <button className="generate" onClick={generatedPass}>
            Generate
          </button>
          <button className="copy" onClick={copyPass()}>
            Copy!
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

// useEffect(() => {
//   navigator.clipboard
//     .writeText(document.querySelector(".pass-frame"))
//     .then(function () {
//       console.log("Text copied to clipboard");
//     })
//     .catch(function (error) {
//       console.error("Error:", error);
//     });
// });
