import React from 'react';

function Login() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Enter your email" required style={{ margin: '10px' }} />
        <br />
        <input type="password" placeholder="Enter your password" required style={{ margin: '10px' }} />
        <br />
        <button type="submit" style={{ marginTop: '20px', padding: '10px 20px' }}>Login</button>
      </form>
    </div>
  );
}

export default Login;
