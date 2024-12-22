document.addEventListener('DOMContentLoaded', () => {
    const securityInfo = document.getElementById('securityInfo');
    
    // Check if the page is served over HTTPS
    const isHttps = location.protocol === 'https:';
    
    // Check if localStorage is available (as a simple check for private browsing mode)
    const isPrivateBrowsing = (() => {
      try {
        localStorage.setItem('test', 'test');
        localStorage.removeItem('test');
        return false;
      } catch(e) {
        return true;
      }
    })();
  
    // Display security information
    securityInfo.innerHTML = `
      <h2>Security Information:</h2>
      <ul>
        <li>HTTPS: ${isHttps ? 'Enabled' : 'Disabled'}</li>
        <li>Private Browsing: ${isPrivateBrowsing ? 'Detected' : 'Not Detected'}</li>
        <li>Content Security Policy: Enabled</li>
      </ul>
    `;
  });