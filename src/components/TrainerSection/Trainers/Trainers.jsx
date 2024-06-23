import "./Trainers.css"

function Trainers() {

  return (
    <div className="trainers">
        <div className="trainers-start">
          <h2>OUR BEST TRAINERS</h2>
          <hr />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consequuntur beatae fugiat cupiditate ea mollitia suscipit dignissimos in quas animi eius hic, libero dolores vel facere expedita corrupti tempore tempora.</p>
        </div>
        <div className="trainers-gallery">
          <div className="trainer-1">
            <div className="trainer-text">
              <h4>Jan Do</h4>
              <p>Fitness Trainer</p>
            </div>
            <div className="trainer-bg"></div>
            <img className="img-1"  src="/images/trainer1.jpg" alt="" />
          </div>
          <div className="trainer-2">
            <div className="trainer-text">
              <h4>Dane Joe</h4>
              <p>Body Building Trainer</p>
            </div>
            <div className="trainer-bg"></div>
            <img className="img-2"  src="/images/trainer2.jpg" alt="" />
          </div>
          <div className="trainer-3">
            <div className="trainer-text">
              <h4>Jane Doe</h4>
              <p>Cardio Trainer</p>
            </div>
            <div className="trainer-bg"></div>
            <img className="img-3" src="/images/trainer3.jpg" alt="" />
          </div>
        </div>
        <div className="bg-color-trainer"></div>
      </div>
  )
}

export default Trainers