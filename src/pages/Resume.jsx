// does this need to be imported on every file?
import React from 'react';


function Resume() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'public/Untitled document.pdf';
        link.download = 'Resume.pdf';
        link.click();
    };

    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1>Resume</h1>

                <ul className="text-left custom-list">
                    <h3>Front End Proficiencies:</h3>
                    <li>HTML</li>
                    <li>Javascript</li>
                    <li>CSS</li>
                    <li>JQuery</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
                <ul className="text-left custom-list">
                    <h3>Back End Proficiencies:</h3>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>APIs</li>
                </ul>
                <button onClick={handleDownload} className='resume-btn'>
                    Resume Download
                </button>
            </div>

        </div>
    );
}

export default Resume;