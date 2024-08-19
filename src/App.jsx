import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div classeName="container">
        <Header title="The Job Board" />

        <div className="container">
          <Jobs />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
