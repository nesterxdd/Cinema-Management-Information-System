import "./styles.scss";

function CinemaMetadata() {
  return (
    <div className="metadata cinema">
      <div className="header">Details</div>
      <div className="details-table">
        <div>
          <div className="detail-row">
            <span className="label">Location: </span>
            <span>Terrassa, Spain</span>
          </div>
          <div className="detail-row">
            <span className="label">Opening Hours: </span>
            <span>10:00 AM - 11:00 PM</span>
          </div>
          <div className="detail-row">
            <span className="label">Parking: </span>
            <span>Free Parking Available</span>
          </div>
        </div>
        <div>
          <div className="detail-row">
            <span className="label">Accessibility: </span>
            <span>Wheelchair Accessible</span>
          </div>
          <div className="detail-row">
            <span className="label">Wifi: </span>
            <span>Free Wifi Available</span>
          </div>
          <div className="detail-row">
            <span className="label">Phone: </span>
            <span>(+34) 123-456-789</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CinemaMetadata;
