import { useState } from 'react'
import { bgColors } from './utils/indesx'
import Button from './compo/Button';


function App() {

  const [color, setColor] = useState('#11001C');
  return (
    <div 
    className={`w-screen h-screen text-white text-center flex justify-center`}
    style={{backgroundColor:color}}
    >
      <div className='flex shadow-2xl border-none flex-wrap bg-[#3A015C] rounded-md p-4 fixed bottom-12 gap-4 mx-10'>
        {bgColors.map(({id,hex,name})=>{
          return(
            <Button key={id}
            color={hex}
            name={name}
            setColor={setColor} />
          )
        })}
      </div>
    </div>
  )
}
export default App
