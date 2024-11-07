import React from "react";
import generateFunc from "../utils/generateFunc";

function MainContent() {
  const [placeHolderPass, setPlaseHolder] = React.useState("000000");
  const generatedPass = () => {
    return setPlaseHolder(generateFunc());
  };

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

  return (
    <div className="main-content">
      <h1>Get your extremely strong password! 🔐</h1>
      <div className="pass-frame">{placeHolderPass}</div>
      <div className="btns-wrapper">
        <button className="generate" onClick={generatedPass}>
          Generate
        </button>
        <button className="copy">Copy!</button>
      </div>
    </div>
  );
}

export default MainContent;
