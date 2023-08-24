import Homepage from "./components/HomePage";
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Describtion from "./components/sample/PDP";
import DescribtionWomen from "./components/sample/Women";
import DescribtionMen from "./components/sample/Men";
import DescribtionCasual from "./components/sample/Casual";
import DescribtionBestseller from "./components/sample/Bestseller";
import Header from "./components/Header";
function App() {
  return (
    <div className="p-10 pt-0">
       <Header/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        {/* <Route path="/Pdp" element={<Describtion/>}/> */}
        <Route path="/Bestseller" element={<DescribtionBestseller/>}/>
        <Route path="/Women" element={<DescribtionWomen/>}/>
        <Route path="/Men" element={<DescribtionMen/>}/>
        <Route path="/Casual" element={<DescribtionCasual/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
