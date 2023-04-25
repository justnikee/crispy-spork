import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })
const heroImage = 'https://img.freepik.com/free-vector/scratch-devil-skull-vampire-vector-illustration_460848-6791.jpg?w=740&t=st=1682356190~exp=1682356790~hmac=0bb4b49ba0c271eaf59d84520829e9239bbb6505e199102a29610c053e9de36a'
import heroPictur from '../../public/1326.jpg'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className='flex w-full h-screen items-center justify-between '>
        <div>
             <h2>Hi I'm Nxkey</h2>
        </div>
        <div>
          <Image src={heroPictur}
            alt='hero Illustration'
            height={500}
          width={500}/>
        </div>
      </section>
      <section className='h-screen w-screen bg-white'>
      </section>
      <section className='h-screen w-screen bg-red-300'>
      </section>
      <section className='h-screen w-screen bg-green-400'>
      </section>
    </main>
  )
}
