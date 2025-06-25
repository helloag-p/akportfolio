import { Outlet, useNavigation } from 'react-router-dom'
import { Navbar } from './Navbar'
import Footer from './Footer'
import { Loading } from './Loading'
import VantaBackground from '../vantabg'
export function AppLayout() {
  const navigation = useNavigation()

  return (
    <>
       <div className="relative min-h-screen">
       {/* <VantaBackground /> */}
      <div className="relative z-10">
        <Navbar />
        {navigation.state === "loading" ? (
          <Loading />
        ) : (
          <div className="container mx-auto px-4 py-16">
            <Outlet />
          </div>
        )}
        <Footer />
      </div>
    </div>
    </>
  )
}
