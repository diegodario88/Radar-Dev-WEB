import React, { useState, useEffect } from 'react'
import './dev-form.styles.css'


function DevForm({ onSubmit }) {

    const [github_username, setGithub_Username] = useState('')
    const [techs, setTechs] = useState('')
    const [adress, setAdress] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {

                const { latitude, longitude } = position.coords

                setLatitude(latitude)
                setLongitude(longitude)

            },
            (err) => {
                console.log(err);
            },
            {
                timeout: 30000
            }
        )
    }, [])

    async function handleSubmit(e) {
        e.preventDefault()
        await onSubmit({
            github_username,
            techs,
            adress,
            loc: {
                latitude,
                longitude
            }
        })

        //set default fields
        setGithub_Username('')
        setTechs('')
        setAdress('')
    }

    return (
        <form onSubmit={handleSubmit}>

            <div className="input-block">
                <label htmlFor="github_username">GitHub Username:</label>
                <input
                    name="github_username"
                    value={github_username}
                    placeholder="UserName"
                    id="github_username"
                    onChange={e => { setGithub_Username(e.target.value) }}
                    required
                />
            </div>

            <div className="input-block">
                <label htmlFor="techs">Technologies Field:</label>
                <input
                    name="techs"
                    value={techs}
                    placeholder="Whatever you feel confident"
                    id="techs"
                    onChange={e => { setTechs(e.target.value) }}
                    required
                />
            </div>

            <div className="input-block">
                <label htmlFor="adress">Adress:</label>
                <input
                    name="adress"
                    value={adress}
                    placeholder="Region or only city"
                    onChange={e => { setAdress(e.target.value) }}
                    id="adress"
                />
            </div>

            <div className="input-group">
                <div className="input-block">
                    <label htmlFor="latitude">Lat:</label>
                    <input
                        type="number" name="latitude"
                        placeholder="latitude" id="latitude"
                        value={latitude}
                        onChange={e => { setLatitude(e.target.value) }}
                    />
                </div>
                <div className="input-block">
                    <label htmlFor="longitude">Lng:</label>
                    <input
                        type="number" name="longitude"
                        placeholder="longitude" id="longitude"
                        value={longitude}
                        onChange={e => { setLongitude(e.target.value) }}
                    />
                </div>
            </div>

            <button type="submit">TO THE MOON!</button>

        </form>
    )
}

export default DevForm