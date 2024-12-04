import React, { useState } from 'react';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      {isLoading && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
          }}
        >
          <span>Loading...</span>
        </div>
      )}
      <iframe
        src="https://aitrip.tubeguruji.com/"
        style={{ width: '100%', height: '100%' }}
        onLoad={handleLoad}
        frameBorder="0"
        title="AI Trip"
      ></iframe>
    </div>
  );
};

export default App;

