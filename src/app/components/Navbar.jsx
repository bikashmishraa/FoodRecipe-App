import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
        <div className="navbar bg-base-100 text-white">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">FoodRecipie</a>
  </div>
    <div className='flex gap-6 px-8'>
    <Link href={'/'}>Home</Link>
    <Link href={'/recipe-list'}>Recipe List</Link>
    </div>
    
</div>
    </div>
  )
}

export default Navbar