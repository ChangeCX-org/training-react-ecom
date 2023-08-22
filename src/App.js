import CurratedBlock from "./components/sample/CurratedBlocks";
import HomePageBanner from "./components/sample/HomePage";
import Brands from "./components/Brands";
import Header from "./components/Header";

function App() {
  return (
    <div className="p-10">
      <Header/>
      <HomePageBanner></HomePageBanner>
      <CurratedBlock/>
      <Brands />
    </div>
  );
}

export default App;
