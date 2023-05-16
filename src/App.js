import "./App.css";
import Navbar from "./components/Navbar";
import construction from "./assets/construction.png";

function App() {
  return (
    <div>
      <Navbar />

      {/* For the greeting and first section */}
      <div className="flex flex-row justify-between bg-green-900 py-10 gap-10">

        {/* For greeting text */}
        <div className="flex flex-col justify-center gap-5 ml-12">
          <h1 className="text-white text-xl">
            Find your perfect match <br /> for any project
          </h1>
          <button className="bg-white text-green-900 rounded px-4 py-2 font-bold">Get Started</button>
        </div>
        {/* For image */}
        <img
          src={construction}
          alt="construction worker"
          className="w-80 h-80"
        />
        <div> </div>
      </div>
    </div>
  );
}

export default App;
