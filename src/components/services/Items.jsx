import React from 'react'

const Items = ({val}) => {
  return (
      <div className='bg-[#232932] text-[#98a1b6] text-xs flex justify-center items-center p-1 rounded-lg font-extrabold max-sm:text-[10px]'>
        {val}
      </div>
  )
}

export default Items
