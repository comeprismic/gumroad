import { SliceZone } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'

import { createClient } from '../../prismicio'
import { components } from '../../slices'

const ProductPage = ({ productdata }) => {
  return <SliceZone slices={productdata.data.slices} components={components} />
}

export default ProductPage

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const productdata = await client.getByUID('product', params.uid)

  return {
    props: {
      productdata,
    },
  }
}

export async function getStaticPaths() {
  const client = createClient()

  const productsurls = await client.getAllByType('product')

  return {
    paths: productsurls.map((producturl) => prismicH.asLink(producturl)),
    fallback: false,
  }
}