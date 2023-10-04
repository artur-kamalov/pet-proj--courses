'use client'

import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"
export default function Home() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        HOME

        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>

        <Link href='/search'>Search|   </Link>
        <Link href='/teacher/courses'>Teacher/courses|</Link>
      </>
    )
  }
  return (
    <>
      HOME
      
      Not signed in <br />
      
      <button onClick={() => signIn()}>Sign in</button>

      <Link href='/search'>Search|   </Link>
      <Link href='/teacher/courses'>Teacher/courses|</Link>

    </>
  )
}