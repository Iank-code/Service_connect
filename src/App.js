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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="mb-16"
      >
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

      {/* For Client section */}
      <div className="bg-green-900 flex flex-col text-white py-20 gap-40 my-20 mx-20 rounded-md">
        <span className="ml-14 text-lg font-bold">For Client</span>

        <div className="flex gap-10 ml-14">
          <div className="flex flex-col gap-8">
            {/* For introductory text */}
            <div>
              <h1 className="text-2xl font-bold">
                Find Skilled
                <br />
                Talent Today
              </h1>
              <span className="text-gray-400">
                Find talent you want to work with.
              </span>
            </div>

            {/* For client bullet points */}
            <div>
              <ul>
                <li>Choose the right talent for your work.</li>
                <li>Choose your preferred date and time</li>
                <li>Choose your location</li>
                <li>Timely Support and Assistance</li>
              </ul>
            </div>

            {/* Button that directs to Client create account */}
            <button className="bg-white text-green-900 py-1 px-4 rounded">
              Create Client Account
            </button>
          </div>

          {/* for client image */}
          <div></div>
        </div>
      </div>
      {/* For Freelancer section */}
      <div className="bg-green-900 flex flex-col text-white py-20 gap-40 my-10 mx-20 rounded-md">
        <span className="ml-14 text-lg font-bold">For Freelancer</span>

        <div className="flex gap-10 ml-14">
          <div className="flex flex-col gap-8">
            {/* For introductory text */}
            <div>
              <h1 className="text-2xl font-bold">
                This is where
                <br />
                businesses and companies
                <br />
                find skilled freelancers
              </h1>
              {/* <span className="text-gray-400">
                Find talent you want to work with.
              </span> */}
            </div>

            {/* For Freelancer bullet points */}
            <div>
              <ul>
                <li>Reliable Payment System.</li>
                <li>Timely Support and Assistance.</li>
                <li>Reliable Payment System.</li>
                <li>Reliable Payment System.</li>
              </ul>
            </div>

            {/* Button that directs to Freelancer create account */}
            <button className="bg-white text-green-900 py-1 px-4 rounded">
              Create Freelancer Account
            </button>
          </div>

          {/* for Freelancer image */}
          <div></div>
        </div>
      </div>

      {/* Have a question? */}
      <section style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '2em 0'
      }}>
        <h1 className="text-2xl font-bold">
          Have a Project ?
          <br />
          Recruit Here
        </h1>
      </section>
    </div>
  );
}

export default App;
