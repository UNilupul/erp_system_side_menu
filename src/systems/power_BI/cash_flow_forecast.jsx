import React from "react";

import ProfilePicture from "../../side_menu/assets/user.jpg";

function CashFlowForecast() {
  return (
    // <section className="cash_flow_forecast active">
    //   <h1>Cash flow Forecast</h1>
    // </section>
    <div>
      <h1>Cash flow Forecast</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
        exercitationem, aut porro, alias amet reprehenderit quisquam beatae id
        iste eaque est officiis expedita ipsa quidem sapiente tenetur quod autem
        cumque! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Quaerat ducimus beatae officia hic? Blanditiis assumenda est natus
        adipisci placeat suscipit temporibus eos ipsa! Voluptates ratione
        facilis aperiam corporis maiores. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Cumque, dignissimos voluptates commodi earum dicta
        necessitatibus temporibus optio minus saepe, iure asperiores explicabo.
        Sequi harum maxime, praesentium ipsum eum esse voluptatibus!
      </p>

      <div style={{display: "flex"}}>
      <img src={ProfilePicture} />
      <img src={ProfilePicture} />
      <img src={ProfilePicture} />
      </div>
    </div>
  );
}

export default CashFlowForecast;
