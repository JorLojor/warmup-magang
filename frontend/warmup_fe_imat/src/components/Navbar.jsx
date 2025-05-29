import React from 'react'

export const Navbar = () => {
  return (
    <nav className='flex items-center justify-between border-b border-neutral-900'>
        <div className='flex flex-shrink-0 items-center text-black text-3xl'>
            <a href="">LOGO</a>
        </div>
        <div className='m-8 flex items-center justify-center gap-6 text-black text-xl'> 
            <a className='hover:bg-black px-5 py-1 rounded-2xl transition-colors hover:text-amber-50' href="">Home</a>
            <a className='hover:bg-black px-5 py-1 rounded-2xl transition-colors hover:text-amber-50' href="">Tentang Kami</a>
            <a className='hover:bg-black px-5 py-1 rounded-2xl transition-colors hover:text-amber-50' href="">Katalog Produk</a>
            <a className='hover:bg-black px-5 py-1 rounded-2xl transition-colors hover:text-amber-50' href="">Portfolio</a>
            <a className='hover:bg-black px-5 py-1 rounded-2xl transition-colors hover:text-amber-50' href="">Kontak</a>
        </div>
        <div className='border-1 rounded-3xl'>
            <input className='bg-gray-100 rounded-3xl text-black text-l p-3 pl-5' type="text" name="" id="" placeholder= 'Search' /> 
        </div>
    </nav>
  )
}
