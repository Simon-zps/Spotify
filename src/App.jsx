import Card from './pages/card/Card'
import Featured from './pages/featured-page/Featured'
import './global-styles/style.scss'

function App() {

  return (
    <>
      <div className="show">
        <Card />
      </div>

      <div className="show">
        <Featured />
      </div>
    </>
  )
}

export default App;
