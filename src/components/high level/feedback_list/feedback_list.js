import { useNavigate } from 'react-router-dom';
import PrimaryButton from "../../low level/PrimaryButton";
import SecondaryButton from "../../low level/SecondaryButton";
import Header from '../header/header';
import Footer from '../footer/footer';
import "./feedback_list.scss"; 

const FeedbackList = () => {
  const reports = [
    { login: "user1", movie: 'Guardians of The Galaxy', rating: '5', text: "Good movie" },
    { login: "user2", movie: 'Guardians of The Galaxy', rating: '4', text: "Normal movie" },
    { login: "user3", movie: 'Guardians of The Galaxy', rating: '3', text: "OK movie" },
  ];

  const handleAccept = (login) => {
    console.log(`Accepted feedback from ${login}`);
  };

  const handleReject = (login) => {
    console.log(`Rejected feedback from ${login}`);
  };

  return (
    <>
      <Header />
      <div className="feedback-list-page">
        <div className="page-title">
          <h1>Verify Feedback</h1>
        </div>

        <table className="feedbacks-table">
          <thead>
            <tr>
              <th>Login</th>
              <th>Movie</th>
              <th>Rating</th>
              <th>Text</th>
              <th>Actions</th> {/* New header for actions */}
            </tr>
          </thead>
          <tbody>
            {reports.map((feedback) => (
              <tr key={feedback.login}>
                <td>{feedback.login}</td>
                <td>{feedback.movie}</td>
                <td>{feedback.rating}</td>
                <td>{feedback.text}</td>
                <td className="feedbacks-actions">
                  <PrimaryButton onClick={() => handleAccept(feedback.login)}>Accept</PrimaryButton>
                  <SecondaryButton onClick={() => handleReject(feedback.login)}>Reject</SecondaryButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default FeedbackList;
