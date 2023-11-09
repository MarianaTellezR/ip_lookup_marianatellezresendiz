import "./App.css";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Try from "./Try";
import Questions from "./Questions";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="try">
          <Try />
        </section>
        <section id="questions">
          <Questions />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
