import "./Footer.css"

function Footer() {
  return (
  <footer>
    <div className="footer-content">
      <img src="images/logo.png" alt="" />
      <div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, nobis? Accusamus pariatur blanditiis rerum id vitae ex perspiciatis sit ad, ab, unde et expedita? Quo commodi sit provident ducimus rem assumenda delectus vero?</p>
      </div>
      {/* .links */}
      <div className="links">
        <div className="information">
          <h4>Information</h4>
          <a href="#">About Us</a>
          <a href="#">Classes</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>
        <div className="helpful">
          <h4>Helpful Links</h4>
          <a href="#">Services</a>
          <a href="#">Support</a>
          <a href="#">Terms & Condition</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer