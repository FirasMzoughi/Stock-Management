import React, { useState } from 'react';
import './Login.css';


const LoginForm = () => {
  const [form, setForm] = useState({
    emailOrPhone: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(form);
  };

  return (
    <div className="container">
      
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>

        <label htmlFor="emailOrPhone">Email</label>
        <input
          type="text"
          id="emailOrPhone"
          name="emailOrPhone"
          value={form.emailOrPhone}
          onChange={handleChange}
          required
        />
        <small></small>

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
        

        
      </form>
    </div>
  );
};

export default LoginForm;
