import React, { useEffect, useState } from 'react'
import { addMovies, detailMovies, updateMovies} from '../services/api'

function MovieCreate({setRefreshRequired, movieId}) {

  const [movie, SetMovie]= useState({ title: '', year: '', director: '', language: '', poster: ''})

  useEffect(()=>{
    getMoviedata(movieId)
  },[movieId])

  async function getMoviedata(movieId) {
    let result = await detailMovies(movieId)
    if (result.status>199 && result.status<300){
      SetMovie(result.data)
    }
    console.log(result.data)
}

  async function handleSubmit(event){ 
    event.preventDefault()
    if (movieId){
      let res = await updateMovies(movieId, movie)
      console.log(res)
      setRefreshRequired('reload')
    }
    else {
      let res = await addMovies(movie)
      console.log(res)
      setRefreshRequired('reload')
    }
    // console.log(res)
    // console.log(movie)

  }
  


  return (
    <div>
      {/* <h1>Movie create</h1> */}
      <div className='cointainer'>
        <div className='row'>
          <div className='col border-3 rounded shadow p-4 px-5'>
            {movieId? <h2>Update Book's</h2>: <h2>Add New Book</h2>}
            <form action="#" onSubmit={handleSubmit}>
              <div className='mb-3 d-flex gap-1'>
                <div className='w-50'>
                  <label htmlFor="">Title</label>
                  <input type="text" placeholder='title' value={movie.title} className='form-control' onChange={(e)=>SetMovie({...movie, title:e.target.value})}/>
                </div>
                <div className='w-50'>
                  <label htmlFor="">Year</label>
                  <input type="text" placeholder='year' value={movie.year} className='form-control' onChange={(e)=>SetMovie({...movie, year:e.target.value})}/>
                </div>

              </div>
              <div className='mb-3 d-flex gap-1'>
              <div className='w-50'>
                  <label htmlFor="">Author</label>
                  <input type="text" placeholder='Director' value={movie.director} className='form-control' onChange={(e)=>SetMovie({...movie, director:e.target.value})}/>
                </div>
                <div className='w-50'>
                  <label htmlFor="">Language</label>
                  <input type="text" placeholder='Language' value={movie.language} className='form-control' onChange={(e)=>SetMovie({...movie, language:e.target.value})} />
                </div>
              </div>

              <div className='mb-3 d-flex gap-1'>
              <div className='w-50'>
                  <label htmlFor="">Image</label>
                  <input type="file" placeholder='Poster' className='form-control' onChange={(e)=>SetMovie({...movie, poster:e.target.files[0] })}/>
                </div>
                <div className='w-50'>  
                  {movieId? <button type='submit' className='btn btn-warning m-4'>Update</button>:<button type='submit' className='btn btn-success m-4'>Submit</button>}
                  
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCreate
