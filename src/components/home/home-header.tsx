'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Logo } from '../ui/logo'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { useState } from 'react'
import { HomeMenu } from './home-menu'

export const HomeHeader = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <header className="lg:hidden flex justify-between p-6 border-b-2 border-gray-900">
      <div className="lg:hidden">
        <Logo size={24} />
      </div>
      <div className="hidden lg:block text-2xl ">Página inicial</div>
      <div className=" lg:hidden cursor-pointer ">
        <FontAwesomeIcon
          icon={faBars}
          className="size-6"
          onClick={() => setShowMenu(true)}
        />
      </div>

      {showMenu && <HomeMenu closeAction={() => setShowMenu(false)} />}
    </header>
  )
}
