import React from 'react'
import '../Footer/footer.css'

function Footer() {
  return (
    <div>
    <footer className="bg-dark text-center text-white mt-5">
 
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i className="fab fa-facebook-f"></i
          ></a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i className="fab fa-twitter"></i
          ></a>
  
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i className="fab fa-google"></i
          ></a>
    
         
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i className="fab fa-instagram"></i
          ></a>
    
        
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i className="fab fa-linkedin-in"></i
          ></a>
    
        
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i className="fab fa-github"></i
          ></a>
        </section>
      </div>
    
      <div className="text-center p-3" id="footer">
        © 2022 Copyright
        <a className="text-white" href=""></a>
      </div>

    </footer></div>
  )
}

export default Footer