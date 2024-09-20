import React, { useState } from 'react'
import MovieCreate from '../Components/MovieCreate'
import MovieSummary from '../Components/MovieSummary'
import NavBar from '../Components/NavBar'



function Index() {

  const [refreshRequired, setRefreshRequired] = useState('')

  const [movieId, setmovieId] = useState()
  
  return (
    <div>
      <h1 style={{"backgroundColor":"pink", "text-align":"center"}}>Book Portal</h1>
      <NavBar></NavBar>
      <MovieCreate setRefreshRequired={setRefreshRequired} movieId={movieId}></MovieCreate>
      <MovieSummary refreshRequired={refreshRequired} setmovieId={setmovieId}></MovieSummary>
    </div>
  )
}

export default Index
