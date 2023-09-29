import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <Image src='./logo.svg'
        height={110}
        width={110}
        alt='logo'
    />
  )
}

export default Logo