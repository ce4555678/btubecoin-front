import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from 'react'
import Dark from '../context/Dark'
import ClientGql from '../utils/ClientGql'
import {ApolloProvider} from '@apollo/client' 



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
      <ApolloProvider client={ClientGql}>
      <Component {...pageProps} />
      </ApolloProvider>
    </Dark.Provider>
  )
}

export default MyApp
