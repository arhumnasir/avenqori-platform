import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
const reviews = [
  [
    "Zainab Fatima",
    "Student from Pakistan",
    "AVENQORI has completely changed the way I learn. The tutors are amazing and the platform is super easy to use!",
  ],
  [
    "Ali Raza",
    "Student from UK",
    "The AI Study Planner is a game changer. I am more organized and confident in my studies now!",
  ],
  [
    "Muhammad Usman",
    "Student from USA",
    "Best learning platform ever! Highly recommended to everyone.",
  ],
];
export default function Testimonials() {
  const [i, setI] = useState(0);
  return (
    <div className="testimonials">
      <div className="review-grid">
        {[0, 1, 2].map((n) => {
          const r = reviews[(i + n) % 3];
          return (
            <article className="review-card" key={n}>
              <Quote className="quote" />
              <p>{r[2]}</p>
              <b>{r[0]}</b>
              <small>{r[1]}</small>
              <div className="stars">★★★★★</div>
            </article>
          );
        })}
      </div>
      <div className="carousel-controls">
        <button onClick={() => setI((i + 2) % 3)} aria-label="Previous review">
          <ChevronLeft />
        </button>
        <span>
          {[0, 1, 2].map((n) => (
            <button
              className={i === n ? "dot active" : "dot"}
              onClick={() => setI(n)}
              key={n}
              aria-label={`Show review ${n + 1}`}
            />
          ))}
        </span>
        <button onClick={() => setI((i + 1) % 3)} aria-label="Next review">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
