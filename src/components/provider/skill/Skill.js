import React, { useState } from "react";
import "./Skill.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Skill() {
  const [imageData, setImageData] = useState(null)
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(null);
  const [file, setFile] = useState(null);
  console.log(imageData)
  const handleSubmit = (e) => {
    e.preventDefault();

    const formItem = new FormData();
    formItem.append("name", name);
    formItem.append("price", price);
    // formItem.append("description", "Test description");
    formItem.append("service_id", 1);
    formItem.append("images[]", file);

  

    axios({
      method: "post",
      url: "http://127.0.0.1:3000/microservices",
      data: formItem,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response.data);
        setImageData(response.data)
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };
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
          {imageData &&(<div>
            <img src={imageData.data.images[0]} alt="" srcSet=""  className="w-64 h-64 object-cover" />
            <p>Name: {imageData.data.data.name}</p>
            <p>Price: {imageData.data.data.price}</p>
          </div>)}
          <form className="upload-sub-service-container">
            <label className="upload-box">
              <i className="upload-icon fas fa-cloud-upload-alt"></i>

              <input
                id="upload"
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              />
              <span className="upload-text">Choose photos or drag it here</span>
            </label>

            <div className="image-info">
              <div className="image-name">
                <label>Name:</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter a name for your photo"
                />
              </div>

              <div className="image-price">
                <label>Price:</label>

                <input
                  id="price"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Enter a price for this "
                />
              </div>
            </div>

            <button type="submit" onClick={handleSubmit}>
              Upload
            </button>
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
