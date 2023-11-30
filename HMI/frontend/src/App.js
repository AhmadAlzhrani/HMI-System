import React, { useEffect, useState } from "react";
import { MdRamenDining } from "react-icons/md";
import Steppers from "./stpper";

function App() {
  // later funcionality
  /*const SideBar = () =>{
        return(
            <div>
                <div className = 'logo'>
                    <img style={{width:'10%', height: '10%'} } 
                    src = 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403' 
                    alt = 'cato'/>
                </div>
                <div className = 'ingr'>
                    {(typeof backendData.ingredients === 'undefined') ?  (<p>loading..</p>):(
                        backendData.ingredients.map((user, index) => ( 
                            <ul>
                                <li key={index}>{user}</li>
                            </ul>
                        ))
                    )}
                </div>
                <div>
                    <CustomButton text="Send" onClick={sendData} />
                </div>
            </div>
        )
    }*/

  // Requesting the ingredients data from the backend
  const [backendData, setBackendData] = useState([{}]);
  useEffect(() => {
    fetch("/data", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setBackendData(data));
  }, []);

  // Sending the order code to the backend
  const sendData = async () => {
    const dataToSend = { key: "101010" };

    await fetch("/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToSend),
    });
  };

  return (
    <>
      <div className="">
        <Steppers />
      </div>
    </>
  );
}

function CustomButton(props) {
  return (
    <button
      className="bg-orange-400 text-white font-medium px-4 py-1 rounded hover:bg-orange-500 disabled:bg-gray-400"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

function SideBar() {
  return (
    <div className="fixed top-0 left-0 h-screen m-0 flex flex-col bg-gray-600 text-white shadow-lg w-80">
      <SideBarIcon icon={<MdRamenDining size="30" />} />
    </div>
  );
}

function SideBarIcon({ icon }) {
  return <div className="sidebar-icon">{icon}</div>;
}

/*function VerticalStepper() {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevStep) => prevStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevStep) => prevStep - 1);
    };

    return (
        <div className="vertical-stepper">
            <div className="stepper-header">
                <h2>Vertical Stepper</h2>
            </div>
            <div className="stepper-content">
                <div className={`step ${activeStep === 0 ? 'active' : ''}`}>
                    <h3>Step 1</h3>
                    <p>Step 1 content goes here</p>
                </div>
                <div className={`step ${activeStep === 1 ? 'active' : ''}`}>
                    <h3>Step 2</h3>
                    <p>Step 2 content goes here</p>
                </div>
                <div className={`step ${activeStep === 2 ? 'active' : ''} bg-gray-100`}>
                    <h3>Step 3</h3>
                    <p>Step 3 content goes here</p>
                </div>
            </div>
            <div className="stepper-actions">
                <button className="bg-orange-400 text-white font-medium px-4 py-1 rounded hover:bg-orange-500 disabled:bg-gray-400 disabled:cursor-not-allowed" disabled={activeStep === 0} onClick={handleBack}>
                    Back
                </button>
                <button className="bg-orange-400 text-white font-medium px-4 py-1 rounded hover:bg-orange-500 disabled:bg-gray-400 disabled:cursor-not-allowed" disabled={activeStep === 2} onClick={handleNext}>
                    Next
                </button>
            </div>
        </div>
    );
}*/

export default App;
