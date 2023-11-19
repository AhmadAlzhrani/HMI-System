import React, {useEffect, useState} from 'react'

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
    
    // send the code with the button
    //sendData();

    return(
        <>
        <div class = 'ingr'>
            {(typeof backendData.ingredients === 'undefined') ?  (
                <p>loading..</p>
            ):(
               backendData.ingredients.map((user, index) => ( 
                     <p key={index}>{user}</p>
                ))
            )}
        </div>
        <div class = 'sendOrder'>
            <button onClick={sendData}>Send</button>
        </div>
        <div class = 'sideBar'>alo</div>
        </>

    )
}
/*function sideBar(){
    return(
        <div class = 'sideBar'>
            <div class = 'logo'>
                <img src = 'https://www.flaticon.com/svg/static/icons/svg/2991/2991144.svg' alt = 'logo'/>
            </div>
            <div class = 'menu'>
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Order</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}*/

export default App;