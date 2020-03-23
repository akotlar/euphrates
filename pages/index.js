import Head from 'next/head'
import styles2 from "./index.module.scss"
import Blah from '../components/Blah'
import Header from '../components/Header/Header'
const Home = () => (
  <div className="container" id={styles2.something}>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  </div>
)

export default Home
