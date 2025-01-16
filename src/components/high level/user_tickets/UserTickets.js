import SecondaryButton from "../../low level/SecondaryButton";
import "./styles.scss";
import { useNavigate } from "react-router-dom";

function UserData() {
  const navigate = useNavigate();

  const handleEditRedirect = () => {
    navigate("/ticket-edit");
  };

  const handleRefundRedirect = () => {
    navigate("/ticket-refund");
  };

    return (
        <div className="ticket-table">          
            <table>
            <caption class="text-center">Tickets bought by user:</caption>
              <thead>
                <tr>
                    <th>Movie</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Hall</th>
                    <th>Row</th>
                    <th>Seat</th>
                    <th>Is VIP</th>
                    <th>Edit</th>
                    <th>Refund</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Some movie</td>
                  <td>1.1.2000</td>
                  <td>12:00</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>No</td>
                  <td class="link" onClick={handleEditRedirect}>Edit ticket</td>
                  <td class="link" onClick={handleRefundRedirect}>Refund ticket</td>
                </tr>
              </tbody>
            </table>  
        </div>
    );
  }
  
  export default UserData;