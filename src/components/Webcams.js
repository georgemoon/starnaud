import React from "react";

export const TasmanWebcamDisplay = () => {
  return (
    <div className="TasmanWebcamDisplay">
      <div className="card">
        <h2 className="visually-hidden">Webcam (Waterfront)</h2>
        <img
          className="card-img-top"
          src="https://snapithd.com/static/lakerotoiti.jpg?width=770"
          alt="Current view from the Lake Rotoiti webcam"
        />
        <div className="card-body">
          <p className="m-0">
            <a href="https://encounter.snapithd.com/html5player/iframe_javascript.php?t=t&amp;w=t1bd338151dw41">
              Full screen
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export const NZTAWebcamDisplay = () => {
  return (
    <div className="NZTAWebcamDisplay">
      <div className="card">
        <h2 className="visually-hidden">Webcam (NZTA)</h2>
        <img
          className="card-img-top"
          src="https://www.trafficnz.info/camera/647.jpg"
          alt="Current view from the NZTA traffic webcam"
        />
      </div>
    </div>
  );
};

export const MSCWebcamDisplay = () => {
  return (
    <div className="MSCWebcamDisplay">
      <div className="card">
        <h2 className="visually-hidden">Webcam (Angelus)</h2>
        <img
          className="card-img-top"
          src="https://setup.photosentinel.com.au/api/installations/19493/4rYkWiqpth/latestPhotoWithMarks.jpg"
          alt="Current view from the Angelus webcam"
        />
        <div className="card-body">
          <p className="m-0">
            <a href="https://msc.imagegallery.co/gallery/#/installation/19493">
              History
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
