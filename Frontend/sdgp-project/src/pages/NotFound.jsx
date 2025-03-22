import { Link } from "react-router-dom";
import "../style/NotFound.css";

export default function NotFound() {
  return (
    <div className="error-page">
    <div className="container">
      <h1 className="error-code">404  🥺 </h1>
      <p className="error-message">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="back-home">
        Go Back Home
      </Link>
    </div>
    </div>
  );
}