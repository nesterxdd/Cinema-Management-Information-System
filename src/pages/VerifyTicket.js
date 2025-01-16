import QrScan from "../components/high level/qr_scan/qr_scan";


function VerifyTicket() {
  return (
    <>
      <div className="page">
      <QrScan />
      </div>
    </>
  );
}
  
export default VerifyTicket;