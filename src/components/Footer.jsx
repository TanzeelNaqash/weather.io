const Footer = () => {
  return (
    <footer className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Company</h3>
          <div className="divider"></div>
          <br />
          <a href="./"><i className="fas fa-angle-right"></i>Home</a>
          <a href="#"><i className="fas fa-angle-right"></i>our APIS</a>
          <a href="#"><i className="fas fa-angle-right"></i>Testimonials</a>
          <a href="#"><i className="fas fa-angle-right"></i>Our Blog</a>
          <a href="#"><i className="fas fa-angle-right"></i>Contact Us</a>
        </div>

        <div className="box">
          <h3>Help</h3>
          <div className="divider"></div>
          <br />
          <a href="contact.php#faq"><i className="fas fa-angle-right"></i>FAQs</a>
          <a href="#"><i className="fas fa-angle-right"></i>Privacy Policy</a>
          <a href="#"><i className="fas fa-angle-right"></i>Cookie Policy</a>
          <a href="#"><i className="fas fa-angle-right"></i>Terms of use</a>
          <a href="#"><i className="fas fa-angle-right"></i>About Us</a>
        </div>

        <div className="box">
          <h3>Customer care</h3>
          <div className="divider"></div>
          <br />
          <a href="tel:911234567890"><i className="fas fa-phone"></i>+91 1234567890</a>
          <a href="tel: 910987654321"><i className="fa-brands fa-whatsapp"></i>+91 0987654321</a>
          <a href="mailto:Support@weatherio.com" className="no-captalize"><i className="fas fa-envelope"></i>support@weatherio.com</a>
          <a href="#"><i className="fas fa-map"></i>&nbsp;location</a>
        </div>

        <div className="box">
          <h3>Follow Us</h3>
          <div className="divider"></div>
          <br />
          <a href="#"><i className="fa-brands fa-instagram"></i>weather.io</a>
        </div>
      </div>
      <div className="copyright">&copy; Copyright @ <span id="currentYear"></span> <span><a href="./">weather.io</a></span> | All Rights Reserved! <br /> <span><a href="https://github.com/TanzeelNaqash/" target="_blank">TanzeelNaqash</a></span></div>
      
    </footer>
  );
}

export default Footer;
