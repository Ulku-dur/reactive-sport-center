import "./Trainer.css"
import Purchase from "./Purchase/Purchase"
import Trainers from "./Trainers/Trainers"
// import Purchase from "./Purchase/Purchase"
// import Trainers from "./Trainers/Trainers"

function Trainer() {


  return (
    <section id="section-trainer" className="trainer">
      <Trainers />
      <Purchase />
    </section>
  )
}

export default Trainer