import "./Classes.css"
import BMICalculator from "./BMICalculator/BMICalculator"
import OurClasses from "./OurClasses/OurClasses"


function Classes() {

  return (
  <section id="section-classes" className="classes">

    <OurClasses />

    <BMICalculator />

  </section>
  )
}

export default Classes