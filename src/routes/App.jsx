import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import FetchItems from "../store/FetchItems"
import { useSelector } from "react-redux"
import LoadingSpinner from "../components/LoadingSpinner"

function App() {
  const { currentlyFetching } = useSelector(store => store.fetchStatus);
  return (
    <>
      <Header />
      <FetchItems />
      {currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  )
}

export default App
