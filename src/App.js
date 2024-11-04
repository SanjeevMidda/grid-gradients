import "./index.css";
import Gradient from "./components/Gradient";

function App() {
  let numbers = [];

  for (let index = 0; index < 12 * 12; index++) {
    numbers.push(index);
  }

  return (
    <div className="App">
      {/* <div className="gridContainer">
        <h1 className="textOne">A</h1>

        <div className="gradientOne"></div>
        <h1 className="textTwo">B</h1>

        <div className="gradientTwo"></div>
        <h1 className="textThree">C</h1>

        <div className="gradientThree"></div>

        <h1 className="textFour">D</h1>

        <div className="gradientFour"></div>
      </div>

      <div className="gridContainerTwo">
        <h1>one</h1>
        <h1>two</h1>
        <h1>three</h1>
        <h1>four</h1>
        <h1>five</h1>
        <h1>six</h1>
        <h1>seven</h1>
        <h1>eight</h1>
        <h1>nine</h1>
      </div> */}

      <div className="container">
        {numbers.map((number) => {
          return <Gradient />;
        })}
      </div>
      <h4>balls</h4>
    </div>
  );
}

export default App;
