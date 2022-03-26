import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app'
import ThemeProvider from 'react-bootstrap/ThemeProvider'

import '../styles/globals.css'
import NavBar from "../components/NavBar"
function MyApp({ Component, pageProps }: AppProps) {
  return(
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
      <NavBar/>
      <Component {...pageProps}/>
    </ThemeProvider>
    )
}

export default MyApp
