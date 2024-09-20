import React, { useEffect, useState } from 'react'
import { deleteMovies, getMovies } from '../services/api'

function MovieSummary({refreshRequired, setmovieId}) {

  const [movies, setMovies] = useState()

  function handleMovieUpdate(id){
    setmovieId(id)
  }


async function handleMovieDelete(id) {
  console.log(id)  
  let res = await deleteMovies(id)
  if (res.status > 199 && res.status< 300){
    getAllMovies()
  }
}

  async function getAllMovies() {
    let res = await getMovies()

    if (res.status > 199 && res.status < 300) {
      setMovies(res.data)
    }
    else {
      console.log("Failed")
    }
    console.log(res)
  }
  useEffect(() => {
    getAllMovies()
  }, [refreshRequired])


  return (
    <div>
      {/* <h1>Movie summary</h1> */}
      <div className='container-fluid m-2 p-2' >
        <div className='row rounded shadow p-4'>
        <h2>Book List</h2>
              <table class="table table-striped m-2 text-center">
                <tr>
                <th>Image</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Year</th>
                  <th>Language</th>
                  <th>Action</th>
                </tr>
                <tbody>
                  {movies && movies.map((m,i)=>(
                    <tr>
                      <td><img src={m.poster} alt=""  width={"80px"} height={"100px"}/></td>
                      <td>{m.title}</td>
                      <td>{m.director}</td>
                      <td>{m.year}</td>
                      <td>{m.language}</td> 
                      <td><button className='btn btn-warning m-2' onClick={()=> handleMovieUpdate(m.id)}>Edit</button>
                      <button className='btn btn-danger' onClick={()=> handleMovieDelete(m.id)}>Delete</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        
      </div>
  )
}

export default MovieSummary
