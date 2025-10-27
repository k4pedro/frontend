import { CircleDashed, UserCog } from "lucide-react";

export function Guests() {
    return (

        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Convidados</h2>
            <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="text-zinc-100 block font-medium">Nome do convidado</span>
                        <span className="text-zinc-400 block text-xs truncate hover:text-zinc-200">email do convidado
                        </span>
                    </div>

                    <CircleDashed className='size-5 text-zinc-400 shrink-0' />
                </div>
            </div>
            <button className="bg-zinc-800 w-full justify-center text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700">
                <UserCog className='size-5'></UserCog>
                Gerenciar convidados
            </button>
        </div>
    )
}