import { Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../components/button";

export function DestinationAndDataHeader() {
    return (
        <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
                <div className="flex items-center">
                    <MapPin className='size-5 text-zinc-400'></MapPin>
                    <span className="text-lg text-zinc-100">Destino</span>
                </div>

                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2">
                        <Calendar className="size-5 text-zinc-400"></Calendar>
                        <span className="text-lg text-zinc-100">Data</span>
                    </div>

                    <div className="w-px h-6 bg-zinc-500"></div>

                    <Button variant="secondary">
                        Alterar Local e Data
                        <Settings2 className='size-5 ' />
                    </Button>
                </div>
            </div>
    )
}