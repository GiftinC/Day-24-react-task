/* eslint-disable react/prop-types */
import Card from "../Main Components/Card.jsx";

const Cyber = ({ data }) => {
  const cyber = data.filter((data) => data.title === "Cyber Security");
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {cyber.map((data) => (
          <Card key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
};

export default Cyber;
