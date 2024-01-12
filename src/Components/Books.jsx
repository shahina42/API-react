import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Books() {

    const [Api, setApi] = useState([]);

    useEffect(() => {
        axios.get('https://reactnd-books-api.udacity.com/books', {
            headers: { 'Authorization': 'whatever-you-want' }
        })
        .then((response) => {
            const data = response.data.books;
            console.log(response)
            setApi(data);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    }, []);



    return (
        <div className='main'>
          {Api.map((item) => (
            <div className='container' key={item.id}>
              <div className='subcontainer'>
                <h3>{item.title}</h3>
                <img src={item.imageLinks.smallThumbnail} alt={item.title} />
                <div>{item.authors}</div>
              </div>

              <article>{item.description}</article>
              <hr />
            </div>
          ))}
        </div>
      );

}

export default Books