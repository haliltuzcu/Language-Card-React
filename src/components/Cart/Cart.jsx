import { useState } from "react";
import { Card } from "react-bootstrap";
import "./Card.scss";

const Cart = ({ data }) => {
  console.log(data);
  const { name, img, options } = data;

  const [carts, setCarts] = useState(true);

  return (
    <div className="row">
      <Card className="col" onClick={() => setCarts(!carts)}>
        {carts ? (
          <div className="imgdiv">
            <Card.Img variant="top" src={img} />
            <h2>{name}</h2>
          </div>
        ) : (
          <Card.Body>
            <ul>
              <li>{options[0]}</li>
              <li>{options[1]}</li>
              <li>{options[2]}</li>
            </ul>
          </Card.Body>
        )}
      </Card>
    </div>
  );
};

export default Cart;
