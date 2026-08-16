import Header from "./components/Header/Header";
import SectionOne from "./components/Sections/SectionOne";
import SectionThree from "./components/Sections/SectionThree";
import SectionTwo from "./components/Sections/SectionTwo";

function App(){
  return (
    <div className="
      w-screen min-h-screen">
        <Header /> 

        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
    </div>
  )
}

export default App;