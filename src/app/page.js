import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
        <div className="item header">
          Capstone Project: Smart Waste Sorting System
        </div>
        <div className="item display">
          display section... ALSO MARCUS OR WHOEVER SEES THIS im gonna assume we'll only run this on fullscreen so uh do that yeah (f11) also hover over the buttons look!!
        </div>
        <div className="item sidebar">
          stats
        </div>
        <div className="item bottombar">
          comfirmation: is the object detected well and truly a banaana
          <div className="btncontainer">
            <a className="btn" href="#">Correct!!</a>
            <a className="btn red" href="#">Wrong!</a>
          </div>
        </div>
      </div>
  );
}
/*TODO:
- make more pretty. have correct buttons n text layouts
- download react-cam n see if u can have a basic display going on
- look at yolov4 colab austin posted, see if u can route its output into display?
- txt file output... random data.
- try to make it as if we'll reuse app for the real thing
*/
