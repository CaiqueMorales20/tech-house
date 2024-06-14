import { Outlet } from 'react-router-dom'
import { DivS, Main } from './default.style'
import { Sidebar } from './components/sidebar/sidebar'

// Functional Component
export function DefaultLayout() {
  // Rendering
  return (
    <Main>
      <div className="header">Header</div>
      <DivS>
        <Sidebar />
        <Outlet />
      </DivS>
    </Main>
  )
}
