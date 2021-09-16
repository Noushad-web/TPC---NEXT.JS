import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import UploadWrapper from '../components/upload/uploadWrapper';

export default function Home() {
  return (    
      <div className={styles.container}>
        <Head>
          <title>TPC - next</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>


        <main>
          <UploadWrapper />
        </main>


        <footer>
          
        </footer>
      </div>    
  )
}
