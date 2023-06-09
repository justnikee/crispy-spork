import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const heroImage = 'https://img.freepik.com/free-vector/scratch-devil-skull-vampire-vector-illustration_460848-6791.jpg?w=740&t=st=1682356190~exp=1682356790~hmac=0bb4b49ba0c271eaf59d84520829e9239bbb6505e199102a29610c053e9de36a'
import heroPictur from '../../public/1326.jpg'
import Note from '@/components/ui/note'
import { PrismaClient } from '@prisma/client'


export async function getNotes() {
  const prisma = new PrismaClient();
  const posts = prisma.note.findMany()
  console.log(posts)
  prisma.$disconnect()
  return {
    notes: {posts}
  }
} 


interface Note{
  id: string;
  title: string;
  content: string;
}

interface Props {
  notes: Note;
}



export default async function Home({notes}: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className='flex w-full h-screen items-center justify-between '>
        <div>
          <h2>Hi</h2>
          <div>
            
          </div>
        </div>
        <div>
          <Image src={heroPictur}
            alt='hero Illustration'
            height={500}
          width={500}/>
        </div>
      </section>
      <section className='h-screen w-screen bg-white'>
       <Note/>
      </section>
      <section className='h-screen w-screen bg-red-300'>
      </section>
      <section className='h-screen w-screen bg-green-400'>
      </section>
    </main>
  )
}
