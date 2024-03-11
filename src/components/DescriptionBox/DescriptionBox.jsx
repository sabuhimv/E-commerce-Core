import React from 'react'

const DescriptionBox = () => {
  return (
    <div className='mt-14'>
        <div className="desc-nav flex">
            <div className="desc-nav-box flex items-center justify-center text-base font-semibold w-[170px] h-[70px] border-2 border-solid border-[#d0d0d0] mr-3">Description</div>
            <div className="desc-nav-box fade flex items-center justify-center text-base font-semibold w-[170px] h-[70px] border-2 border-solid border-[#d0d0d0]">Reviews (122)</div>
        </div>
        <div className="desc-description flex flex-col gap-6 border-2 border-solid border-[d0d0d0] p-12 pb-16">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci necessitatibus accusamus iste animi nihil illo aliquam nulla aperiam autem repudiandae qui vero laboriosam, laborum ipsa obcaecati neque sit corporis doloremque.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro illum tenetur aut labore repellendus non exercitationem ipsum sit culpa, modi fuga quaerat. Dignissimos debitis minima accusantium rerum nam doloribus vel voluptate laudantium repellat, veritatis sint porro ea quisquam. Ipsum quibusdam deserunt assumenda doloribus totam eligendi.</p>
        </div>
    </div>
  )
}

export default DescriptionBox