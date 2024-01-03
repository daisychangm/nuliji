import Image from 'next/image'
import { viga } from './ui/fonts'

export default function Home() {
  return (
    <h1 className={`${viga.className}`}>Welcome to Nuliji</h1>
  )
}
