import React, { Component } from 'react';
import './style.css';

class About extends Component {
  render() {
    return (
      <div className="About-wrapper">
        <p>KegMeister is a DIY Kegerator (fridge/freezer converted to draft beer dispenser) created by&nbsp;
          <a href="https://github.com/danp3d">Daniel Pedroso</a>
        </p>
        <figure className="image">
          <img src="img/kegmeister.jpg" alt="KegMeister" />
        </figure>

        <p>
          The kegerator was build using a chest freezer with an arduino circuit controlling the temperature - after all, a freezer is used to... freeze. And we definitelly don't want a beer icecream (or do we? Hm. Getting ideas)<br />
          This arduino circuit is connected to a RaspberryPi via USB - and the RaspberryPi provides the IoT characteristics to it.
        </p>
      
        <p>
          You can see the code in my Github page. The following repositories are relevant:
        </p>
        <ul>
          <li><a href="https://github.com/danp3d/EDMFreezerCtrl">Freezer Controller</a> - Arduino sketch (C++) to control the freezer's temperature and keep the beer from freezing</li>
          <li><a href="https://github.com/danp3d/kegmeister">Kegmeister</a> - Node.JS app that runs in the RaspberryPi</li>
          <li><a href="https://github.com/danp3d/kegmeister_cloud">Serverless API</a> - Lambda functions (Node.JS) and DynamoDB providing the necessary back-end services.</li>
          <li><a href="https://github.com/danp3d/kegmeister_ui">UI</a> - this page</li>
        </ul>


        <p>
          List of technologies used in this project:
        </p>
        <ul>
          <li>Arduino/C++</li>
          <li>Serial communication (RaspberryPi + Arduino)</li>
          <li>Node.JS</li>
          <li>Serverless APIs (Lambda)</li>
          <li>React, Redux and ES6</li>
        </ul>


        <p>Yep, I've used JavaScript and C++ and ended up with beer :D</p>
      </div>
    );
  }
}

export default About;
