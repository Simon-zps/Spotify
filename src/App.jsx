import Card from './pages/card/Card'
import Featured from './pages/featured-page/Featured'
import './global-styles/style.scss'

function App() {

  return (
    <>
      <div className="up">
        <Card />
      </div>

      <div className="down">
        <Featured />
      </div>
    </>
  )
}

export default App;
