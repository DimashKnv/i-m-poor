import "./App.css";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import imgIcon from "./poor.png";
import ImgIcon from "./components/Img";

function App() {
  return (
    <div className="App">
      <Title text="I am poor" />
      <Subtitle subtext="asd" />
      <ImgIcon resource={imgIcon} />
    </div>
  );
}

export default App;
