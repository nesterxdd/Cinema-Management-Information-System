import React, { useState, useEffect, useRef } from "react";
import PrimaryButton from "../../low level/PrimaryButton";
import Header from "../header/header";
import Footer from "../footer/footer";
import "./qr_scan.scss";
import SecondaryButton from "../../low level/SecondaryButton";

const QrScan = () => {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (isCameraActive) {
      startCamera();
    } else {
      stopCamera();
    }

    return () => {
      stopCamera();
    };
  }, [isCameraActive]);

  const startCamera = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => console.error("Error accessing camera: ", err));
    } else {
      console.error("Camera not supported on this device");
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject;
      const tracks = stream.getTracks();

      tracks.forEach((track) => {
        track.stop();
      });

      videoRef.current.srcObject = null;
    }
  };

  const toggleCamera = () => {
    setIsCameraActive((prevState) => !prevState);
  };

  const handleVerifyTicket = () => {

  };

  return (
    <>
      <Header />
      <div className="qr-scan-page">
        <div className="page-title">
          <h1>Open Camera</h1>
        </div>

        <div className="scanner-container">
          {isCameraActive ? (
            <video ref={videoRef} autoPlay style={{ width: "100%" }} />
          ) : (
            <p>Camera is off. Click "Open Camera" to start the feed.</p>
          )}
        </div>

        <SecondaryButton onClick={toggleCamera}>
          {isCameraActive ? "Close Camera" : "Open Camera"}
        </SecondaryButton>

        {}
        {isCameraActive && (
          <PrimaryButton onClick={handleVerifyTicket}>
            Verify Ticket
          </PrimaryButton>
        )}
      </div>
      <Footer />
    </>
  );
};

export default QrScan;
