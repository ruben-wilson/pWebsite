import '../styles/globals.css'
import Layout from '../components/layout'

const MyApp = ({ Component, pageProps }) => {
  return ( 
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

module.exports = MyApp;