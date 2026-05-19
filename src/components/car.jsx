import { Link } from "react-router";
import ListItem from "./list-item";
import { timeAgo } from "../utils/timeAgo";

function Car({ car }) {
  return (
    <ListItem
      title={`${car.make} ${car.model} ${car.year}`}
      image={car.image}
      footer={
        <>
          Posted {timeAgo(car.createdOn)}, by {car.createdBy ? <Link to={`/user/${car.createdBy}`}>{car.createdBy}</Link> : <span>[not found]</span>}
        </>
      }
      details={
        <>
          Current Status: <span>{car.status}</span>
          <br />
          Location: <span>{car.location}</span>
        </>
      }
      redirect={`/inventory/${car.id}`}
    />
  );
}

export default Car;
