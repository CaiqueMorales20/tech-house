import {
  Avocado,
  BowlFood,
  Cheers,
  CookingPot,
  Cow,
  Egg,
  Hamburger,
  ImageBroken,
  Onigiri,
  Shrimp,
} from '@phosphor-icons/react'
import { Item } from './nav.item.style'
import { ItemType } from './type'

export function NavItem({ title, icon }: ItemType) {
  return (
    <Item>
      {icon === 'meal' ? (
        <Shrimp size={24} color="#909090" />
      ) : icon === 'bbq' ? (
        <Hamburger size={24} color="#909090" />
      ) : icon === 'beefsteak' ? (
        <Cow size={24} color="#909090" />
      ) : icon === 'sushi' ? (
        <Onigiri size={24} color="#909090" />
      ) : icon === 'Noodles' ? (
        <BowlFood size={24} color="#909090" />
      ) : icon === 'chicken' ? (
        <Egg size={24} color="#909090" />
      ) : icon === 'rice' ? (
        <CookingPot size={24} color="#909090" />
      ) : icon === 'soup' ? (
        <Avocado size={24} color="#909090" />
      ) : icon === 'drink' ? (
        <Cheers size={24} color="#909090" />
      ) : (
        <ImageBroken size={24} color="#909090" />
      )}
      {title}
    </Item>
  )
}
