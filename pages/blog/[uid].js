import { SliceZone } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'

import { createClient } from '../../prismicio'
import { components } from '../../slices'

const Post = ({ post }) => {
  return <SliceZone slices={post.data.slices} components={components} />
}

export default Post

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const post = await client.getByUID('blogpost', params.uid)

  return {
    props: {
      post,
    },
  }
}

export async function getStaticPaths() {
  const client = createClient()

  const posts = await client.getAllByType('blogpost')

  return {
    paths: posts.map((post) => prismicH.asLink(post)),
    fallback: false,
  }
}