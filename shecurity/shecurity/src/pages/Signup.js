import React from 'react';

function Signup() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Signup</h2>
      <form>
        <input type="text" placeholder="Enter your name" required style={{ margin: '10px' }} />
        <br />
        <input type="email" placeholder="Enter your email" required style={{ margin: '10px' }} />
        <br />
        <input type="password" placeholder="Enter your password" required style={{ margin: '10px' }} />
        <br />
        <button type="submit" style={{ marginTop: '20px', padding: '10px 20px' }}>Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
