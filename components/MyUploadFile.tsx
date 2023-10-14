'use client'

import axios from 'axios'
import { useState } from 'react'

function UploadForm() {
  const [file, setFile] = useState<File>()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!file) return

    try {

      const data = new FormData()
      data.set('file', file)

      const res = await axios.patch('/api/upload', data)
      // handle the error

    } catch (e: any) {
      // Handle errors here
      console.error(e)
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="file"
        name="file"
        onChange={(e) => setFile(e.target.files?.[0])}
      />
      <input type="submit" value="Upload" />
    </form>
  )
}

export default UploadForm