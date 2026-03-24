import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'
import { Outlet } from 'react-router-dom'

function LayoutDefault() {

  return (
    <>
      <AppHeader></AppHeader>
      <Outlet></Outlet>
      <AppFooter></AppFooter>
    </>
  )
}

export default LayoutDefault