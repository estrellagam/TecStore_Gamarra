import  Navbar  from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Main from "./components/ItemListContainer/Main/Main";
import Rutas from "./routes/Rutas";
function App() {
    return(<div><div><Navbar/></div> 
    <div><main style={{  paddingTop: '53px'}}>
       <Main/>
    <Rutas/>  
        </main></div>
    <div><Footer/></div></div>

   
    ) ;
 
}


export default App;

