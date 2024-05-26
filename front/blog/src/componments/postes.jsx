import React, { useState } from "react";
import axios from "axios";
function AddPoste() {
  const [description, setDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [titre, setTitre] = useState("");
  const [category, setCategory] = useState();

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleTitre = (e) => {
    setTitre(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please select a valid image file (JPG or PNG).");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    axios.post("/webp/back/poste.php", {
      titre,
      description,
      selectedImage,
      category,
    });
  };

  return (
    <div className="addposte">
      <h1>Add Post</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="liste">
          <div className="wrapper">
            <div className="option">
              <input
                className="input"
                type="radio"
                name="btn"
                value="Art"
                defaultChecked
                onClick={setCategory == "Art"}
              />
              <div className="btn">
                <span className="span">Art</span>
              </div>
            </div>
            <div className="option">
              <input
                className="input"
                type="radio"
                name="btn"
                value="Science"
                onClick={setCategory == "Science"}
              />
              <div className="btn">
                <span className="span">Science</span>
              </div>
            </div>
            <div className="option">
              <input
                className="input"
                type="radio"
                name="btn"
                value="Technology"
                onClick={setCategory == "Technology"}
              />
              <div className="btn">
                <span className="span">Technology</span>
              </div>
            </div>
            <div className="option">
              <input
                className="input"
                type="radio"
                name="btn"
                value="Cinema"
                onClick={setCategory == "Cinema"}
              />
              <div className="btn">
                <span className="span">Cinema</span>
              </div>
            </div>
            <div className="option">
              <input
                className="input"
                type="radio"
                name="btn"
                value="Design"
                onClick={setCategory == "Design"}
              />
              <div className="btn">
                <span className="span">Design</span>
              </div>
            </div>
            <div className="option">
              <input
                className="input"
                type="radio"
                name="btn"
                value="Food"
                onClick={setCategory == "Food"}
              />
              <div className="btn">
                <span className="span">Food</span>
              </div>
            </div>
          </div>
          <div className="checkbox">
            <div class="customCheckBoxHolder">
              <input class="customCheckBoxInput" id="cCB1" type="checkbox" />
              <label class="customCheckBoxWrapper" for="cCB1">
                <div class="customCheckBox">
                  <div class="inner">B</div>
                </div>
              </label>

              <input class="customCheckBoxInput" id="cCB2" type="checkbox" />
              <label class="customCheckBoxWrapper" for="cCB2">
                <div class="customCheckBox">
                  <div class="inner">I</div>
                </div>
              </label>

              <input class="customCheckBoxInput" id="cCB3" type="checkbox" />
              <label class="customCheckBoxWrapper" for="cCB3">
                <div class="customCheckBox">
                  <div class="inner">U</div>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="titre">
          <div class="input-container">
            <input type="text" id="input" required="" onChange={handleTitre} />
            <label for="input" class="label">
              Enter title
            </label>
            <div class="underline"></div>
          </div>
        </div>
        <div className="textfield">
          <textarea
            name="description"
            id="desc"
            rows={10}
            cols={50}
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div className="image-upload">
          <label htmlFor="imageInput">Upload an Image (JPG or PNG):</label>
          <input
            type="file"
            id="imageInput"
            accept="image/jpeg, image/png"
            onChange={handleImageChange}
          />
        </div>
        {imagePreviewUrl && (
          <div className="image-preview">
            <img
              src={imagePreviewUrl}
              alt="Image Preview"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        )}

        <button className="form-submit-btn" type="submit">
          <span class="circle1"></span>
          <span class="circle2"></span>
          <span class="circle3"></span>
          <span class="circle4"></span>
          <span class="circle5"></span>
          <span class="text">Submit</span>
        </button>
      </form>
    </div>
  );
}

export default AddPoste;
