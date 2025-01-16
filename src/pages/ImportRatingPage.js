import ImportRating from "../components/high level/import_rating/import_rating";
import Header from "../components/high level/header/header";
import Footer from "../components/high level/footer/footer";

function ImportRatingPage() {
  return (
    <>
      <Header />
      <div className="page">

      <ImportRating />

      <Footer />
      </div>
    </>
  );
}
  
export default ImportRatingPage;