import Image from 'next/image'
import Link from 'next/link'
import { footerLinks } from '@/constants/index'

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5 sm:px-16 px-6 py-10 border-t border-gray-100'>
      <div className='flex max-md:flex-col flex-wrap justify-between items-start gap-6'>
        <div className='flex flex-col justify-start items-start gap-6'>
          <Image src='/logo.svg' alt='logo' width={118} height={18} className='object-contain' />
          <p className='text-base text-gray-700'>
            Carhub 2023 <br />
            All rights reserved &copy;
          </p>
        </div>

        <div className='footer__links'>
          {footerLinks.map((link) => {
            return (
              <div className='footer__link' key={link.title}>
                <h3 className='font-bold'>{link.title}</h3>
                {link.links.map((item) => {
                  return (
                    <Link key={item.title} href='/'>{item.title}</Link>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>

      <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
        <p className='pr-5'>@2023 CarHub. All Rights Reserved.</p>

        <div className='footer__copyrights-link'>
          <Link className='text-gray-500' href='/'>Privacy Policy</Link>
          <Link className='text-gray-500' href='/'>Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer