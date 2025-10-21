import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2, X } from 'lucide-react'
import { useState } from 'react'

export function App() {
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false)
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false)

  function openGuestInput() {
    setIsGuestInputOpen(true)
  }

  function closeGuestInput() {
    setIsGuestInputOpen(false)
  }

  function openGuestModal() {
    setIsGuestModalOpen(true)
  }

  function closeGuestModal() {
    setIsGuestModalOpen(false)
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className='max-w-3xl w-full px-6 text-center space-y-10'>
        <p className='text-lg text-zinc-300'>Convide seus amigos e planeje sua viagem!</p>

        <div className='space-y-4'>
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className='flex items-center gap-2 flex-1'>
              <MapPin className="size-5 text-zinc-400" />
              <input disabled={isGuestInputOpen} type="text" placeholder="Para onde vai? " className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
            </div>

            <div className='flex items-center gap-2'>
              <Calendar className="size-5 text-zinc-400" />
              <input disabled={isGuestInputOpen} type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none flex-1" />
            </div>

            <div className='w-px h-6 bg-zinc-800'></div>
            
            {isGuestInputOpen ? (
              <button onClick={closeGuestInput}className='bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700'>Alterar Local/Data
              <Settings2 className='size-5 ' />
              </button>
            ) : (
              <button onClick={openGuestInput} className='bg-lime-300 text-lime-900 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
              Continuar
              <ArrowRight className='size-5 ' />
            </button>
            )}
          </div>

          {isGuestInputOpen && (
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">

            <button type='button' onClick={openGuestModal} className='flex items-center gap-2 flex-1 text-left'>
              <UserRoundPlus className="size-5 text-zinc-400" />
              <span  className=" text-zinc-400 outline-none flex-1">Quem estara na viagem?</span>
            </button>

            <div className='w-px h-6 bg-zinc-800'></div>

            <button className='bg-lime-300 text-lime-900 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
              Confirmar viagem
              <ArrowRight className='size-5 ' />
            </button>
          </div>)}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem para planner você automaticamente concorda <br />
          com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">políticas privadas</a>
        </p>

        {isGuestModalOpen && (
          <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
            <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900'>
              <div className='flex items-center justify-between'>
                <h2>Add Convidados</h2>
                <button>
                  <X className='size-5 text-zinc-400' onClick={closeGuestModal}></X>
                </button>
              </div> 
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
