// Dependencies
import React from 'react'
import { Switch } from 'react-router-dom'
import AppRoute from './AppRoute'

// Pages
import Home from '../containers/public/Home'
import DashboardHome from '../containers/dashboard/Home'

// Layouts
import DashboardLayout from '../layouts/Dashboard'
import MainLayout from '../layouts/Main'

const Router = () =>
  <Switch>
    <AppRoute path='/dashboard' component={DashboardHome} layout={DashboardLayout}/>
    <AppRoute path='/' component={Home} layout={MainLayout}/>
  </Switch>

export default Router
