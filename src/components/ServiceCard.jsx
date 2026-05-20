function ServiceCard({ title, description, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="service-img" />

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;