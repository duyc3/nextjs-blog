import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
//import { getSortedBlogsData } from '../lib/blogs';
import Link from 'next/link';
import Date from '../components/date';
import { GetStaticProps } from 'next';
import { getApiData } from '../lib/api';


export default function Home({
  allPostsData,allData
}:{
  allPostsData: {
  date: string
  title: string
  id: string
}[],allData
}) {
 
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <section className={utilStyles.headingMd1}>
        <p>Hi, I'm Duy. I am a Front-end developer. you can contact me by <a href='https://www.facebook.com/QuangDuy2510'>Facebook</a></p>
        <p>
        Here are some of my info
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Information</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>  
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        
            <ul className={utilStyles.list}>
              <li className={utilStyles.listItem} key={allData.node_id}>
                <Link href={`/apies/${allData.node_id}`}>
                  <a>{allData.name}</a>
                </Link>
                <br />
                <Date dateString={allData.pushed_at}></Date>
              </li>
            </ul>
        
      </section>
      
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async()=>{
  const allData = await getApiData();
  const allPostsData = getSortedPostsData( )
  return {
    props:{
      allPostsData,
      allData
      
    }
  }
}