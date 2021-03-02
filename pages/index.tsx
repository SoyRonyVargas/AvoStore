import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'

const HomePage = () => {
  const [avos, setAvos] = useState<TProduct[]>([])

  useEffect(() => {
    const getAvos = async () => {
      const _avos = await fetch('http://localhost:3000/api/avo')
      const allAvos = await _avos.json()
      console.log(allAvos)
      setAvos(allAvos.data)
    }

    getAvos()
  }, [])

  return (
    <div>
      <div>Platzi and Next.js!</div>
      {avos.map((avo) => (
        <pre>{JSON.stringify(avo, null, 3)}</pre>
      ))}
    </div>
  )
}

export default HomePage
