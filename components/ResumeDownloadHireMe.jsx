// components/ResumeDownloadHireMe.jsx
import React from 'react';

const ResumeDownloadHireMe = () => {
    const handleDownloadResume = () => {
        // Replace with the actual path to your resume file
        const resumeUrl = '/path/to/your/resume.pdf';
        window.open(resumeUrl, '_blank');
    };

    const handleHireMe = () => {
        // Replace with the actual link to your hire me page or email
        const hireMeUrl = 'mailto:your-email@example.com';
        window.location.href = hireMeUrl;
    };

    return (
        <div className="flex flex-col items-center justify-center space-y-4 mt-8">
            <button
                onClick={handleDownloadResume}
                className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg transform transition-transform hover:scale-105 hover:bg-blue-600"
            >
                Download CV
            </button>
            <button
                onClick={handleHireMe}
                className="bg-green-500 text-white px-6 py-3 rounded-full shadow-lg transform transition-transform hover:scale-105 hover:bg-green-600"
            >
                Hire Me
            </button>
        </div>
    );
};

export default ResumeDownloadHireMe;