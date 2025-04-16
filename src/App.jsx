import './App.css'
import Home from './Components/Home'
import PostProvider from './Store/PostStore'

function App() {
 

  return (
    <>
  <PostProvider>
<Home/>
  </PostProvider>
   
    </>
  )
}

export default App
