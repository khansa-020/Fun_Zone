import React from 'react';
import { Link } from 'react-router-dom';
import images from "../images/404.jpg"

export default function ErrorPage() {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1  style={{ fontWeight:"bold", padding:"1rem" }}>Oops! Something went wrong!</h1>
      <p>We apologize for the inconvenience. It seems there's an issue with our transport service.</p>
     <div className="img" style={{ maxWidth: '50%', marginRight:"42rem", marginLeft:"42rem" , objectFit:"contain"}}> <img
        src={images} // Replace with the URL of an appropriate error image
        alt="Error Illustration"
        style={{ display:"block",   opacity: "0.8", padding:"1rem" }}
        /></div>
      <p>Please try again later or contact our support team for assistance.</p>
      <div style={{ marginTop: '20px' }}>
        <Link to="/" style={{ marginRight: '20px' }}>
          Go to Homepage
        </Link>
        <Link to="/contactus">Contact Support</Link>
      </div>
    </div>
  );
}
