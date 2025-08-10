import './style.css'

const Prizes = () => {
  return (
    <div className='container flex items-center justify-center text-white'>
    <div className='w-[95%] md:w-[85%] border-[1px] border-green-400 rounded-md p-6 flex flex-col gap-2 items-center justify-center'>
    <strong className='text-[30px] text-center text-black'>Призы SevenStrike</strong>
    <p className='text-[20px]'>1 место: <span className='text-green-400 underline'>1 000 000 uzs</span></p>
    <p className='text-[18px]'>2 место: <span className='text-green-400 underline'>700 000 uzs</span></p>
    <p>3 место: <span className='text-green-400 underline'>500 000 uzs</span></p>
    <p className='text-center text-gray-200 underline'>
    Стоимость участия в турнире составляет 50 000 сумов на игрока. 
    </p>
    </div>
    </div>
  )
}

export default Prizes