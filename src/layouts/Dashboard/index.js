// Dependencies
import React from 'react'

// Components
import DashboardHeader from '../../components/DashboardHeader'
import Sidebar from '../../components/Sidebar'

const DashboardLayout = ({children}) => {
  return (
    <div>
      <DashboardHeader />
      <Sidebar />
      <main>{children}</main>
    </div>
  )
}

export default DashboardLayout
