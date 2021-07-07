import {Home} from "./pages";
import {Footer, Header} from "./components/common";


function App() {
  return (
   <>
       <Header/>
     <div className="container">
       <Home />
     </div>
     <Footer />
   </>
  );
}

export default App;
