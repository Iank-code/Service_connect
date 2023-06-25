import React, { useState } from 'react'
import './ProviderFace.css'
import { useNavigate } from 'react-router-dom'

function ProviderFace() {
  const navigate = useNavigate()
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);

  const handleFileUpload = async (file) => {
    // Replace this URL with the URL of your backend route for handling file uploads
    const uploadUrl = 'http://localhost:3000/profile';

    // FormData object to send the file to the backend
    const formData = new FormData();
    formData.append('file', file);

    // Send the file to the backend using a POST request
    const response = await fetch(uploadUrl, {
      method: 'POST',
      body: formData
    });

    // Get the URL of the uploaded image from the response
    const data = await response.json();
    const imageUrl = data.imageUrl;

    // Update the state with the URL of the uploaded image
    setUploadedImageUrl(imageUrl);
  }

  return (
    <div>
      <div className='provider-step-one-container'>
        <h2>Let's start by getting to know you.</h2>
        <div className='flex justify-around justify-center items-center h-screen provider-step-one-child-container'>
          <div className="provider-image">
            <div className="upload-wrapper">
              {!uploadedImageUrl ? (
                <div className="upload-box">
                  <label className="custom-file-input" htmlFor="upload">
                    <span>Upload photo</span>
                  </label>
                  <input
                    id="upload"
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      console.log(e.target.files[0]);
                      setSelectedFile(e.target.files[0]);
                      handleFileUpload(e.target.files[0]);
                    }}
                  />
                </div>
              ) : (
                <img src={uploadedImageUrl} alt="Uploaded image" />
              )}
              <div className="instructions-box">
                <ul>
                  <li>
                    <input type="checkbox" id="size" />
                    <label htmlFor="size">Photo size should be less than 2 MB</label>
                  </li>
                  {/* <li>
                    <input type="checkbox" id="format" />
                    <label htmlFor="format">Photo format should be PNG or JPG</label>
                  </li> */}
                  <li>
                    <input type="checkbox" id="quality" />
                    <label htmlFor="quality">Photo should passport image</label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h1>Your name as it appears in National ID</h1>
            <form className="flex flex-col border-2 border-black rounded-md py-10 px-14">
              <label>First Name:</label>
              <input
                className="border-2 border-black rounded pl-4"
                type="text"
              />

              <label>Last Name:</label>
              <input
                className="border-2 border-black rounded pl-4"
                type="text"
              />
            </form>
          </div>
        </div>
        <div></div>
        <div className='next-back-btn'>
          <button className='back'>back</button>
          <button className='next' onClick={() => navigate('/serviceSelect')}>next</button>
        </div>
      </div>

    </div>
  )
}

export default ProviderFace;
