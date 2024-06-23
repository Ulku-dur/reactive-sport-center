import "./Review.css"

function Review() {
  return (
    <section id="section-review" className="review">
      {/* .review-start */}
      <div className="review-start">
        <h2>REVIEW CLIENT</h2>
        <hr />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dignissimos in quas animi eius hic, libero dolores vel facere expedita corrupti tempore tempora.</p>
      </div>
      {/* .review-content */}
      <div className="review-content">
        {/* .review-1 */}
        <article className="review-1">
          <div className="profil">
            <img src="/images/client1.jpg" alt="" />
            <div className="info">
              <h4>Diet Expert</h4>
              <span>CFO</span>
            </div>
          </div>
          <div className="profil-text">
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis similique sunt molestias placeat adipisci quibusdam, iure minima quisquam a impedit voluptates facilis quam nemo ad veritatis quidem? Rerum, aliquam unde!</span>
            <div className="after"></div>
          </div>
        </article>
        {/* .review-2 */}
        <article className="review-2">
          <div className="profil">
            <img src="/images/client2.jpg" alt="" />
            <div className="info">
              <h4>Cardio Trainer</h4>
              <span>CEO</span>
            </div>
          </div>
          <div className="profil-text">
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis similique sunt molestias placeat adipisci quibusdam, iure minima quisquam a impedit voluptates facilis quam nemo ad veritatis quidem? Rerum, aliquam unde!</span>
            <div className="after"></div>
          </div>
        </article>
      </div>

      <div className="bg-color-review"></div>
    </section>
  )
}

export default Review