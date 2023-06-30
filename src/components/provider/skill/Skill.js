import React, { useState } from "react";
import "./Skill.css";
import { useNavigate } from "react-router-dom";
function Skill() {
  const navigate = useNavigate();
  const formItem = new FormData();
const [name, setName] = useState()
const [price, setPrice] = useState()
const [file, setFile] = useState()
  formItem.append("name", name);
  formItem.append("price", price);
  formItem.append("file", file);

  function handleSubmit(e){
    e.preventEfault()
    console.log(formItem)
  }
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
          <form class="upload-sub-service-container">
            <label class="upload-box" for="upload">
              <i class="upload-icon fas fa-cloud-upload-alt"></i>

              <span class="upload-text">Choose photos or drag it here</span>
            </label>
            <input
            id="upload"
                type="file"
                accept="image/*"
          
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              
                multiple/>
            {/* <input id="upload" type="file" accept="image/*" multiple /> */}
            <div class="image-info">
              <div class="image-name">
                <label for="name">Name:</label>
                <input
                 type="text"
                 value={name}
                 onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div class="image-price">
                <label for="price">Price:</label>

                <input
                 type="text"
                 value={price}
                 onChange={(e) => setPrice(e.target.value)}
                  placeholder="Enter a price for this "
                />
              </div>
            </div>
            <button className="back" type="submit"onClick={handleSubmit}>upload</button>
          </form>
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
