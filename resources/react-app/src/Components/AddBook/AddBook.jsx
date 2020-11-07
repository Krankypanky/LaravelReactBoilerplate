import React, { useState } from "react";
import axios from "axios";
import config from "./../../config/config.default";
import Loading from "./../Loading/Loading";



import "./AddBook.scss";
import { useHistory } from 'react-router-dom';

const AddBook = () => {

    const [newBook, setNewBook] = useState({
        isbn: "",
        title: "",
        subtitle: "",
        author: "",
        published: "",
        publisher: "",
        pages: "",
        description: "",
        image: "",
        price: "",
        website: ""
    });

    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false);

    const history = useHistory()

    function handleChange(e) {

        const key = e.target.name;

        if (key === "image") {
            setNewBook({
                ...newBook,
                [key]: e.target.files[0]
            });

        } else {
            setNewBook({
                ...newBook,
                [key]: e.target.value
            });
        }

    }


    function handleSubmit(event) {
        setLoading(true);
        setErrors(null);

        event.preventDefault();

        const axiosConfig = {
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        }

        let formData = new FormData();
        for ( var key in newBook ) {
            formData.append(key, newBook[key]);
        }

        axios.post(config.API_URL + "/api/book/create", formData, axiosConfig)
            .then(response => {

               window.location.href = "/";
            })
            .catch(err => {
               
                if(err.response.data && err.response.data.errors){
                    setErrors(err.response.data.errors)
                }
            })
            .finally(() => setLoading(false))

        console.log(newBook);
    }

    console.log(newBook);

    return <div className="add-form-wrapper">
        <Loading loading={loading}/>
        <h1> Neues Buch erstellen </h1>
        <hr />
        <form onSubmit={handleSubmit}>
            <fieldset>
                <div>
                    <label htmlFor="isbn">isbn</label>
                    <input onChange={handleChange} id="isbn" name="isbn" type="number" value={newBook.isbn || ""} required />
                </div>
                <div>
                    <label htmlFor="title">title</label>
                    <input onChange={handleChange} required id="title" name="title" type="text" value={newBook.title} />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label htmlFor="subtitle">subtitle</label>
                    <input onChange={handleChange} required id="subtitle" name="subtitle" type="text" value={newBook.subtitle} />
                </div>
                <div>
                    <label htmlFor="author">author</label>
                    <input onChange={handleChange} required id="author" name="author" type="text" value={newBook.author} />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label htmlFor="published">published</label>
                    <input onChange={handleChange} required id="published" name="published" type="datetime-local" value={newBook.published} />
                </div>
                <div>
                    <label htmlFor="publisher">publisher</label>
                    <input onChange={handleChange} required id="publisher" name="publisher" type="text" value={newBook.publisher} />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label htmlFor="pages">pages</label>
                    <input onChange={handleChange} required id="pages" name="pages" type="number" value={newBook.pages} />
                </div>
                <div>
                    <label htmlFor="description">description</label>
                    <textarea onChange={handleChange} required id="description" name="description" value={newBook.description} />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label htmlFor="price">price</label>
                    <input onChange={handleChange} required id="price" name="price" type="number" value={newBook.price} />
                </div>
                <div>
                    <label htmlFor="website">website</label>
                    <input onChange={handleChange} required id="website" name="website" type="url" value={newBook.website} />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label htmlFor="image">image</label>
                    <input type="file" onChange={handleChange} required id="image" name="image" />
                </div>
            </fieldset>
            <div>
                <button type="submit">Buch erstellen</button>
            </div>

            <ul>
                {errors && Object.keys(errors).map(key => {
                    return <li key={key}>
                        {errors[key].map(error => <p key={error}>{error}</p>)}
                    </li>
                })}
            </ul>
        </form>

    </div>
}

export default AddBook;