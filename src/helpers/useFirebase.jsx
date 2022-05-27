import { collection,getDocs,getDoc,doc,addDoc,updateDoc} from "firebase/firestore";
import { db } from '../service/firebase';
import { useState,useContext } from "react";
import { GlobalContext  } from "../context/GlobalStateContext";


const useFirebase = () => {

  const [productos,setProductos] = useState([]);
  const [producto, setProducto] = useState({});
  const {setLoading} = useContext(GlobalContext);

 
  const fetchGenerateTicket =  async ({datos}) => {
    setLoading(true)
    try {
        const col = collection(db,"ordenes")
        const order =  await addDoc(col,datos)
        setLoading(false)
        console.log(order.id)
    } catch (error) {
        console.log(error)
    }
  };

  
  

  return {
    productos,
    producto,
 fetchGenerateTicket,
 
  };
};

export default useFirebase;