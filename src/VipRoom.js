import { useEffect } from 'react';

const VipRoom = () => {
    // imagination time: there is some code here that connects to the Firebase database using the onValue listener so every time something is removed or added to the database, our component is updated accordingly
    useEffect(() => {
        console.log("we've connected to firebase (in our imagination");

        return () => {
            console.log('disconnected from firebase');
        }
    }, [])

    return (
        <div>
            <h2>Welcome to the secret VIP room</h2>
        </div>
    )
}

export default VipRoom;