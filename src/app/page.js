import Image from "next/image";
import CustomWebcam from "@app/webcam/webcam";
import recyclingpic from '../utilities/recycling.svg.png'

export default function Home() {
  return (
    
    <div className="container">
        <div className="item header">
          Capstone Project: Smart Waste Sorting Systems
          <h3>
            NG05
          </h3>
        </div>
        <div className="item display">
          <CustomWebcam/>
        </div>
        <div className="item sidebar">
          <section className="classification">
          <strong>Stats</strong>
          <div>
            Confidence Score: 0.76
          </div>
          <div>
            Classification Time (ms):  200
          </div>
          </section>
          
          
          <section className="classification recycle">
            <strong>Item Detected: Milk Carton</strong>
            <div >
              Recommendation: Recycling
              <div className="classify">
                <Image
                  src={recyclingpic}
                  width={500}
                  height={500}
                  alt="recycling icon lol"
                />
              </div>
            </div>
          </section>
        </div>


        <div className="item bottombar">
          Help us improve out model! Is the classification correct?
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
