import  Navbar  from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Main from "./components/ItemListContainer/Main/Main";
import Rutas from "./routes/Rutas";
import Layout from "./components/Layout/Layout";
import GlobalStateContext from "./context/GlobalStateContext";
function App() {
    return(

        <GlobalStateContext>
            <Rutas/>
        </GlobalStateContext>

   
    ) ;
 
}


export default App;

