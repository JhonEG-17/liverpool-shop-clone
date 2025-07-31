import Logo from '@/assets/liverpool-logo.svg'

import './index.css'

export default function NavBar() {
  return (
    <nav className='column items-center justify-center w-full'>
      <div className='flex items-center justify-evenly space-x-4 w-full p-4'>
        <img className='h-10' src={Logo} alt="Logo Liverpool" />

        <div className='flex items-center justify-center bg-white rounded-md w-full'>
          <input className='p-2 w-full' type="text" placeholder='Buscar...' />
        </div>

        <button className='p-2 text-white __navbar-color-hover rounded-full'>
          ❤
        </button>

        <button className='p-2 text-white __navbar-color-hover rounded-full'>
          🛒
        </button>

        <button className='p-2 text-white __navbar-color-hover rounded-md'>
          Iniciar sesión
        </button>
      </div>
      <div className='flex items-center justify-evenly w-full p-2 __navbar-color text-white'>
        <div className='flex items-center justify-start space-x-4 w-full'>
          <button>Elige una tienda</button>
          <button>Categorias</button>
        </div>

        <ul className='flex items-center justify-end space-x-4 w-full'>
          <li>
            <button>Servicios</button>
          </li>
          <li>
            <button>Otros sitios</button>
          </li>
          <li>
            <button>Mesa de regalos</button>
          </li>
          <li>
            <button>Mi crédito</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}