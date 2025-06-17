
import React from 'react'

const Card = ({id, image, des,funDelete }) => {
  return (
    <div className="w-[365px] h-[186px] p-4 rounded-xl shadow-lg border border-[#021A84] hover:shadow-xl transition-all bg-white">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <img src={image} alt="logo" className="w-10 h-10 object-contain" />
          <h2 className="font-semibold text-lg">{des}</h2>
        </div>
        <span className="text-blue-600 text-sm border px-2 py-1 rounded-full">Full-time</span>
      </div>
<hr className='my-[20px]' />  
      <div className="flex justify-between text-sm text-gray-600 mb-2">
        <div>
          <p className="text-xs">Hoa hồng</p>
          <p className="text-black font-semibold">12,000,000 <span className="text-xs">VND</span></p>
        </div>
        <div>
          <p className="text-xs">Thưởng</p>
          <p className="text-black font-semibold">50,000,000 <span className="text-xs">VND</span></p>
        </div>
      </div>

      <div className="flex items-center justify-around mt-3">
     <button className='border px-[10px] py-[3px] rounded-xl' onClick={()=>funDelete(id)}>Delete</button>
        <span className="bg-red-500 text-white px-2 py-1 text-xs rounded">PREMIUM</span>
      </div>
    </div>
    
  )
  
}

export default Card
