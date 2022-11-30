import React from 'react'
import { PrismicRichText } from '@prismicio/react'

//Comment

const ImageLeftAndText = ({ slice }) => (
  <section className={slice.variation}>
    <div classname="text">
      <span className="title">
          <PrismicRichText field={slice.primary.title}/>
      </span>
      <span className="desc">
      <PrismicRichText field={slice.primary.description}/>
      </span>
    </div>

    {slice.variation !== 'noImage' ? <img src={slice.primary.image.url} alt={slice.primary.image.alt} width="100%"/> : undefined }
    <style jsx>{`
    
        .imageRightAndText {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: 1fr;
          grid-column-gap: 50px;
          grid-row-gap: 0px;
          text-align: left;
          align-items:center;
        }
        .default {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: 1fr;
          grid-column-gap: 50px;
          grid-row-gap: 0px;
          direction: rtl;
          text-align: left;
          align-items:center;
        }
        .title {
          color: #8592e0;
        }
        }
        .desc {
          color:black;
        }
        .text {
        padding: 25px;
        }
    `}</style>
  </section>
)

export default ImageLeftAndText