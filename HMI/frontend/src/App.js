import React, {useEffect, useState} from 'react'
import {FaPencilAlt} from 'react-icons/fa'

function App() {

    // Requesting the ingredients data from the backend
    const [backendData, setbackendData] = useState([{}])
    useEffect(() => {
        fetch('/data',{
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => setbackendData(data))
    }, [])

    // Sending the order code to the backend
    const sendData = async () => {
        const dataToSend = { key: '101010' };
    
        await fetch('/order', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(dataToSend),
        });
    };

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

    return(
        <div className='flex'>
            <SideBar/>
        </div>

    )
}

function CustomButton(props) {
    return <button className='bg-orange-400 text-white font-medium px-4 py-1 rounded hover:bg-orange-500' onClick={props.onClick}>{props.text}</button>;
}

function SideBar(){
    return(
        <div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-600 text-white shadow-lg'>
           <SideBarIcon icon={<FaPencilAlt size='30'/>}/>
        </div>

    )
}

function SideBarIcon({icon}) {
    return(
        <div className='sidebar-icon'>
            {icon}
        </div>
    )
}


export default App;