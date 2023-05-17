import "./App.css";
import Navbar from "./components/Navbar";
import SharedJob from "./components/SharedJob";

import shakingHands from "./assets/shakingHands.jpg";
import construction from "./assets/construction.png";
import SharedInfo from "./components/SharedInfo";

// Images for SharedJob
import photography from "./assets/photography.png";
import logistic from "./assets/logistic.png";
import carpentry from "./assets/carpentry.png";
import plumbing from "./assets/plumbing.png";
import animation from "./assets/animation.png";
import laundry from "./assets/laundry.png";
import design from "./assets/design.png";

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
          <button className="bg-white text-green-900 rounded px-4 py-2 font-bold">
            Get Started
          </button>
        </div>
        {/* For image */}
        <img
          src={construction}
          alt="construction worker"
          className="w-80 h-80"
        />
        <div> </div>
      </div>

      {/* Greeting section */}
      <div className="flex flex-row justify-center gap-20 my-20">
        <img
          src={shakingHands}
          alt="shakingHands.jpg"
          style={{
            width: "700px",
            height: "500px",
          }}
        />
        <div className="flex flex-col justify-center gap-5">
          <SharedInfo
            main="No cost to join."
            sub="Register for free and get a highly skilled for your project."
          />

          <SharedInfo
            main="Stick to your budget."
            sub="Find the right service for every price point."
          />

          <SharedInfo
            main="Get quality work done."
            sub="Get your work done by talented freelancers."
          />

          <SharedInfo
            main="Secure transactions."
            sub="Get your work done by talented freelancers."
          />
        </div>
      </div>

      {/* Jobs we have */}
      <div className="mb-16">
        <h3 className="font-bold flex flex-col items-center pb-10">
          Whatever you need, we’ve got you
        </h3>
        <div className="grid grid-cols-4 justify-center gap-10">
          <SharedJob pic={photography} text="Photography" />
          <SharedJob pic={logistic} text="Logistic" />
          <SharedJob pic={carpentry} text="Carpentry" />
          <SharedJob text="Other" />
          <SharedJob pic={plumbing} text="Plumbing" />
          <SharedJob pic={laundry} text="Laundry" />
          <SharedJob pic={design} text="Web Design" />
          <SharedJob pic={animation} text="Video and Animation" />
        </div>
      </div>
    </div>
  );
}

export default App;
