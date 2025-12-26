import "./App.css";
import Accordian from "./Components/Accordian";
import ImageSlider from "./Components/ImageSlider";
import RandomColor from "./Components/Random-color";
import StartRating from "./Components/StarRating";

function App() {
  return (
    <div className="App">
      {/* Accordian */}
      {/* <Accordian /> */}

      {/* random color */}
      {/* <RandomColor /> */}

      {/* <StartRating noOfStars={10}/> */}
      <ImageSlider url = {'https://picsum.photos/v2/list'} page ={'1'} limit={"5"}/>

    </div>
  );
}

export default App;
