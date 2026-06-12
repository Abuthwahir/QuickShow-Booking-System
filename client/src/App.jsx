import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import SeatLayout from './pages/SeatLayout'
import MyBookings from './pages/MyBookings'
import Favorite from './pages/Favorite'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer';
import Layout from './pages/admin/Layout'
import AddShow from './pages/admin/AddShow'
import ListShow from './pages/admin/ListShow'
import ListBookings from './pages/admin/ListBookings'
import DashBoard from './pages/admin/DashBoard'
import { useAppContext } from './context/AppContext'
import { SignIn } from '@clerk/clerk-react'
import Loading from './components/Loading'

const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith('/admin')
  const { user } = useAppContext();


  return (

    <>
      <Toaster />
      {!isAdminRoute && < Navbar />}
      <Routes>
        {/* USER ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/:id/:date" element={<SeatLayout />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path='/loading/:nextUrl' element={<Loading/>} />
        <Route path="/favorite" element={<Favorite />} />

        {/* ADMIN ROUTES */}
        <Route path='/favorite' element={<Favorite/>} />
        <Route path='/admin/*' element={user ? <Layout/> : (
          <div className='min-h-screen flex justify-center items-center'>
            <SignIn fallbackRedirectUrl={'/admin'} />
          </div>
        )}>

        <Route index element={<DashBoard />} />
        <Route path="add-shows" element={<AddShow />} />
        <Route path="list-shows" element={<ListShow />} />
        <Route path="list-bookings" element={<ListBookings />} />
      </Route>
    </Routes >

      {!isAdminRoute && < Footer />
}
    </>
  )
}

export default App
