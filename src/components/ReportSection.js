import React from 'react';

const ReportSection = ({ title, content }) => {
    return (
        <div className="report-section">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
};

export default ReportSection;