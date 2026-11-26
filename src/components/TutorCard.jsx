import { Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
export default function TutorCard({ name, subject, rating, photo }) {
  return (
    <article className="tutor-card">
      <div className="tutor-photo" style={{ backgroundImage: `url(${photo})` }}>
        <span className="online">
          <i /> Online
        </span>
        <span className="rating">
          <Star size={13} fill="currentColor" /> {rating}
        </span>
      </div>
      <div className="tutor-info">
        <b>{name}</b>
        <small>{subject}</small>
        <Link to="/tutors" className="btn book-btn">
          Book Now <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
}
