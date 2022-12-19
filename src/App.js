import { useState, useEffect, useForm } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';

import logo from './logo.svg';
import './App.css';


function App() {
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    
    useEffect(() => {
            callApi('Guard');
        }, [])

        function callApi(s)
        {
            fetch("https://www.omdbapi.com/?i=tt3896198&apikey=71e43512&s=" + s)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                    
                    console.log(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
                )
        }

        const onHandleChange = (event) => {

            console.log(event.target.value);

            //return event.target.value;
        };
        
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
            <div>
                <input type="text" name="search" handleChange={onHandleChange}/>
                <ul>
                    {items.Search.map(item => (
                        <li>
                            {item.Title} {item.Year}
                        </li>
                    ))}
                </ul>
            </div>
            
        );
    }
}

export default App;
