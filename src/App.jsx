import React from 'react';
import ServiceCard from './components/serviceCard';
import './App.css'

const App = () => {

  const data = [
    {
      Title:"Web development",
      description:"Service used to create and develop websites!"
    },
    {
      Title:"Front-end web developer",
      description:"Service used to create colorful UI of  websites!"
    },{
    Title:"Backend web development",
      description:"Service used to manage servers and databases of websites!"
    }
  ]
  return (
    <div>
      <h1>Lists of services</h1>
      <hr/>
      <div className='Container'>
        {
          data.map((item,i)=>
            <ServiceCard data={item} key={i}/>
          )
        }
      </div>
      
    </div>
  );
}

export default App;
