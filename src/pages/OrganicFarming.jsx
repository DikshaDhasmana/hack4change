import React from 'react'
import farm1 from '../assets/farm1.jpg'
import { ChevronRight ,Mail , Phone} from 'lucide-react'

const benefitsData = [
     {
        img : farm1 , 
        title : 'Inexpensive Pocess' ,
        description : 'Use of organic farming methods reduces the overall cost.'
     },
     {
        img :farm1 , 
        title : 'Environment Friendly' ,
        description : 'The use of organic prodducts does not have any harmful impact on environment'
     },
     {
        img : farm1 , 
        title : 'More nutritional' ,
        description : 'Organic products are more nutritional , tasty and good for health.'
     },
     {
        img : farm1 , 
        title : 'High Demand' ,
        description : 'Organic products have huge demand acroos the globe , which generates more income through exports.'
     },
     {
        img :  farm1  , 
        title : 'Increased Employment' ,
        description : 'Prganic farming is more labour intensive , hence generates more income. '
     },
]

const councilsData = [
    {
       name : 'APOF ORGANIC CERTIFICATION AGENCY' , 
       address : 'Row House No. A , Veerbhadra Nagr , Baner , Pune ' ,
       phoneNumber : 8806230301 ,
       email : 'info@aoca.in',
       headPerson : 'Mr. Niraml D',
       state : 'Pune'
    },
    {
       name : 'ADITI ORGANIC CERTIFICATION PVT. LTD.' , 
       address : 'No. 38 , 1st floor , 20th Main Road, Rajajinagar , Bengaluru , Karnataka' ,
       phoneNumber : 7619102658 ,
       email : 'kavya@aditicert.net',
       headPerson : 'Kavya HP',
       state : 'Karnataka'
    },
    {
       name : 'BIOFARMS NATURAL' , 
       address : 'Near Tibetan Colony , CLement Town , Dehradun , Uttrakhand ' ,
       phoneNumber : 8806230301 ,
       email : 'biofarmnatural2017@gmail.com',
       headPerson : 'J.C. Mathew',
       state : ' Uttrakhand'
    },
    {
       name : 'AGRICERT PVT. LTD.' , 
       address : 'Ground Floor , Cooperative buliding , Pulwama , SriNagar , Jammu kashmir' ,
       phoneNumber : 8806230301 ,
       email : 'agricertjk@gmail.com',
       headPerson : 'Umar Yasin Mir',
       state : 'Jammu kashmir'
    },
]

 const OrganicFarming = () => {
  return (
    <div className=''>
         <div className="relative w-full mx-auto mb-10 ">
        <img
          className="h-96 md:h-80 w-full"
          src={farm1}
          alt="BPIT img"
        />
        <div className="absolute inset-0 py-28 bg-black opacity-80 px-10 lg:px-16">
          <div className="flex justify-center align-center">
            <div>
              <h2 className="font-bold text-4xl lg:text-5xl text-white ">
                Organic Farming
              </h2>
              <div className='flex space-x-2 text-white text-lg mt-4 sm:flex-row flex-col '>
                <h4>Home</h4>
                <div className=''><ChevronRight /></div>
                <h4>Our Services</h4>
                <div className=''><ChevronRight /></div>
                <h4>Organic Farming</h4>
              </div>
            </div>
          </div>
        </div>
         </div>

         <div className="flex  w-1/3 mx-auto">
            <div className="mt-8 flex-grow border-t border-lime-500 mr-2"></div>
            <span className="text-lime-500 text-3xl font-bold pb-4 mr-2 mt-4 ">
               What is Organic Farming
            </span>
            <div className="mt-9 flex-grow border-t border-lime-500 "></div>
          </div>
        <div className='flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 mx-10 lg:mx-60 mb-20 text-lg' >
            <p>Organic Farming is an agricultural process that uses biological fertilisers and pest controls acquired from plant or animal waste.The basic idea of organic farming is not just growing crops , it is a method of growing crops in a way that is natural and healthy for environment and all living things around.</p>
            <p className='mt-8 md:mt-0'>It includes avoiding using man-made chemicals like pesticides and fertilisers for crops. Instead , organic inputs are used like green manures , cow dung , etc for keeping plants healthy. Composting is also a method used widely in organic farming.</p>
        </div>  

        <div className='mb-20'>
          <div className="flex  w-1/3 mx-auto">
            <div className="mt-8 flex-grow border-t border-lime-500 mr-2"></div>
            <span className="text-lime-500 text-3xl font-bold pb-4 mr-2 mt-4 ">
               Benefits
            </span>
            <div className="mt-9 flex-grow border-t border-lime-500 "></div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-6 mx-8'>
              {
                benefitsData.map((benefit , index)=>(
                        <div key={index} className='flex flex-col md:flex-row  '>
                            <div className='flex justify-center align-center'>
                               <img
                                src={benefit.img} className='h-20 w-20 rounded-full'
                               />
                            </div>  
                            <div className='lg:ml-4 flex justify-center align-center'>
                               <div>
                               <h3 className='text-center font-semibold text-xl'>{benefit.title}</h3>
                               <p className='text-md'>{benefit.description}</p>
                                </div>
                            </div>  
                        </div>    
                ))
              }
          </div>
        </div>

        <div>
          <div className="flex  w-1/3 mx-auto">
            <div className="mt-8 flex-grow border-t border-lime-500 mr-2"></div>
            <span className="text-lime-500 text-3xl font-bold pb-4 mr-2 mt-4 ">
               Regional Councils
            </span>
            <div className="mt-9 flex-grow border-t border-lime-500 "></div>
          </div>
          <div>
            {councilsData.map((council)=>(
                <div className='bg-gray-300 my-4 py-6 mx-4 px-4'>
                    <h2 className='text-xl text-center font-bold'>{council.name}</h2>
                    <div className='flex flex-col lg:flex-row lg:justify-around'>
                        <div>
                            <div>
                            <h4 className='font-semibold lg:mt-0 mt-6'>Address</h4>
                            <p className='mt-2'>{council.address}</p>
                            </div>
                            <div className='mt-4'>
                                <h4 className='font-semibold'>Head Person</h4>
                                <p className='mt-2'>{council.headPerson}</p>
                            </div>
                        </div>

                        <div>
                        <h4 className='font-semibold lg:mt-0 mt-4'>Contact Details</h4>
                        <div className='flex mt-4'>
                            <Phone/>
                            <a  href={`tel:${council.phoneNumber}`}>{council.phoneNumber}</a>
                        </div>
                        <div className='flex mt-2'>
                            <Mail/>
                            <a href={`mailto:${council.email}`}>{council.email}</a>
                        </div>
                        </div>
                    </div>    
                </div>    
            ))}
          </div>
        </div>
    </div>
  )
}

export default OrganicFarming

