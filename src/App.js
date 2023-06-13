import "./App.css";
import Navbar from "./components/Navbar";
import SharedJob from "./components/SharedJob";
import Footer from "./components/Footer";

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
import interview from "./assets/interview.png";
import cleaning from "./assets/cleaning.png";

// Importing css file
import "./components/shared.css";

function App() {
  return (
    <div>
      <Navbar />

      {/* For the greeting and first section */}
      {/* Done with responsive design */}
      <div className="flex flex-row justify-between bg-green-900 py-10 gap-10 mobile:gap-1 mobile:flex-col-reverse mobile:justify-center mobile:gap-12 mobile:pb-10">
        {/* For greeting text */}
        <div className="flex flex-col justify-center gap-5 ml-12 mobile:ml-3 mobile:gap-4">
          <h1 className="text-white text-xl mobile:text-xl mobile:flex mobile:justify-center">
            Find your perfect match <br /> for any project
          </h1>
          <button className="bg-white text-green-900 rounded px-4 py-2 font-bold mobile:px-3 mobile:mx-14 mobile:py-1">
            Get Started
          </button>
        </div>
        {/* For image */}
        <img
          src={construction}
          alt="construction worker"
          className="w-80 h-80 mobile:flex mobile:justify-center mobile:w-50 mobile:h-50"
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
      {/* Done with responsive design */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="mb-16 mobile:mx-10 mobile:mb-10"
      >
        <h3 className="font-bold flex flex-col items-center pb-10 mobile:text-lg">
          Whatever you need, we’ve got you
        </h3>
        <div className="shared">
          <div className="flex gap-6">
            <SharedJob pic={photography} text="Photography" />
            <SharedJob pic={logistic} text="Logistic" />
            <SharedJob pic={carpentry} text="Carpentry" />
          </div>
          {/* <SharedJob text="Other" /> */}
          <div className="flex gap-6">
            <SharedJob pic={plumbing} text="Plumbing" />
            <SharedJob pic={laundry} text="Laundry" />
            <SharedJob pic={design} text="Web Design" />
            <SharedJob pic={animation} text="Video and Animation" />
          </div>
        </div>
      </div>

      {/* For Client section */}
      <div className="bg-green-900 flex flex-col text-white py-20 gap-30 my-20 mx-20 rounded-md">
        <span className="ml-14 text-lg font-bold">For Client</span>

        <div
          className="flex gap-10 ml-14"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
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
          <img
            src={interview}
            alt="interview.png"
            style={{
              width: "40em",
              height: "40em",
            }}
          />
        </div>
      </div>
      {/* For Freelancer section */}
      <div className="bg-green-900 flex flex-col text-white py-20 gap-30 my-10 mx-20 rounded-md">
        <span className="ml-14 text-lg font-bold">For Freelancer</span>

        <div
          className="flex gap-10 ml-14"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
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
          <img
            src={cleaning}
            alt="cleaning.png"
            style={{
              width: "40em",
              height: "40em",
            }}
          />
        </div>
      </div>

      {/* Have a question? */}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "2em 0",
        }}
      >
        <h1 className="text-2xl font-bold">
          Have a Project ?
          <br />
          Recruit Here
        </h1>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
