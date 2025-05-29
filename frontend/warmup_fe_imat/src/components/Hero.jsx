import React from 'react'

export const Hero = () => {
  return (
    <div className='bg-linear-to-r from-neutral-800 to-white rounded-2xl px-9 py-32 mt-14 mx-10'>
        <h1 className='text-5xl font-bold text-neutral-50'>Selamat Datang Di Sewa Pesta Kita!</h1>
        <p className='mt-5 text-slate-50'>Kami melayani berbagai layanan sewa barang dan jasa di bidang penyedia alat Event.</p>
        <div className='flex flex-col gap-6 sm:flex-row'>
          <button className='mt-5  text-amber-50 border-2 px-6 py-4 rounded-4xl hover:bg-amber-50 transition-colors hover:text-black'>Order Sekarang</button>
          <button className='mt-5  text-amber-50 border-2 px-6 py-4 rounded-4xl hover:bg-amber-50 transition-colors hover:text-black'>Kontak</button>
        </div>
    </div>
  )
}
