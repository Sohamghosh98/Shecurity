import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    // Request location access
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => toast.success('Location access granted'),
        () => toast.error('Location access denied')
      );
    }

    // Request microphone access
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(() => toast.success('Microphone access granted'))
      .catch(() => toast.error('Microphone access denied'));
  }, []);

  const handleHelpClick = () => {
    navigate('/contacts'); // Navigate to the Contacts page
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <header style={{ backgroundColor: 'red', padding: '10px', color: 'white' }}>
        <h1>SHEcurity</h1>
      </header>
      <div style={{ marginTop: '50px' }}>
        <button
          onClick={handleHelpClick}
          style={{
            backgroundColor: 'red',
            color: 'white',
            borderRadius: '50%',
            width: '150px',
            height: '150px',
            border: 'none',
            fontSize: '20px',
            marginBottom: '20px',
          }}
        >
          HELP
        </button>
        <br />
        <button
          style={{
            backgroundColor: 'red',
            color: 'white',
            borderRadius: '50%',
            width: '70px',
            height: '70px',
            border: 'none',
            fontSize: '16px',
          }}
        >
          🎤
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Home;
