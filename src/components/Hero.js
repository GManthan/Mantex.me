import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Manthan Gourshete</span>
          </h1>
          <h2 className="hero-subtitle">Electronics & AI Engineer</h2>
          <p className="hero-description">
            Building the future with embedded systems, AI/ML, and innovative robotics solutions. 
            Passionate about creating technology that makes a difference.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </button>
            <button 
              className="btn btn-resume"
              onClick={() => {
                // Create a download link for resume
                const link = document.createElement('a');
                link.href = '/resume-manthan-gourshete.pdf';
                link.download = 'Manthan_Gourshete_Resume.pdf';
                link.click();
              }}
            >
              📄 Download Resume
            </button>
          </div>
          
          <div className="hero-social-links">
            <a href="https://www.linkedin.com/in/manthan-gourshete/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z"/>
              </svg>
            </a>
            
            <a href="https://github.com/GManthan" target="_blank" rel="noopener noreferrer" className="social-icon github">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.626 0 12 0Z"/>
              </svg>
            </a>
            
            <a href="https://x.com/GManthan23" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            
            <a href="https://g.dev/gmanthan" target="_blank" rel="noopener noreferrer" className="social-icon google">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="developer-character">
            <div className="character-container">
              <div className="laptop">
                <div className="laptop-screen">
                  <div className="code-lines">
                    <div className="code-line"></div>
                    <div className="code-line"></div>
                    <div className="code-line"></div>
                  </div>
                </div>
                <div className="laptop-base"></div>
              </div>
              <div className="character">
                <div className="head">
                  <div className="glasses">
                    <div className="lens left"></div>
                    <div className="lens right"></div>
                    <div className="bridge"></div>
                  </div>
                </div>
                <div className="body"></div>
                <div className="arms">
                  <div className="arm left"></div>
                  <div className="arm right"></div>
                </div>
              </div>
              <div className="tech-elements">
                <div className="ai-chip">AI</div>
                <div className="circuit-board">
                  <div className="circuit-line"></div>
                  <div className="circuit-line"></div>
                </div>
                <div className="robot-icon">🤖</div>
                <div className="microchip">⚡</div>
                <div className="python-logo">🐍</div>
                <div className="react-logo">⚛️</div>
                <div className="iot-sensor">📡</div>
                <div className="arduino-board">🔧</div>
                <div className="ml-brain">🧠</div>
                <div className="code-bracket">{`{}`}</div>
                <div className="wifi-signal">📶</div>
                <div className="gear-icon">⚙️</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;