import { Fish } from '@phosphor-icons/react'
import { LogoDiv, LogoTitle, Nav } from './siderbar.style'
import { NavItem } from './components/item/nav.item'
import { category } from './data'

// Functional Component
export function Sidebar() {
  // Rendering
  return (
    <Nav>
      <LogoDiv>
        <Fish size={40} />
        <LogoTitle>Tech House</LogoTitle>
      </LogoDiv>
      <div>
        {category.map((item) => {
          return (
            <NavItem key={item.id} title={item.category} icon={item.icon} />
          )
        })}
      </div>
    </Nav>
  )
}
