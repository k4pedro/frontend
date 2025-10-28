import { format } from "date-fns";
import { CircleCheck, CircleDashed, UserCog } from "lucide-react";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";

interface Participant {
    id: string
    name: string | null
    email: string
    is_confirmed: boolean
}

export function Guests() {
    const { tripId } = useParams()
    const [participants, setParticipants] = useState<Participant[] | undefined>();

    useEffect(() => {
        api.get(`/trips/${tripId}/participants`).then(response =>
            setParticipants(response.data.participants))
    }, [tripId])


    return (

        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Convidados</h2>
            <div className="space-y-5">
                {participants?.map((participant, index) => {
                    return (
                        <div key={participant.id}  className="flex items-center justify-between gap-4">
                            <div className="space-y-1.5">
                                <span className="text-zinc-100 block font-medium">
                                    {participant.name  ?? 'Participant ${index}'}
                                </span>
                                <span className="text-zinc-400 block text-xs truncate hover:text-zinc-200">
                                    {participant.email}
                                </span>
                            </div>
                            {participant.is_confirmed ? (
                                <CircleCheck className='size-5 text-lime-400 shrink-0' />
                            ) : ( <CircleDashed className='size-5 text-zinc-600 shrink-0' /> )} 
                        </div>
                    )
                })}
            </div>

            <button className="bg-zinc-800 w-full justify-center text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700">
                <UserCog className='size-5'></UserCog>
                Gerenciar convidados
            </button>
        </div>
    )
}