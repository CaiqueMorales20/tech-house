import { Outlet } from 'react-router-dom'

// Functional Component
export function DefaultLayout() {
  // Rendering
  return (
    <main>
      <div>Header</div>
      <Outlet />
    </main>
  )
}
