import React from 'react'



export const Navbar = () => {

  return (
    <nav className='relative flex items-center justify-between border-b border-neutral-900'>
        <div className='flex flex-shrink-0 items-center text-black text-3xl'>
            <a href="">LOGO</a>
        </div>
        <div className='my-5 hidden md:flex items-center justify-center gap-3 text-black text-2l'> 
            <a className='hover:bg-black px-5 py-1 rounded-2xl transition-colors hover:text-amber-50' href="">Home</a>
            <a className='hover:bg-black px-5 py-1 rounded-2xl transition-colors hover:text-amber-50' href="">Tentang Kami</a>
            <a className='hover:bg-black px-5 py-1 rounded-2xl transition-colors hover:text-amber-50' href="">Katalog Produk</a>
            <a className='hover:bg-black px-5 py-1 rounded-2xl transition-colors hover:text-amber-50' href="">Portfolio</a>
            <a className='hover:bg-black px-5 py-1 rounded-2xl transition-colors hover:text-amber-50' href="">Kontak</a>
        </div>
        <div className='border-1 rounded-3xl md:block'>
            <input className='bg-gray-100 rounded-3xl text-black text-l p-3 pl-5' type="text" name="" id="" placeholder= 'Search' /> 
        </div>
    </nav>
  )
}
