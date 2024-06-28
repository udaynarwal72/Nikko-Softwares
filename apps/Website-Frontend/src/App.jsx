import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Navbar from './component/Navbar/Navbar';
import Sidebar from './component/Sidebar/Sidebar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <div className="flex flex-row flex-1">
          <div className="">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
