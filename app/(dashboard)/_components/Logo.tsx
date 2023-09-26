import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <Image src='./logo.svg'
        height={100}
        width={100}
        alt='logo'
    />
  )
}

export default Logo