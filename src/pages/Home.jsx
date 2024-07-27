import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowBigRight } from 'lucide-react'
import farmer from '../assets/farmer.jpg'

const features = [
  {
    title : 'Climate Prediction' ,
    img  : farmer,
  },
  {
    title : 'Supply Chain' ,
    img  : farmer,
  },
  {
    title : 'Crop Monitoring' ,
    img  : farmer,
  },
  {
    title : 'Organic Farming' ,
    img  : farmer,
  },
  {
    title : 'Sustainability' ,
    img  : farmer,
  },
  {
    title : 'Contact And Advisory' ,
    img  : farmer,
  },
 
  
]

const Home = () => {

  return (
    <div className=''>

      <div className='flex flex-col lg:flex-row lg:space-x-4 px-10 lg:px-32 py-8'>
        <div className='align-center'>
          <img
          alt='farmer-img'
          className='h-96 rounded'
          src={farmer}
          />
        </div>
        <div className=' pt-16' id='about-us'>
          <h1 className='text-4xl font-bold sm:ml-24 lg:ml-80'>Who we are ? </h1>
          <p className='mt-4 text-lg mb-4 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus obcaecati dolorem, fugiat iure accusantium error laborum reiciendis autem numquam repellendus?</p>
          <div className='bg-green-600 rounded px-4 py-2 text-white justify-center flex flex-row w-1/3 ml-10 sm:ml-24 lg:ml-80'>
            <Link to='/aboutus'>Know More
            </Link>
            <ArrowBigRight/>
          </div>
        </div>
      </div>

      <div className='bg-stone-100 mt-10 mb-8' id='our-services'>
        <h2 className='text-center text-center text-4xl font-bold pt-6'>Our Services</h2>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 gutter-8 py-8 px-10 lg:px-96'>
          {
            features.map((feature)=>(
                <div className='hover:border hover:border-lime-600 hover:border-md flex flex-col align-center p-6'>
                  <div className='flex justify-center'>
                  <img
                   src={feature.img}
                   alt='img'
                   className=' h-32 w-32 rounded-full'
                  />
                  </div>
                  <h3 className='text-center mt-4 text-xl font-semibold'>{feature.title}</h3>
                  <Link className='bg-lime-500 text-center w-full rounded my-4 text-lg py-1'>
                  Explore
                  </Link>
                </div>
            ))
          }
        </div>
      </div>

      
   </div>
  )
}

export default Home