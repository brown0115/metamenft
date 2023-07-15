import Header from "../components/layouts/header";
import PlayMusic from "../components/modals/playMusic";
import GetCard from "../components/modals/getCard";
import ClaimCardForm from "../components/form/claimCardForm";

function ClaimCard() {
  return (
    <div className="relative w-full h-screen bg-heroIMG bg-no-repeat bg-center bg-cover">
      <Header />
        
        <ClaimCardForm />

      <div className="fixed left-0 bottom-[40px] w-full flex items-center justify-center">
        <div className="w-full max-w-[1400px] mx-auto px-[35px] flex items-center justify-between">
          <PlayMusic />
          <GetCard />
        </div>
      </div>
    </div>
  );
}
export default ClaimCard;
