import "./styles.scss";

function Metadata() {
  return (
    <div className="metadata">
      <div className="header">Venom: The Last Dance</div>
      <div className="details-table">
        <div className="detail-row">
          <span className="label">Rating: </span>
          <span> ★★★★☆ 4.2</span>
        </div>
        <div className="detail-row">
          <span className="label">Director: </span>
          <span>Kelly Marcel</span>
        </div>
        <div className="detail-row">
          <span className="label">Release Period: </span>
          <span>October 23, 2024 - November 27, 2024</span>
        </div>
        <div className="detail-row">
          <span className="label">Age Rating: </span>
          <span>16+</span>
        </div>
        <div className="detail-row">
          <span className="label">Language: </span>
          <span>Ukrainian</span>
        </div>
        <div className="detail-row">
          <span className="label">Genre: </span>
          <span>Action, Sci-Fi</span>
        </div>
        <div className="detail-row">
          <span className="label">Duration: </span>
          <span>1h 50m</span>
        </div>
        <div className="detail-row">
          <span className="label">Production: </span>
          <span>USA</span>
        </div>
        <div className="detail-row">
          <span className="label">Studio: </span>
          <span>Sony Pictures</span>
        </div>
        <div className="detail-row">
          <span className="label">Screenplay: </span>
          <span>Kelly Marcel</span>
        </div>
        <div className="detail-row">
          <span className="label">Starring: </span>
          <span>Tom Hardy, Chiwetel Ejiofor, Juno Temple</span>
        </div>
        <div className="detail-row">
          <span className="label">Inclusive Adaptation: </span>
          <span>
            The film is adapted for people with hearing or vision impairments.
            Download the "GRETA" app on your smartphone.
          </span>
        </div>
      </div>
      <p>
        <span className="label">Synopsis:</span> Tom Hardy returns as Venom, one
        of Marvel’s most iconic characters, in the final film of the trilogy!
        After the events of the previous film, Eddie and Venom are forced to run
        as two worlds close in, weaving everything into one tangled web. They
        must make a fateful decision, their last dance.
      </p>
    </div>
  );
}

export default Metadata;
