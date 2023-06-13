import React from "react";
import "./Skill.css";
import { useNavigate } from "react-router-dom";
function Skill() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="skill-container">
        <div className="skill-child-container">
          <h1>Show your Skills</h1>
          <div className="skill-description">
            <p>Enhance your services with descriptive pictures.</p>
            <p>Add name or title and price for each sub-service</p>
            <p>Stand out and entice customers to choose your services.</p>
          </div>
          <div class="upload-sub-service-container">
            <label class="upload-box" for="upload">
              <i class="upload-icon fas fa-cloud-upload-alt"></i>

              <span class="upload-text">Choose photos or drag it here</span>
            </label>

            <input id="upload" type="file" accept="image/*" multiple />
            <div class="image-info">
              <div class="image-name">
                <label for="name">Name:</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter a name for your photo"
                />
              </div>

              <div class="image-price">
                <label for="price">Price:</label>

                <input
                  id="price"
                  type="number"
                  placeholder="Enter a price for this "
                />
              </div>
            </div>
          </div>

          {/* <div className="border-2 border-black rounded pl-2 providers-image">
          
          <div className="upload-wrapper">
            <div className="upload-box">
              <label className="custom-file-input" for="upload">
                <span>Upload image</span>
              </label>
              <input id="upload" type="file" accept="image/png, image/jpg, image/gif, image/jpeg" />
            </div>
            <div>
            <h1></h1>
            <form className="flex flex-col rounded-md py-1 px-5">
              <label>Sub-service name:</label>
              <input
                className="border-2 border-black rounded pl-2"
                type="text"
             
              />

              <label>Amount in KSH:</label>
              <input
                className="border-2 border-black rounded pl-2"
                type="number"
         
              />

            </form>
          </div>
          <button className='upload-sub-service'>Save</button>
          </div>
          <div className="upload-wrapper">
            <div className="upload-box">
              <label className="custom-file-input" for="upload">
                <span>Upload image</span>
              </label>
              <input id="upload" type="file" accept="image/png, image/jpg, image/gif, image/jpeg" />
            </div>
            <div>
            <h1></h1>
            <form className="flex flex-col rounded-md py-1 px-5">
              <label>Sub-service name:</label>
              <input
                className="border-2 border-black rounded pl-2"
                type="text"
             
              />

              <label>Amount in KSH:</label>
              <input
                className="border-2 border-black rounded pl-2"
                type="number"
         
              />

            </form>
          </div>
          <button className='upload-sub-service'>Save</button>
          </div>
          
                </div> */}
        </div>
      </div>
      <div className="next-back-btn">
        <button className="back" onClick={() => navigate("/serviceSelect")}>
          back
        </button>
        <button className="next" onClick={() => navigate("/location")}>
          next
        </button>
      </div>
    </div>
  );
}

export default Skill;
