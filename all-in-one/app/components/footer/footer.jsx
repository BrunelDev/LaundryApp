export function Footer() {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer-content">
        <div className="footer-top">
          <h5 className="mr-8">
            <span className="text-pink-pure">L</span>audry
            <span className="text-pink-pure">S</span>ervice
          </h5>
          <a href="mailto:ahokpossibrunel@gmail.com">
            ahokpossibrunel@gmail.com
          </a>
          <div className="footer-social">
            <h5>Connect with me</h5>
            <div className="footer-icon">
              <a href="mailto:ahokpossibrunel@gmail.com">
                <img src="Email.png" alt="Email icon" />
              </a>
              <a href="github.com">
                <img src="Github.png" alt="Github icon" />
              </a>
              <a href="Linkedin.com">
                <img src="Linkedin.svg" alt="Linkedin icon" />
              </a>
            </div>
          </div>
        </div>
        <h5 className="text-center">
          &copy; 2024 LaundryService. All rights reserved.
        </h5>
      </div>
    </div>
  );
}
