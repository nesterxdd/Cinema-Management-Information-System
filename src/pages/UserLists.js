import { useNavigate } from 'react-router-dom';
import Header from '../components/high level/header/header';
import Footer from '../components/high level/footer/footer';
import '../components/high level/manage_permissions_section/UserList.scss';

const users = [
  { client_id: 1, username: 'user1', permissions: ['permission1', 'permission2'] },
  { client_id: 2, username: 'user2', permissions: ['permission3'] },
  { client_id: 3, username: 'user3', permissions: ['permission1', 'permission2'] },
];

const isLoggedIn = true;  
const isAdmin = true;     

const UserList = () => {
  const navigate = useNavigate();

  const handleManagePermissions = (clientId) => {
    navigate(`/manage-permissions/${clientId}`);
  };

  return (
    <div className="user-list-page">
      <Header isLoggedIn={isLoggedIn} isAdmin={isAdmin} />

      <main>
        <h1 className="title">Manage Users and Permissions</h1>

        <div className="user-table-wrapper">
          <table className="user-table">
            <thead>
              <tr>
                <th>Client ID</th>
                <th>Username</th>
                <th>Permissions</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.client_id}>
                  <td>{user.client_id}</td>
                  <td>{user.username}</td>
                  <td>{user.permissions.join(', ')}</td>
                  <td>
                    <button onClick={() => handleManagePermissions(user.client_id)}>
                      Manage
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <Footer /> {/* Footer stays at the bottom */}
    </div>
  );
};

export default UserList;
