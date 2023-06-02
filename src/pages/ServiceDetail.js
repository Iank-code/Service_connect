import "./../App.css";
import house from "./../assets/house.png";
import checkMark from "./../assets/checkMark.png";

function ServiceDetail() {
  return (
    <div className="h-screen">
      {/* w-9/12 */}
      {/* For service the provider is offering */}
      <div className="flex justify-between mx-3 w-9/12 border-2 px-6 py-6 mt-4 rounded-md border-black">
        <div className="flex float-right">
          <div className="flex w-80 my-4 gap-4">
            <img src={house} alt="house.png" />
            <div className="flex flex-row gap-1 width-auto">
              <span
                style={{
                  width: "30%",
                  display: "flex",
                  flexWrap: "nowrap",
                  fontWeight: "bold",
                }}
              >
                House Cleaning service
              </span>

              <img src={checkMark} alt="checkMark.png" className="w-5 h-5" />
              <span className="text-sm">verified</span>
              {/* <div className="flex flex-row gap-2 align-baseline">
              </div> */}
            </div>
          </div>
          <div></div>
        </div>
        <div className=" flex flex-col bg-gray-300 w-44 h-32 px-2 pt-2 pb-2 rounded float-left">
          <h4 className="text-sm font-bold">
            Please Note <span className="text-orange-700">*</span>
          </h4>
          <span className="text-xs">
            For your safety never transfer money or communicate outside of
            service connect
          </span>
          <button className="bg-green-700 text-white rounded text-xs">
            Message provider
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetail;
