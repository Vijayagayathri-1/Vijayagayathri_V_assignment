import './eventCard.css';

const EventCard = ({ service, onClick }) => {
  return (
    <div className="event-card" onClick={onClick}>
      <img src={service.images[0]} alt={service.name} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{service.name}</h3>
        <p className="card-info">Price: ${service.price}</p>
        <p className="card-info">Rating: {service.rating} ⭐</p>
        <p className="card-info availability">
          {service.availability ? 'Available' : 'Unavailable'}
        </p>
      </div>
    </div>
  );
};

export default EventCard;