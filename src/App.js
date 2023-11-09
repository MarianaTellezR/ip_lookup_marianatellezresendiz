import "./App.css";
import Navigation from "./Navigation";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <section id="section1"></section>
        <section id="section2"></section>
        <section id="section3"></section>
        <section id="section4"></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
