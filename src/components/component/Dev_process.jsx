import React from 'react'
import { serviceData } from "../../data/serviceData"

export default function Dev_process() {
  return (<>
      <div className="dev_process">
          <div className="dev_process_in">
            <div className="dev_process_heading">
              <h1>Our Development Process</h1>
            </div>
            <div className="dev_process_card_main">
              {serviceData.Devprocess.map((item, index) => (
                <div className="dev_pross_card" key={index}>
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
