import React, { useEffect } from 'react'
import { serviceData } from "../../data/serviceData"
import Aos from "aos";

export default function Dev_process() {
        useEffect(() => {
        Aos.init();
      }, []);
  return (<>
      <div className="dev_process">
          <div className="dev_process_in">
            <div className="dev_process_heading">
              <h1>Our Development Process</h1>
            </div>
            <div className="dev_process_card_main"
            
            >
              {serviceData.Devprocess.map((item, index) => (
                <div className="dev_pross_card"
                data-aos="zoom-in"
                key={index}>
                  <h1>{item.number}</h1>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
    
  
  
  </>
  )
}
