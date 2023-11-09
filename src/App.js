import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="home"></section>
        <section id="about"></section>
        <section id="try"></section>
        <section id="questions"></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
