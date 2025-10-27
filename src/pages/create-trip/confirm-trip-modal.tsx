import { AtSign, Mail, Plus, User, X } from "lucide-react"

interface ConfirmTripModalProps {
    closeConfirmTripModal: () => void
    createTrip: (event: React.FormEvent<HTMLFormElement>) => void
}
export function ConfirmTripModal({closeConfirmTripModal,
    createTrip}: ConfirmTripModalProps) {
    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
            <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
                <div className='space-y-2'>
                    <div className='flex items-center justify-between'>
                        <h2 className='semibold text-lg'>Confirmar criação de viagem</h2>
                        <button type='button' onClick={closeConfirmTripModal}>
                            <X className='size-5 text-zinc-400'></X>
                        </button>
                    </div>
                    <p className='text-sm text-zinc-400 text-left'>
                        Para concluir a criação de viagem para <span className='font-semibold text-zinc-100'>destino</span> nas da datas <span className='font-semibold text-zinc-100'>data</span>
                    </p>
                </div>
                <div className='flex flex-wrap gap-2'>
                </div>
                <div className='w-full h-px bg-zinc-800'></div>

                <form onSubmit={createTrip} className='space-y-3' >
                    <div className='px-5 py-2.5 bg-zinc-950 border border-zinc-800 roumded-lg flex items-center gap-2'>
                        <User className='text-zinc-400 size=5' />
                        <input name='name' placeholder="Digite o nome completo" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
                    </div>

                    <div className='px-5 py-2.5 bg-zinc-950 border border-zinc-800 roumded-lg flex items-center gap-2'>
                        <Mail className='text-zinc-400 size=5' />
                        <input type="email" name='email' placeholder="Seu email pessoal" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
                    </div>

                    <button  type='submit' className='bg-lime-300 w-full text-lime-900 rounded-lg px-5 py-2 font-medium justify-center flex items-center gap-2 hover:bg-lime-400'>
                        Confirmar Inscrição Para Viagem
                    </button>
                </form>
            </div>
        </div>
    )
}