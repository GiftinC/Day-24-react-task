/* eslint-disable react/prop-types */

import Card from "../Main Components/Card.jsx";

const All = ({ data }) => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {data.map((data) => (
          <Card key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
};

export default All;
