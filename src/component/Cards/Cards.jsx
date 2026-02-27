import "./Cards.css";

const Cards = ({ quotes = [] }) => {
  return (
    <div className="cards-container">
      {quotes.map((q) => (
        <div key={q.id} className="card">
          <span className="card-id">{q.id}</span>
          <h2>{q.quote}</h2>
          <p className="author">{q.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
