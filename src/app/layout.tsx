import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { NavigationMenu } from '@/components/ui/navigation-menu'
const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Don\'t know what doing 🥲',
  description: 'Blah Blah',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<html lang="en">
  <body className="{inter.className} flex justify-center">
    <div className='max-w-[1240px] w-full'>
          <nav className='flex items-center w-full h-[100px]'>
            
        <div className='w-1/4 flex items-center justify-start'>
            <Link href={"/"}>Nikhil</Link>
        </div>
            <div className='w-[75%] flex itmes-center justify-end gap-10'>
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/work"}>Work</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
      </nav>
        <div>
          {children}
        </div>
    </div>
  </body>
</html>
  )
}
