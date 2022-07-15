import React from "react";
import Kitchen from "../Kitchen/Kitchen";
import LivingRoom  from "../LivingRoom/LivingRoom";
import Bedroom from "../Bedroom/Bedroom";
import Bath from "../Bath/Bath";


function Floorplan(props) {
  return (
    <div className="floorplan">
      <Bedroom room={1} />
      <Kitchen />
      <Bath type={"Full"}/>
      <Bedroom room={2} />
      <LivingRoom />
      <Bath type={"Half"}/>
      <Bedroom room={3}/>
    </div>
  );
}

export default Floorplan;
