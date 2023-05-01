import { useEffect } from "react";
import AddCustomer from "./AddCustomer";

export default function AppPortal(customers, setCustomers){

useEffect(()=> {
    fetch("https://api-mailer-bp.web.app/customers")
    .then(resp => resp.json())
    .then(setCustomers)
    .catch(alert)
}, [customers])

    return (
        <>
        <section>
        <h1>Portal page</h1>
        <AddCustomer />
        </section>
        <div>
            {
                !customers
                ? "Loading..."
                : customers.map(
                    (customer) => (
                        <div key={customer.id}>
                            <h2>{customer.firstName}</h2>
                            <h2>{customer.lastName}</h2>
                            <h2>{customer.streetNum}</h2>
                            <h2>{customer.streetName}</h2>
                            <h2>{customer.city}</h2>
                            <h2>{customer.state}</h2>
                            <h2>{customer.zip}</h2>
                        </div>
                    )
                )
            }
        </div>
        </>
    )
}