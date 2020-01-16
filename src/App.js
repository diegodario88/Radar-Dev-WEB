import React from 'react';

import './App.css'
import './global.css'
import './Sidebar.css'
import './Main.css'

function App() {
  return (
    <div id="App">
      <aside>
        <strong>Register</strong>
        <form>

          <div className="input-block">
            <label htmlFor="github_username">GitHub Username:</label>
            <input name="github_username" placeholder="UserName" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Technologies Field:</label>
            <input name="techs" placeholder="Whatever you feel confident" id="techs" required />
          </div>

          <div className="input-block">
            <label htmlFor="adress">Adress:</label>
            <input name="adress" placeholder="Region or only city" id="adress" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Lat:</label>
              <input name="latitude" placeholder="latitude" id="latitude" required />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Lng:</label>
              <input name="longitude" placeholder="longitude" id="longitude" required />
            </div>
          </div>
          <button type="submit">TO THE MOON!</button>

        </form>
      </aside>
      <main>
        <ul>
          <li className='dev-item'>
            <header>
              <img src="https://avatars3.githubusercontent.com/u/25825145?s=460&v=4" alt="avatar" />
              <div className='user-info'>
                <strong>
                  Diego Dario
                </strong>
                <span>Html, CSS, JavaScript, NodeJS, Linux</span>
                <p>Ambitious trainee.</p>
                <a href="https://github.com/diegodario88">GitHub Profile</a>
              </div>
            </header>
          </li>
          <li className='dev-item'>
            <header>
              <img src="https://avatars3.githubusercontent.com/u/25825145?s=460&v=4" alt="avatar" />
              <div className='user-info'>
                <strong>
                  Diego Dario
                </strong>
                <span>Html, CSS, JavaScript, NodeJS, Linux</span>
                <p>Ambitious trainee.</p>
                <a href="https://github.com/diegodario88">GitHub Profile</a>
              </div>
            </header>
          </li>
          <li className='dev-item'>
            <header>
              <img src="https://avatars3.githubusercontent.com/u/25825145?s=460&v=4" alt="avatar" />
              <div className='user-info'>
                <strong>
                  Diego Dario
                </strong>
                <span>Html, CSS, JavaScript, NodeJS, Linux</span>
                <p>Ambitious trainee.</p>
                <a href="https://github.com/diegodario88">GitHub Profile</a>
              </div>
            </header>
          </li>
          <li className='dev-item'>
            <header>
              <img src="https://avatars3.githubusercontent.com/u/25825145?s=460&v=4" alt="avatar" />
              <div className='user-info'>
                <strong>
                  Diego Dario
                </strong>
                <span>Html, CSS, JavaScript, NodeJS, Linux</span>
                <p>Ambitious trainee.</p>
                <a href="https://github.com/diegodario88">GitHub Profile</a>
              </div>
            </header>
          </li>
        </ul>
      </main>
    </div >
  );
}

export default App
