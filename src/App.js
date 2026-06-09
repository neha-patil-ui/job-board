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

  const [search, setSearch]= useState("");
  const filteredJobs= jobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );


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
        <input 
            type="text"
            placeholder="Search jobs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"/>
      </header>

      {isLoading ? (
        <p className="loading"> Loading Jobs..</p>
      ) :(
        <JobLists jobs={filteredJobs}/>
      )}
    </div>
  );
}

export default App;
