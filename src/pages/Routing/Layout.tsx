import React from 'react'
import { Navbar } from '../../widgets/Navbar'
import { Outlet } from 'react-router'

export const Layout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  )
}
