import React, { useState, useEffect } from 'react';
import './styles/main.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`app ${isLoaded ? 'loaded' : ''}`}>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-content">
          <h1 className="hero-title">Work Report FY25:Q4</h1>
          <p className="hero-subtitle">Technical Excellence & Performance Overview</p>
          <div className="hero-date">Report Generated: {currentDate}</div>
        </div>
      </div>

      <div className="container">
        {/* Profile Section */}
        <div className="profile-section card-modern">
          <div className="profile-header">
            <img
              src={process.env.PUBLIC_URL + '/SIVA KIRAN DASARI-passport size photo.jpg'}
              alt="Siva Kiran Dasari"
              className="profile-pic"
            />
            <div className="profile-details">
              <h2>Siva Kiran Dasari</h2>
              <div className="role-badge">Technical Systems Engineer</div>
              <div className="team-info">
                <span className="team-label">Team:</span>
                <span className="team-name">L1 | CD Toolchain</span>
              </div>
            </div>
          </div>
        </div>
        {/* Incident Information Section */}
        <div className="incident-section card-modern">
          <div className="section-header">
            <h3>📊 Performance Metrics</h3>
            <div className="section-subtitle">01/02/2025 - 26/07/2025</div>
          </div>
          <div className="incident-landscape-wrapper">
            <div className="incident-metrics">
              <div className="metric">
                <div className="metric-icon">📥</div>
                <div className="metric-content">
                  <span className="metric-label">Total Incidents Accepted</span>
                  <span className="metric-value">50</span>
                </div>
              </div>
              <div className="metric">
                <div className="metric-icon">↗️</div>
                <div className="metric-content">
                  <span className="metric-label">Incident Routed to L2 or relevant team</span>
                  <span className="metric-value">15</span>
                </div>
              </div>
              <div className="metric">
                <div className="metric-icon">✅</div>
                <div className="metric-content">
                  <span className="metric-label">Total Incidents Resolved</span>
                  <span className="metric-value">36</span>
                </div>
              </div>
              <div className="metric">
                <div className="metric-icon">📋</div>
                <div className="metric-content">
                  <span className="metric-label">Total Surveys Received</span>
                  <span className="metric-value">13</span>
                </div>
              </div>
            </div>
            <div className="incident-ratings">
              <div className="rating-item excellent">
                <div className="rating-icon">⭐</div>
                <div className="rating-content">
                  <span className="metric-label">Overall Rating: 5</span>
                  <span className="metric-value">10</span>
                </div>
              </div>
              <div className="rating-item good">
                <div className="rating-icon">👍</div>
                <div className="rating-content">
                  <span className="metric-label">Overall Rating: 4</span>
                  <span className="metric-value">2</span>
                </div>
              </div>
              <div className="rating-item poor">
                <div className="rating-icon">⚠️</div>
                <div className="rating-content">
                  <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                      <span className="metric-label">Overall Rating: 1</span>
                      <span className="metric-value">1</span>
                    </div>
                    <span className="note">User corrected to Rating: 5 ✨</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning and Certification Section */}
        <div className="certification-section card-modern">
          <div className="section-header">
            <h3>🎓 Learning & Certifications</h3>
            <div className="section-subtitle">Professional Development Achievements</div>
          </div>
          <div className="certification-list">
            <div className="certification-item cisco">
              <div className="cert-icon">🛡️</div>
              <div className="cert-content">
                <span className="certification-name">Cisco Security Space Program - Flight Academy!</span>
                <div className="cert-badge cisco-badge">Cisco Certified</div>
              </div>
            </div>
            <div className="certification-item ai">
              <div className="cert-icon">🤖</div>
              <div className="cert-content">
                <span className="certification-name">Generative Artificial Intelligence - Green Belt</span>
                <div className="cert-badge ai-badge">AI Certified</div>
              </div>
            </div>
            <div className="certification-item jenkins">
              <div className="cert-icon">⚙️</div>
              <div className="cert-content">
                <span className="certification-name">Jenkins: Beginner To Pro, Learn CI/CD Pipelines & Automation</span>
                <span className="udemy-badge">🎓 Udemy</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Objectives Section */}
        <div className="objectives-section card-modern">
          <div className="section-header">
            <h3>🎯 FY26:Q1 Objectives</h3>
            <div className="section-subtitle">Strategic Goals & Development Roadmap</div>
          </div>
          <div className="objectives-list">
            <div className="objective-item">
              <div className="objective-number">1</div>
              <div className="objective-content">
                <span className="objective-title">🚀 Platform Expertise Development</span>
                <span className="objective-description">Learn and gain proficiency in APPDB, UIPath, CDA, Solis, and Qwiet platforms to enhance technical capabilities</span>
                <div className="objective-tags">
                  <span className="tag">APPDB</span>
                  <span className="tag">UIPath</span>
                  <span className="tag">CDA</span>
                  <span className="tag">Solis</span>
                  <span className="tag">Qwiet</span>
                </div>
              </div>
            </div>
            <div className="objective-item">
              <div className="objective-number">2</div>
              <div className="objective-content">
                <span className="objective-title">🤖 Automation Contributions</span>
                <span className="objective-description">Contribute to automation initiatives and process improvements within the team</span>
                <div className="objective-tags">
                  <span className="tag">Process Automation</span>
                  <span className="tag">Efficiency</span>
                </div>
              </div>
            </div>
            <div className="objective-item">
              <div className="objective-number">3</div>
              <div className="objective-content">
                <span className="objective-title">📚 Knowledge Base Articles</span>
                <span className="objective-description">Create comprehensive KB articles to document solutions and share knowledge with the team</span>
                <div className="objective-tags">
                  <span className="tag">Documentation</span>
                  <span className="tag">Knowledge Sharing</span>
                </div>
              </div>
            </div>
            <div className="objective-item">
              <div className="objective-number">4</div>
              <div className="objective-content">
                <span className="objective-title">📜 Professional Certification</span>
                <span className="objective-description">Complete and obtain a relevant professional certification to advance technical expertise</span>
                <div className="objective-tags">
                  <span className="tag">Professional Growth</span>
                </div>
              </div>
            </div>
            <div className="objective-item">
              <div className="objective-number">5</div>
              <div className="objective-content">
                <span className="objective-title">🌟 Participate in Technical Events</span>
                <span className="objective-description">Actively participate in technical events, hackathons, and CSR activities to enhance professional network and contribute to community initiatives</span>
                <div className="objective-tags">
                  <span className="tag">Hackathons</span>
                  <span className="tag">CSR</span>
                  <span className="tag">Networking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;