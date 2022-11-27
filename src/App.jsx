import AudioControls from "./components/AudioControls";
import Drums from "./components/Drums";
import FCCicon from "./components/FCCicon";
import BrokenDrums from "./components/BrokenDrums";
import BrokenAudioControls from "./components/BrokenAudioControls";
import { useState, useEffect } from "react";

function App() {
  const [volume, setVolume] = useState("0.50");
  const [drumName, setDrumName] = useState("");
  const [power, setPower] = useState(true);
  const keyCodes = ["q", "w", "e", "a", "s", "d", "z", "x", "c"];
  const drumNameObj = {
    q: "Heater 1",
    w: "Heater 2",
    e: "Heater 3",
    a: "Heater 4",
    s: "Clap",
    d: "Open HH",
    z: "Kick n' Hat",
    x: "Kick",
    c: "Closed HH",
  };

  useEffect(() => {
    const keyListener = (e) => {
      const drum = document.evaluate(
        `//div[text()='${e.key.toUpperCase()}']`,
        document,
        null,
        XPathResult.ANY_TYPE,
        null
      );
      const thisDrum = drum.iterateNext();
      const play = (targetDrum) => {
        const buttonStyles = targetDrum.style;
        if (power === true) {
          const audio = targetDrum.firstChild;
          audio.volume = volume;
          audio.play();
          setDrumName(drumNameObj[e.key]);
          buttonStyles.backgroundColor = "orange";
          buttonStyles.height = "77px";
          buttonStyles.marginTop = "8px";
          buttonStyles.boxShadow = "orange 3px 3px 5px";
          setTimeout(() => {
            buttonStyles.backgroundColor = "grey";
            buttonStyles.height = "80px";
            buttonStyles.marginTop = "5px";
            buttonStyles.boxShadow = "black 3px 3px 5px";
          }, 100);
        } else if (power === false) {
          buttonStyles.height = "77px";
          buttonStyles.marginTop = "8px";
          buttonStyles.boxShadow = "none";
          setTimeout(() => {
            buttonStyles.backgroundColor = "grey";
            buttonStyles.height = "80px";
            buttonStyles.marginTop = "5px";
            buttonStyles.boxShadow = "black 3px 3px 5px";
          }, 100);
        }
      };
      for (let i = 0; i < keyCodes.length; i++) {
        if (e.key === keyCodes[i]) {
          play(thisDrum);
        }
      }
    };
    window.addEventListener("keydown", keyListener);
    return () => {
      window.removeEventListener("keydown", keyListener);
    };
    //eslint-disable-next-line
  }, [volume, power]);

  const handleVolume = (e) => {
    setVolume(e.target.value);
  };

  const handleSwitch = (e) => {
    let justifyContent = window
      .getComputedStyle(e.target.parentElement)
      .getPropertyValue("justify-content");
    if (justifyContent === "flex-end") {
      setPower(false);
    } else {
      setPower(true);
    }
  };

  return (
    <div className="root">
      <div className="audio-mix-container" id="drum-machine">
        <FCCicon />
        {power ? (
          <>
            <Drums setDrumName={setDrumName} volume={volume} />
            <AudioControls
              handleSwitch={handleSwitch}
              drumName={drumName}
              volume={volume}
              handleVolume={handleVolume}
            />
          </>
        ) : (
          <>
            <BrokenDrums />
            <BrokenAudioControls
              handleSwitch={handleSwitch}
              volume={volume}
              handleVolume={handleVolume}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
