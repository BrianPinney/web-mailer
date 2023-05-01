import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function AddCustomer({setCustomer}){
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [streetNum, setstreetNum] = useState("")
    const [streetName, setStreetName] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zip, setZip] = useState("")
    const navigate = useNavigate()

    const handleAddCustomer = (e) => {
        e.preventDefault()

        fetch("https:/api-mailer-bp.web.app/customers", {
        method: "POST",
        headers: { "Content-Type": "application/jason"},
        body: JSON.stringify({firstName, lastName, streetName, streetNum, state, city, zip})
    })
        .then((resp) => resp.json())
        .then((data) => {
            if (data.message) {
                alert(data.message)
                return
            }
            setCustomer(data)
            navigate("/")
        })
        .catch(alert)
    }
    return (
        <>
        <form onSubmit={handleAddCustomer}>
        <h2>Add Customer</h2>
        <label htmlFor="firstName">First Name
        <input 
            type="text"
            value={firstName}
            onChange={(e) => {
                setFirstName(e.target.value)}
            }
        />
        </label>
        <label htmlFor="lastName">Last Name
        <input 
            type="text"
            value={lastName}
            onChange={(e) => {
                setLastName(e.target.value)}
            }
        />
        </label>
        <label htmlFor="streetNum">Street Number
        <input 
            type="text"
            value={streetNum}
            onChange={(e) => {
                setstreetNum(e.target.value)}
            }
        />
        </label>
        <label htmlFor="streetName">First Name
        <input 
            type="text"
            value={streetName}
            onChange={(e) => {
                setStreetName(e.target.value)}
            }
        />
        </label>
        
        <label htmlFor="city">City
        <input 
            type="text"
            value={city}
            onChange={(e) => {
                setCity(e.target.value)}
            }
        />
        </label>
        
        <label htmlFor="state">State
        <input 
            type="text"
            value={state}
            onChange={(e) => {
                setState(e.target.value)}
            }
        />
        </label>
       
        <label htmlFor="zip">Zip Code
        <input 
            type="text"
            value={zip}
            onChange={(e) => {
                setZip(e.target.value)}
            }
        />
        </label>
        <input type="submit" value="Add Customer" />
        </form> 
        </>
    )
}
