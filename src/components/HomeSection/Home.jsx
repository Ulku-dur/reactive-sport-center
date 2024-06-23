import "./Home.css"

function Home() {
  return (
    <section id="section-home" className="home">
      <div className="hero-img">
        <img src="/images/hero-man.jpg" alt="hero-man" />
      </div>
      {/* B1) .hero */}
      <div className="hero">
        <button className="button-1">POWERFULL</button>
        <h1>Group Practice <br /> With Trainer</h1>
        <div className="p-home">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet inventore deleniti reiciendis possimus aliquam debitis dolorum veniam ullam dolores eos nesciunt ipsam aut tempore repellendus, qui in nisi dignissimos illo.</p>
        </div>
        <div className="hero-btn">
          <button className="button-2">Sign Up</button>
          <button className="button-3">Details</button>
        </div>
      </div>
      {/* B2) .home-boxes */}
      <div className="home-boxes">
        <div className="box box-1">
          <h4>325</h4>
          <p>Course</p>
        </div>
        <div className="box box-2">
          <h4>405</h4>
          <p>Work Out</p>
        </div>
        <div className="box box-3">
          <h4>305</h4>
          <p>Working Hour</p>
        </div>
        <div className="box box-4">
          <h4>705</h4>
          <p>Happy Client</p>
        </div>
      </div>
    </section>
  )
}

export default Home