import { CircleCheck, Plus } from "lucide-react";
interface ActivitiesProps {
    openCreateActivityModal: () => void
}

export function Activities({openCreateActivityModal}: ActivitiesProps) {
    return (
        

                    <div className="space-y-8">
                        <div className="space-y-2.5">
                            <div className="flex gap-2 items-baseline">
                                <span className="text-xl text-zinc-300">Dia</span>
                                <span className="text-xs text-zinc-500">Dia Semana</span>
                            </div>
                            <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada nessa data.</p>
                        </div>

                        <div className="space-y-2.5">
                            <div className="flex gap-2 items-baseline">
                                <span className="text-xl text-zinc-300">Dia y</span>
                                <span className="text-xs text-zinc-500">Dia Semana</span>
                            </div>
                            <div className="space-y-2.5">
                                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                                    <CircleCheck className='size-5 text-lime-300'></CircleCheck>
                                    <span className="text-zinc-100">Atividade do dia</span>
                                    <span className="text-zinc-400 text-sm ml-auto">Horas</span>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}