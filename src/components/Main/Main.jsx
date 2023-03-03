import "./Main.scss";
import data from "../../Data/data";
import Cart from "../Cart/Cart";
const Main = () => {
  // console.log(data);
  return (
    <div className="container">
      {data.map((x, i) => {
        return (<Cart  key={i} data={x} />);
      })}
    </div>
  );
};

export default Main;
