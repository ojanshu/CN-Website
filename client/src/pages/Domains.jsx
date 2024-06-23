import React from 'react'
import Navbar from '../components/Navbar'
import { DomainsList } from '../constants/DomainsList'

const Domains = () => {
  return (
    <div>
        <Navbar/>
        <div className="text-lg leading-relaxed mb-6">
        <h1 className="text-6xl md:text-8xl font-light mt-10 mb-4 text-gray-500 text-center">
          Domains
        </h1>
        <p className="mt-8 text-1xl md:text-2xl text-white font-light text-center">
          Various Domains in our society.
        </p>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 justify-items-center">
    {DomainsList.map((domain) => (
      <div key={domain.id} className="w-full max-w-xs group">
        <div className="w-64 h-64 mx-auto relative">
          <img 
            src={domain.image} 
            alt={`Domain ${domain.id}`} 
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 text-white
          group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 rounded-lg">
            <h3 className="text-xl font-semibold">{domain.title}</h3>
            <p className="text-sm">{domain.description}</p>
            <div className="w-full h-1 bg-orange-500 mt-2"></div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


    </div>
  )
}

export default Domains
