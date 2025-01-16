import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/high level/header/header";
import Footer from "../components/high level/footer/footer";

import createReportIcon from "../assets/admin_panel_icons/create_report_icon.png";
import manageRolesIcon from "../assets/admin_panel_icons/manage_roles.png";
import updateMovieMetadataIcon from "../assets/admin_panel_icons/update_movie_metadata.png";
import selectReportIcon from "../assets/admin_panel_icons/select_report.png"; 
import "../components/high level/admin_panel_section/AdminPanel.scss";

// Define the functions available in the admin panel
const functions = [
  { 
    name: "Create Report", 
    logo: createReportIcon, 
    description: "Generate new reports for showtimes or movies.", 
    link: "/create-report-type" 
  },
  { 
    name: "Manage Roles & Permissions", 
    logo: manageRolesIcon, 
    description: "Assign roles and manage user permissions.", 
    link: "/user-list" 
  },
  { 
    name: "Update Movie Metadata", 
    logo: updateMovieMetadataIcon, 
    description: "Edit or update metadata for movies in the database.", 
    link: "/select-movie"  
  },
  { 
    name: "Select Report",   
    logo: selectReportIcon,  
    description: "View or select a report from the available reports.", 
    link: "/select-report"   
  }
];

function AdminPanelMenu() {
  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);  
  };

  return (
    <>
      {/* Render Header without passing any login props */}
      <Header />
      <div className="pageadmin">
        <div className="actions-list">
          {functions.map((func, index) => (
            <div
              key={index}
              className="action-item"
              onClick={() => handleClick(func.link)}  
            >
              <img src={func.logo} alt={func.name} />
              <h3>{func.name}</h3>
              <p>{func.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AdminPanelMenu;
