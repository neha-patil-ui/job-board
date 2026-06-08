// import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import JobLists from './JobList';


// const jobs = [
//   {
//     name:'Frontend Developer',
//     company:'Google',
//     location:'Mountain View,CA'
//   }
// ];

function App() {
  const[jobs, setJobs]= useState([]);
  const [isLoading, setIsLoading]= useState(true);

useEffect(() => {
  fetch('https://www.arbeitnow.com/api/job-board-api')
      .then(res => res.json())
      .then(data => {
        console.log(data); // let's see the structure
        setJobs(data.data);
        setIsLoading(false);
      });
},[]);


  return (
    <div className="App">
      <header className="header">
        <h1>Job Board</h1>
        <p>Find your next frontend role</p>
      </header>

      {isLoading ? (
        <p style={{ textAlign :'center'}}> Loading Jobs..</p>
      ) :(
        <JobLists jobs={jobs}/>
      )}
    </div>
  );
}

export default App;
