import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/high level/header/header';
import Footer from '../components/high level/footer/footer';
import '../components/high level/manage_permissions_section/ManagePermissions.scss';

const allPermissions = ['permission1', 'permission2', 'permission3', 'permission4'];

const ManagePermissions = () => {
  const { client_id } = useParams();
  const [permissions, setPermissions] = useState(['permission1']); // Default permissions for the example

  //change the logic later with required methods
  const isLoggedIn = true;  
  const isAdmin = true;     

  const handlePermissionToggle = (permission) => {
    setPermissions((prevPermissions) =>
      prevPermissions.includes(permission)
        ? prevPermissions.filter((perm) => perm !== permission)
        : [...prevPermissions, permission]
    );
  };

  return (
    <div className="manage-permissions-page">
      <Header isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
      <main>
        <h1 className="title">Manage Permissions for User {client_id}</h1>
        <div className="permissions-dropdown">
          <div className="dropdown-label">
            Permissions
            <span>▼</span>
          </div>
          <div className="permissions-list">
            {allPermissions.map((permission) => (
              <div key={permission} className="permission-item">
                <input
                  type="checkbox"
                  id={permission}
                  checked={permissions.includes(permission)}
                  onChange={() => handlePermissionToggle(permission)}
                />
                <label htmlFor={permission}>{permission}</label>
              </div>
            ))}
          </div>
        </div>
        <button className="save-button">Save Permissions</button>
      </main>
      <Footer />
    </div>
  );
};

export default ManagePermissions;
