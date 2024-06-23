import "./Contact.css"

function Contact() {
  return (
    <section id="section-contact" className="contact">
      {/* .contact-start */}
      <div className="contact-start">
        <h2>CONTACT US</h2>
        <hr />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dignissimos in quas animi eius hic, libero dolores vel facere expedita corrupti tempore tempora.</p>
      </div>
      {/* .contact-content */}

      <div className="contact-content">
        <article className="contact-form">
          <div className="contact-info">
            <div className="mobile">
              <h4>Mobile Number</h4>
              <span>+135 773 44 42</span>
            </div>
            <div className="mail">
              <h4>Email Adress</h4>
              <span>demo@demo.com</span>
            </div>
          </div>
          <div className="contact-input">
            <h4>Make An Appointment</h4>
            <form id="contactUs">
              <input type="text" placeholder="Your Name" /> <br />
              <input type="text" placeholder="Your Email"/> <br />
              <textarea placeholder="Your Message" rows="6"></textarea>
            </form>
          </div>
        </article>
        <article className="contact-map">
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1220.629811371053!2d28.971532979677363!3d41.02774226275946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab91ef219e13d%3A0x99c136f220088f3!2sPatika.dev%20-%20Bootcamp!5e0!3m2!1sen!2str!4v1714230080447!5m2!1sen!2str" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Contact