import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Navbar from './component/Navbar/Navbar';
import Sidebar from './component/Sidebar/Sidebar';
import API_URL from './helper/ApiKey';
//tests
function App() {
  const [count, setCount] = useState(0);
  console.log(API_URL)
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <div className="flex flex-row flex-1">
          <div className="">
            <Sidebar />
          </div>
          <div className='flex items-center w-full justify-center'>
            Image here!!
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
