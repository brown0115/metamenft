import Header from "../components/layouts/header";
import PlayMusic from "../components/modals/playMusic";
import GetCard from "../components/modals/getCard";
function HomeView() {
  return (
    <div className="relative w-full h-screen bg-heroIMG bg-center bg-no-repeat bg-cover">
      <div className="w-full absolute left-0 top-0 w-full min-h-[260px] h-[35%] max-h-[500px] bg-linear01"></div>
      <Header />
      <div className="w-full absolute left-0 bottom-0 rotate-180 w-full min-h-[260px] h-[35%] max-h-[500px] bg-linear01"></div>

      <div className="absolute left-0 bottom-[40px] w-full flex items-center justify-center">
        <div className="w-full max-w-[1400px] mx-auto px-[35px] flex items-center justify-between">
          <PlayMusic />
          <GetCard />
        </div>
      </div>
    </div>
  );
}
export default HomeView;
