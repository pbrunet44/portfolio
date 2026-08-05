import { useState } from 'react';
import PageRouter from './routes/PageRouter';

import starBackground from './assets/star-background.jpg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div
        className='min-h-screen bg-gray-800 text-white'
        style={{ backgroundImage: `url(${starBackground})`, backgroundSize: 'cover' }}
      >
        <PageRouter />
      </div>
    </>
  )
}

export default App;
