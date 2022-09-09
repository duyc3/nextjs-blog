import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import { GetStaticProps, GetStaticPaths } from 'next';
import{getApiData,getApiPath} from '../../lib/api';

export default function Api({data}){
    return(
        <Layout>
            {/**Add head component */}
            <Head>
                <title>{data.name}</title>
            </Head>
            <article>
            <h1 className={utilStyles.headingXl}>{data.name}</h1>
            <div className={utilStyles.lightText}>
              <Date dateString={data.pushed_at} />
            </div>
            <div className={utilStyles.lightText}>
              <b>API Link:</b> {data.url}
              <br/>
              <b>Link:</b> {data.html_url}
            </div>
            </article>
        </Layout>

    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await getApiPath();
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async () => {
    const data = await getApiData();
    return {
        props: {
            data
        }
    }
}