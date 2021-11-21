import React from 'react';
import './App.css';
import './jsontotable.jsx';
import './form.jsx'

function App() {

    
  return (
    <div className="App">
      
        
      <div className="App-navbar">
          <ul>
              <li><a href="./App.js" target="_blank" rel="noopener noreferrer">Home</a></li>
              <li><a href="" target="_blank" rel="noopener noreferrer">Patient Form</a></li>
              <li><link rel="icon" href="emergency.png" /></li>
              
          </ul>
      </div>  

      <header className="App-header">

        <div className="border">
        
          <h1>Hospital Records</h1>

          <p> Please key in your username, password and record ID: </p>  
          <div id="Form"></div>
          
          <p></p>

          <script src="src/receive.js"></script>
        </div>
        
      </header>

      <body className="App-body">        

        <div id="bottom" className="border">          

          <h1 id="data"> Patient Emergency Form Details: </h1>
          <table id="Patient_record">
            <tr>
              <th>PatientID</th>
              <th>HospitalName</th>
              <th>name</th>
              <th>address</th>
              <th>ReasonForVisit</th>
              <th>LevelOfPain</th>
            </tr>
          </table>
                  
          <p class="myPatientData"></p>
          
        
          <form className='download' id="download_data" method="get" action="https://dweb.link/ipfs/bafybeib5tczcazjdhnt3rfs45lxec2nwgwimgxtkcp6anzpn57v4xf4p6m/test_data.csv">
            <button type="submit" onclick=""> Download Patient Record </button>
          </form>
         
          <p></p>          

        </div>
        {/* <div id="downloadcsv"/> */}


      </body>
    
    </div>
    

  );


};


export default App;