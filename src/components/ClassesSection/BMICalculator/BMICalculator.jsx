import React, { useState } from 'react';
import "./BMICalculator.css"

function BMICalculator() {
  // state variables for weight, height, and indicator position
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [indicatorPosition, setIndicatorPosition] = useState('0%');

  // handle input changes
  const handleWeightChange = (e) => setWeight(e.target.value);
  const handleHeightChange = (e) => setHeight(e.target.value);

  // calculator function
  const calculator = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (weightNum > 0 && heightNum > 0) {
      const result = weightNum / ((heightNum / 100) ** 2);

      if (result <= 18.5) {
        setIndicatorPosition('16%');
      } else if (result > 18.5 && result <= 24.9) {
        setIndicatorPosition('29%');
      } else if (result > 25 && result <= 29.9) {
        setIndicatorPosition('47%');
      } else if (result > 30 && result <= 34.9) {
        setIndicatorPosition('62%');
      } else if (result > 35 && result <= 39.9) {
        setIndicatorPosition('78%');
      } else if (result > 39.9) {
        setIndicatorPosition('85%');
      }
    } else {
      alert("Please enter a valid value.");
    }
  };

  // handle key down event
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      calculator();
    }
  };


  return (

    <article className="bmi-calculator">
      <div className="calculator-text">
        <h2>BMI Calculator</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium rerum obcaecati cumque non sequi? Repellendus hic illo culpa libero eaque, earum sunt perferendis obcaecati pariatur consequuntur soluta dicta atque laudantium?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, odit delectus. Ipsam obcaecati enim, iste veniam soluta itaque similique ullam voluptas iusto culpa quas reiciendis nemo, alias debitis non cum?</p>
        <div className="calculator-input">
          <form id="userForm" onKeyDown={handleKeyPress}>
            <div className="input-group">
              <input 
              name="inputHeight" 
              id="inputHeight" 
              type="number" 
              placeholder="Your height" 
              value={height}
              onChange={handleHeightChange}
              /> 
              <span>cm</span>
            </div>
            <div className="input-group">
              <input 
              name="inputWeight" 
              id="inputWeight" 
              type="number" 
              placeholder="Your weight"
              value={weight}
              onChange={handleWeightChange}
               /> 
              <span>kg</span>
            </div>
          </form>
        </div>
      </div>
      <div className="calculator-img">
        <h6>Your BMI</h6>
        <img src="/images/bmi-index.jpg" alt="" />
        <div className="indicator" style={{ left: indicatorPosition }}></div>
      </div>
    </article>
  )
}

export default BMICalculator