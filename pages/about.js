import { SliceZone } from '@prismicio/react'

import { createClient } from '../prismicio'
import { components } from '../slices'

const Post = ({ post }) => {
  return <SliceZone slices={post.data.slices} components={components} />
}

export default Post

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const post = await client.getByUID('blogpost', 'secondblogpost')

  return {
    props: {
      post,
    },
  }
}