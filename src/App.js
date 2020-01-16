import React, { useState, useEffect } from 'react';
import Api from './services/api'

import './App.css'
import './global.css'
import './Sidebar.css'
import './Main.css'
import DevItem from './components/dev-item/dev-item.component'
import DevForm from './components/dev-form/dev-form.component'

function App() {

  const [devs, setDevs] = useState([])

  useEffect(() => {
    async function loadDevs() {
      const response = await Api.get('/api/v1/devs')
      setDevs(response.data)
    }

    loadDevs()

  }, [])

  async function handleAddDev(data) {

    const response = await Api.post('/api/v1/devs', data)

    setDevs([...devs, response.data])

  }

  return (
    <div id="App">

      <aside>
        <strong>Register</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map(dev => (

            <DevItem key={dev._id} dev={dev} />

          ))}

        </ul>
      </main>

    </div >
  );
}

export default App
