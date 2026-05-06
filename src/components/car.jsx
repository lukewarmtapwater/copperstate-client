import { Link } from "react-router";
import ListItem from "./list-item";

function Car({ car }) {
  return (
    <ListItem
      title={`${car.make} ${car.model} ${car.year}`}
      details={
        <>
          Created by: <Link to={`/user/${car.createdBy}`}>{car.createdBy}</Link>
          <br />
          Location: <span>{car.location}</span>
        </>
      }
      redirect={`/inventory/${car.id}`}
    />
  );
}

export default Car;
