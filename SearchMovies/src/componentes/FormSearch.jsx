import { useState, useContext } from "react";
import { DataContext } from "../context/DataContext";

const FormSearch = () => {
    const [title, setTitle] = useState("");
    const {setQuery, error} = useContext(DataContext);

    //const {data} = useFetch("&s=troya");

    const handleSubmit = e => {
        e.preventDefault();
        setQuery(title);
        //console.log("Title: ", title);
    }

    return (
        <div className="form-search">
            <h2>Buscador De Peliculas</h2>
            <form onSubmit={ handleSubmit }>
                <input type="text" placeholder="Title Movie" onChange={e =>setTitle(e.target.value)}/>
                <input type="submit" value="Search"/>
            </form>
            { error && <p className="error">The movie doesn't exist</p>}
            
        </div>
    );
}

export default FormSearch;