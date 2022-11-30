import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicLink } from '@prismicio/react'


const CtaSlice = ({ slice }) => (
  <section>
    <span className="title">
        <PrismicRichText field={slice.primary.title}/>
    </span>
    <span className="desc">
    <PrismicRichText field={slice.primary.description}/>
    </span>
    <PrismicLink  field={slice.primary.link}> <span >{ slice.primary.linklabel }</span></PrismicLink>
    <style jsx>{`
        section {
          max-width: 600px;
          margin: 4em auto;
          text-align: center;
        }
        .title {
          color: black;
        }
        .desc {
          color:black;
        }
    `}</style>
  </section>
)

export default CtaSlice