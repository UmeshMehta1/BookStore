import React from 'react'
import { Link } from 'react-router-dom'
import list from '../../public/list.json'
import Cards from './Card'

function Course() {
  return (
    <>
       <div className="container px-4 mx-auto max-w-screen-2xl md:px-20">
        <div className="items-center justify-center text-center mt-28">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!
          </p>
          <Link to="/">
            <button className="px-4 py-2 mt-6 text-white duration-300 bg-pink-500 rounded-md hover:bg-pink-700">
              Back
            </button>
          </Link>
        </div>

        <div className='grid grid-cols-1 mt-12 md:grid-cols-4'>
         { list.map((item)=>{
             return(
              <Cards item={item} key={item.id}/>
             )
          })}
        </div>

        </div>
    </>
  )
}

export default Course