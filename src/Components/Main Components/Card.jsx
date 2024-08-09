const Card = (data) => {
  return (
    <>
      <div className="col">
        <div className="card">
          <img src={data.image} className="card-img-top" alt={data.title} />
          <div className="card-body">
            <h5 className="card-title">{data.description}</h5>
            <p className="card-text">{data.Date}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
