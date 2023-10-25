import Action from './Action';
import Comedy from './Comedy';
import './App.css';
import Horror from './Horror';
import Original from './Original';
import Romance from './Romance';
import Toprated from './Toprated';
import Trending from './Trending';
import Featured from './featured/Featured';
import Navbar from './navbar/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Featured/>
      <Original/>
      <Trending/>
      <Toprated/>
      <Comedy/>
      <Action/>
      <Horror/>
      <Romance/>
     
      
    </>
  
  );
}

export default App;
