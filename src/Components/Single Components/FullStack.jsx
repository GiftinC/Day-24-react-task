/* eslint-disable react/prop-types */
import Card from "../Main Components/Card.jsx";

const FullStack = ({ data }) => {
  const fullStack = data.filter(
    (data) => data.title === "Full Stack Development"
  );
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {fullStack.map((data) => (
          <Card key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
};

export default FullStack;
