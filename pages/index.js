import { PrismicRichText, SliceZone} from '@prismicio/react'
import { createClient } from '../prismicio'
import { components } from '../slices'
import { Layout } from "../components/Layout";
import Head from "next/head";


const Page = ({ homepage, header, footer }) => {
  return (
    <section>
    <Head>
    <title >{ homepage.data.seo_title }</title>
    <meta name="description" content={ homepage.data.seo_description}></meta>
    </Head>
    <Layout nav={header} bottomnav={footer}>
    <PrismicRichText field={homepage.data.title} />
    <SliceZone slices={homepage.data.slices} components={components} />
    </Layout>
    </section>
)
}

export default Page

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const homepage = await client.getSingle('homepage')
  const header = await client.getSingle('header')
  const footer = await client.getSingle('footer')


  return {
    props: {
      homepage,
      header,
      footer,
    },
  }
}