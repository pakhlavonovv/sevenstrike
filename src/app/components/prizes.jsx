import './style.css'

const Prizes = () => {
  return (
    <div className='container flex items-center justify-center text-white'>
    <div className='w-[95%] md:w-[85%] border-[3px] border-green-400 rounded-md p-6 flex flex-col hover:shadow-xl transition-all gap-2 items-center justify-center'>
    <strong className='text-[20px] sm:text-[30px] text-center text-white'>Призы SevenStrike</strong>
    <div className='flex flex-col xl:flex-row items-center justify-between w-[80%]'>
        <div className='flex flex-col items-center gap-1'>
            <h2 className='text-[18px] lg:text-[25px]'>2 место</h2>
            <p className='text-[20px] lg:text-[27px] underline'>50 000 UZS</p>
        </div>
                <div className='flex flex-col items-center gap-1'>
            <h2 className='text-[18px] lg:text-[25px] text-green-400'>1 место</h2>
            <p className='text-[20px] lg:text-[27px] underline'>60 000 UZS</p>
        </div>
                <div className='flex flex-col items-center gap-1'>
            <h2 className='text-[18px] lg:text-[25px]'>3 место</h2>
            <p className='text-[20px] lg:text-[27px] underline'>40 000 UZS</p>
        </div>
    </div>
    <p className='text-center text-gray-200 underline'>
    Участие в турнире бесплатное для всех команд! 
    </p>
    </div>
    </div>
  )
}

export default Prizes