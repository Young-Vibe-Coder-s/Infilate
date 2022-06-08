import Link from 'next/link'
import React from 'react'
import { MdOutlineClose } from 'react-icons/md'


const Topbar = ({ show, setShow }) => {
	const navs = [
		{
			tab: 'Store',
			path: '/store'
		},
		{
			tab: 'Wallet',
			path: '/wallet'
		},
		{
			tab: 'Tracking Panel',
			path: '/tracking-panel'
		},
		{
			tab: 'Reports',
			path: '/reports'
		},
		{
			tab: 'Banker Market',
			path: '/banker-market'
		}
	]
	return (
		<>
			<div className='lg:block hidden w-10/12 fixed top-0 left-position border-b h-20 bg-white shadow-lg z-50 Nunito'>
				<div className='flex justify-between px-5 items-center h-20'>
					{
						navs.map((nav) => {
							return <Link href={nav.path} key={nav.path}><p className='cursor-pointer p-3 bg-blue-500 py-1 rounded-md'>{nav.tab}</p></Link>
						})
					}
				</div>
			</div>
			<div className={show ? 'sm:block lg:hidden w-full h-screen fixed top-0 left-0 bg-white Nunito duration-300 zindex2000' : 'zindex2000 sm:block w-full h-screen fixed top-0 left-full bg-white Nunito duration-300'}>
				<div className='absolute top-5 right-5 p-3 bg-gray-200 bg-opacity-50 rounded-full' onClick={() => { setShow(false) }}><MdOutlineClose /></div>
				<div className='flex flex-col w-full justify-evenly h-5/6 text-center font-bold text-lg mt-8'>
					{
						navs.map((nav) => {
							return <Link key={nav.path} href={nav.path}>{nav.tab}</Link>
						})
					}
				</div>
			</div>
		</>
	)
}

export default Topbar