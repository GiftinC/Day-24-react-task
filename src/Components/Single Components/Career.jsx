/* eslint-disable react/prop-types */
import Card from "../Main Components/Card.jsx";

const Career = ({ data }) => {
  const career = data.filter((data) => data.title === "Career");
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {career.map((data) => (
          <Card key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
};

export default Career;
