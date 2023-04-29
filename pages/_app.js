import Navbar from '@/app/Navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (<>
  <Navbar />
  <Component {...pageProps} />

  </>)
}
