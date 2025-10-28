import { Calendar, Tag, X } from "lucide-react";
import { api } from "../../lib/axios";
interface CreateActivityModalProps {
    closeCreateActivityModal: () => void
}

export function CreateActivivyModal({ closeCreateActivityModal }: CreateActivityModalProps) {
    function createActivity(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const data = new FormData(event.currentTarget)
        const title = data.get('tittle')?.toString()
        const occurs_at = data.get('occurs_at')?.valueOf()

        console.log(title, occurs_at)

        api.post('/trips/${tripId}/activities',
            { title, occurs_at }
        )
    }

    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
            <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
                <div className='space-y-2'>
                    <div className='flex items-center justify-between'>
                        <h2 className='semibold text-lg'>Cadastrar atividade</h2>
                        <button type='button' onClick={closeCreateActivityModal}>
                            <X className='size-5 text-zinc-400'></X>
                        </button>
                    </div>
                    <p className='text-sm text-zinc-400 text-left'>
                        Todos convidados poderao ver essa atividade
                    </p>
                </div>
                {/* <div className='flex flex-wrap gap-2'>
                </div>
                <div className='w-full h-px bg-zinc-800'></div> */}

                <form className='space-y-3' >
                    <div className='px-5 py-2.5 bg-zinc-950 border border-zinc-800 roumded-lg flex items-center gap-2'>
                        <Tag className='text-zinc-400 size=5' />
                        <input name='tittle' placeholder="Qual Atividade?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
                    </div>

                    <div className="flex items-center gap-2">
                        <div className='h-14 px-4 flex-1 bg-zinc-950 border border-zinc-800 roumded-lg flex items-center gap-2'>
                            <Calendar className='text-zinc-400 size=5' />
                            <input
                                type="datetime-local"
                                name='occurs_at'
                                placeholder="Data e Horario da atividade"
                                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
                        </div>
                        {/* <div className='h-14 w-36 px-4 bg-zinc-950 border border-zinc-800 roumded-lg flex items-center gap-2'>
                                    <Mail className='text-zinc-400 size=5' />
                                    <input type="email" name='email' placeholder="Horario" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
                                </div> */}
                    </div>
                    <button type='submit' className='bg-lime-300 w-full text-lime-900 rounded-lg px-5 py-2 font-medium justify-center flex items-center gap-2 hover:bg-lime-400'>
                        Salvar Atividade
                    </button>
                </form>
            </div>
        </div>
    )
}