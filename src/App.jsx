import { useState } from 'react'
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import ResponsiveAppBar from './NavBar';
import LeaderBoard from './LeaderBoard'

function App() {

  return (
    <div>
      <ResponsiveAppBar />
      <LeaderBoard />
    </div>
  )
}

export default App
