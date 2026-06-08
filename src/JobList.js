function JobLists({jobs =[]})
{
    return (
        <div className="section">
            <h2>Jobs ({jobs.length})</h2>
            {jobs.map(job => (
                <div key={job.slug} className="job-card">
                    <h3>{job.title}</h3>
                    <p>{job.company_name}</p>
                    <p>{job.location}</p>
                    <a href={job.url} target="_blank" rel="noopener noreferrer">
                        Apply Now
                    </a>
                </div>
            ))}
        </div>

    );
}

export default JobLists;