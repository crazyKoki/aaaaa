function Image() {
  const url = "https://images.dog.ceo/breeds/shiba/shiba-8.jpg";
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img src={url} alt="cute dog!" />
        </figure>
      </div>
    </div>
  );
}