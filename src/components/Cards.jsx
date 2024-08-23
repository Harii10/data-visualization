import { Card, Metric, Text } from '@tremor/react';
import { useState } from 'react';


function Cards() {

  const [cards, setCards] = useState([])

  return (
    <div className='flex gap-10'>
        <div className='ml-12 bg-white'>
          <div className='w-80 h-24 p-5 shadow-lg rounded-xl border border-gray-300'>
            <p>Materials</p>
          </div>
        </div>
    </div>
    
  );
}

export default Cards