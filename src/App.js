
import {Routes , Route} from 'react-router-dom';
import FeedPage from './pages/FeedPage';
import LoginPage from './pages/LoginPage';


function App() {

  return (
<div className="bg-gray-50 h-screen overflow-y-auto ">
<Routes>
  
  <Route exact path="/" element={<LoginPage />}  />
  <Route path="/instagram" element={<FeedPage />} />

</Routes>
</div>

  );
}

export default App;
