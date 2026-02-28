'use client'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Net10</h4>
          <p>Leading logistics and courier services provider worldwide</p>
        </div>
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="#air">Air Freight</a></li>
            <li><a href="#sea">Sea Freight</a></li>
            <li><a href="#ground">Ground Freight</a></li>
            <li><a href="#express">Express Courier</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@net10.com</p>
          <p>Phone: +1-800-NET-10</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Net10 Logistics. All rights reserved.</p>
      </div>
    </footer>
  )
}
