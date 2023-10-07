'use client'

import { Button } from "@/components/ui/button";
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"
import { redirect } from "next/navigation";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Home() {
  const { data: session } = useSession()

  const [error, setError] = useState("");
  const router = useRouter();

  // const callbackUrl = (router.query?.callbackUrl as string) ?? "/";
  // const handleSubmit = async (
  //   e: React.FormEvent<HTMLFormElement>
  // ): Promise<void> => {
  //   e.preventDefault();
  //   const _target = e.target as any;
  //   const email = _target.email.value;
  //   const password = _target.password.value;
  //   const result = await signIn("credentials", {
  //     email,
  //     password,
  //     redirect: false,
  //   });
  //   if (result?.error) {
  //     setError(result.error);
  //   } else {
  //     router.push(callbackUrl);
  //   }
  // };

  if (session) {
    redirect('/search')
  }

  return (
    <div className="flex h-full justify-center items-center">
      <div className="h-full flex flex-col justify-center items-center w-[400px] border-2 text-center"> 
        <h2 className="">
          Not signed in
        </h2>
        
        <Button onClick={() => signIn()} size="lg" variant="outline">
            Sign in
        </Button> 
        <h3 className="">
          You will be redircted to protected page after authorization 
        </h3>
      </div>
    </div>
  )
}