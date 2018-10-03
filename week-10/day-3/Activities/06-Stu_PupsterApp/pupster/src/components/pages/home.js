import React from "react";
import dog from "./dogger.jpeg";
import "./home.css";

const home = () => (
    <div>
        <img src={dog} alt="puppy"></img>
        <h1>Pupster</h1>
        <h1>Who's a Good Boy? You are! Yes you are!</h1>

        <h3>Welcome to Pupster!</h3>
        <p>
            Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui mauris,
            ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta. Nam
            quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
            imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis
            diam, sit amet facilisis lectus blandit at.
      </p>
    </div>
);

export default home;