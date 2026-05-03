import React from "react";
import { appData } from "../../data/appData";

export default function Mission_vision() {
  return (
    <div className="Misson-vision">
      <div className="Misson-vision-in">

        {appData.about_mission.map((item) => (

          <div key={item.id}>

            {/* ID = 1 */}
            {item.id === 1 && (
              <div className="section-first">
                <div className="section-text-box">
                  <h1>{item.heading}</h1>
                  <p>{item.text}</p>
                </div>
                <div className="mission-img-box">
                  <img src={item.image} alt={item.heading} />
                </div>
              </div>
            )}

            {/* ID = 2 */}
            {item.id === 2 && (
              <div className="section-second">
                <div className="mission-img-box">
                  <img src={item.image} alt={item.heading} />
                </div>
                <div className="section-text-box">
                  <h1>{item.heading}</h1>
                  <p>{item.text}</p>
                </div>
              </div>
            )}

            {/* ID = 3 */}
            {item.id === 3 && (
              <div className="section-first">
                <div className="section-text-box">
                  <h1>{item.heading}</h1>
                  <p>{item.text}</p>
                </div>
                <div className="mission-img-box">
                  <img src={item.image} alt={item.heading} />
                </div>
              </div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
}