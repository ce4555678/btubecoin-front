import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from 'react'
import Dark from '../context/Dark'
import '../styles/nprogress.css'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  const [ThemeDark, setThemeDark] = useState(false)

    useEffect(() => {
      if(typeof window != 'undefined') {
        if(localStorage.getItem('darkMode') == 'true') {
          setThemeDark(true)
        }
      }
    })

  return (
    <Dark.Provider value={ThemeDark}>
      <Component {...pageProps} />
    </Dark.Provider>
  )
}

export default MyApp
