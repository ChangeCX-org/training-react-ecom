import React from 'react'

const HomePageBanner = () => {
  return (<div className="flex bg-gray-200 h-96 gap-6 p-4">
  <div className="w-1/2">
    <img
      src="https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
      alt="Main Image"
      className="w-full h-full object-cover rounded-lg"
    />
  </div>

  <div className="w-1/2 flex flex-col gap-5">
    <div className="h-1/2">
      <img
        src="https://images.unsplash.com/photo-1692301417533-6fbaa2ee8ee5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        alt="Upper Image"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>

    <div className=" h-40 flex divide-x gap-7">
      <div className="w-1/2">
        <img
          src="https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt="Bottom Image 1"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="w-1/2">
        <img
          src="https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt="Bottom Image 2"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  </div>
  
</div>
);
}

export default HomePageBanner