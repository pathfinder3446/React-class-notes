import { useState } from "react";

const Form = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleUsername = (e) => {
      setUsername(e.target.value);
    }

    const handleSubmit = () => {
      // e.preventDefault();
      alert(`username:${username} 
      email:${email} 
      password:${password}`);
    }

  return (
    <div>
      <form style={{margin:'10rem'}} onSubmit={handleSubmit} >

      <div className="mb-3">
          <label htmlfor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value ={username}
            onChange={handleUsername}
          />
        </div>

        <div className="mb-3">
          <label htmlfor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlfor="password" class="form-label">
            Password
          </label>
          <input 
          type="password" 
          className="form-control" 
          id="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <button 
        type="submit" 
        className="btn btn-primary"
        // onSubmit={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
