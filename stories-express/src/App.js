import "./App.css";
import Navbar from "./Components/Navbar";
import NewsCardList from "./Components/NewsCard/NewsCardList";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <NewsCardList />
    </div>
  );
};

export default App;
