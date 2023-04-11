import React from 'react';
import './App.css';
import {getPictureOfTheDay} from "./api";

function App() {
    const [apodDetails, setApodDetails] = React.useState(null);



    //const [count, setCount] = React.useState(0);
    //takes two arguments, effect call back and dependencies the empty array will make the effect run as soon
    //as the page loads
    React.useEffect(() => {
        const getPicture = async () =>
        {
            const respUser = await getPictureOfTheDay();
            setApodDetails(respUser)
        }
        getPicture()

       /* if (apodDetails === null)
        {
            return( <div> Loading Full Screen</div>)
        }*/
    }, []);

    console.log("APOD DEETS", apodDetails);
  /*  React.useEffect(() => {

        console.log("Use Effect")

    }, [count]);
*/
  return (
    <div className="App">
      <h1>NASA Astronomy Picture Of The Day</h1>

        <>
            {
                // if the details are null display the message if not show the image
                apodDetails ?  <img src={apodDetails.url}/> : <p>Loading</p>
            }
            <div>
                {apodDetails.copyright}
            </div>
        </>

    </div>
  );
}

export default App;
