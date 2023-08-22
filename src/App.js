import CurratedBlock from "./components/sample/CurratedBlocks";
import HomePageBanner from "./components/sample/HomePage";
import Brands from "./components/Brands";

function App() {
  return (
    <div className="p-10">

      <HomePageBanner></HomePageBanner>
      <CurratedBlock/>
      <Brands />
    </div>
  );
}

export default App;
