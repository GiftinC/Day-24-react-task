/* eslint-disable react/prop-types */
import Card from "../Main Components/Card.jsx";

const DataScience = ({ data }) => {
  const dataScience = data.filter((data) => data.title === "Data Science");
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {dataScience.map((data) => (
          <Card key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
};

export default DataScience;
