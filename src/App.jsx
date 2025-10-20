import { MapPin, Calendar, ArrowRight, UserRoundPlus } from 'lucide-react'
import { useState } from 'react'

export function App() {
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false)

  function openGuestInput() {
    setIsGuestInputOpen(true)
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className='max-w-3xl w-full px-6 text-center space-y-10'>
        <p className='text-lg text-zinc-300'>Convide seus amigos e planeje sua viagem!</p>

        <div className='space-y-4'>
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className='flex items-center gap-2 flex-1'>
              <MapPin className="size-5 text-zinc-400" />
              <input type="text" placeholder="Para onde vai? " className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
            </div>

            <div className='flex items-center gap-2'>
              <Calendar className="size-5 text-zinc-400" />
              <input type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none flex-1" />
            </div>

            <div className='w-px h-6 bg-zinc-800'></div>
            <button onClick={openGuestInput} className='bg-lime-300 text-lime-900 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
              Continuar
              <ArrowRight className='size-5 ' />
            </button>
          </div>

          {isGuestInputOpen ? (<div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className='flex items-center gap-2 flex-1'>
              <UserRoundPlus className="size-5 text-zinc-400" />
              <input type="text" placeholder="Quem estara na viagem? " className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
            </div>

            <div className='w-px h-6 bg-zinc-800'></div>
            <button onClick={openGuestInput} className='bg-lime-300 text-lime-900 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
              Continuar
              <ArrowRight className='size-5 ' />
            </button>
          </div>) : null}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem para planner você automaticamente concorda <br />
          com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">políticas privadas</a>
        </p>
      </div>
    </div>
  )
}
