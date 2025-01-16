import MovieList from "../components/high level/movie_list/movie_list";

const verifyTicketRoute = "/update-schedule";

function UpdateSchedule() {
  return (
    <>
      <div className="page">
      <MovieList verifyTicketRoute={verifyTicketRoute} />
      </div>
    </>
  );
}
  
export default UpdateSchedule;