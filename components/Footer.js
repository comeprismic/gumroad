import { PrismicLink} from '@prismicio/react'

export const Footer = ({ bottomnav }) => {
  return (
    <ul>
    {
    bottomnav?.data?.menu_items.map((item, i) =>
    <li key={i} >
    <PrismicLink field={item.menu_link}><span >{ item.menu_item_label }</span></PrismicLink>
    </li> 
    )
    }
    </ul>
  );
};


