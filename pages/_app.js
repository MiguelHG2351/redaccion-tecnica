import Layout from '../components/Layout'
import Header from '../components/header'

// Next

class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
            <>
            <Layout>
                <Header />
                <Component { ...pageProps } />
            </Layout>
            </>
    )
  }
}

export default MyApp
