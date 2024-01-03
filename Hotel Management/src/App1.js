import React from 'react';
import './App1.css';
import './index.css';

function App1() {
  return (
    <div className="App">
    
            <form>
                <h1>Sign in</h1>
                     <div className="pass">
                        <label className="lemail">Email:</label>
                        <input type="email" placeholder="Enter email" className="text"></input> 
                        </div>
                    
                    <br></br>
                   <div className="password">
                        <label className="lpass">Password: </label>
                        <input type="password" placeholder="Enter password" className="text"></input>
                    </div>
                   <div className="password">
                        <label className="lpass"><br></br>Confirm: </label>
                        <input type="password" placeholder="Confirm password" className="text"></input>
                    </div>
                    <br></br>
                    <br/>
                
                <div className="Forget">
                    <label><input type="checkbox"></input>Remember me</label>
                </div>
                <br/>
                <button type="submit">Sign in</button>
                <div className="Sign">
                    <p>Already have an account?<a className="a" href="#">Login</a></p>
                </div>
            </form>
        
    </div>
  );
}

export default App1;
