import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

function Action({ functions }) {
  const navigate = useNavigate();

  const handleLogoClick = (link) => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <div className="actions-section">
      {functions.map((action, index) => (
        <div className="action-card" key={index}>
          <div className="action-name">{action.name}</div>
          <img
            src={action.logo}
            alt={action.name}
            className="action-logo"
            onClick={() => handleLogoClick(action.link)}
          />
          <div className="action-description">{action.description}</div>
        </div>
      ))}
    </div>
  );
}

Action.propTypes = {
  functions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Action;
