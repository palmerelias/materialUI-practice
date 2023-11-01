import ResponsiveAppBar from './NavBar';
import LeaderBoard from './LeaderBoard'
import Socials from './Socials'
import DividerLine from './DividerLine';


function App() {

  return (
    <div>
      <ResponsiveAppBar/>
      <LeaderBoard />
      <DividerLine />
      <LeaderBoard />
      <DividerLine />
      <Socials />
    </div>
  )
}

export default App
