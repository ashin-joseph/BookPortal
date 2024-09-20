import axios from "axios"

const BASE_URL = "http://127.0.0.1:8000/MovieApp/movies/"


export async function getMovies(){
    return await axios.get(BASE_URL)
}

export async function addMovies(data){
    console.log(data);
    let headers = {
        'Content-Type': 'multipart/form-data'
    }
    return await axios.post(BASE_URL, data, {headers:headers})
}

export async function detailMovies(id){
    return await axios.get(BASE_URL+`${id}/`)
}

export async function updateMovies(id, data){
    let headers = {
        'Content-Type': 'multipart/form-data'
    }
    return await axios.put(BASE_URL+`${id}/`,data, {headers:headers})
}

export async function deleteMovies(id){
    return await axios.delete(BASE_URL+ `${id}/`)
}

