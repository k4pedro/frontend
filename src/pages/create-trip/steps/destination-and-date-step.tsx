import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import { use, useState } from "react";
import { DayPicker, DateRange } from "react-day-picker";
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

interface DestinationAndDateStepProps {
    isGuestInputOpen: boolean
    openGuestInput: () => void
    closeGuestInput: () => void
    setDestination: (destination: string) => void
    setEventStartAndEndDates: (dates: DateRange | undefined) => void
    eventStartAndEndDates: DateRange | undefined
}

export function DestinationAndDateStep({
    isGuestInputOpen,
    openGuestInput,
    closeGuestInput,
    setDestination,
    setEventStartAndEndDates,
    eventStartAndEndDates

}: DestinationAndDateStepProps) {
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
    // const [eventStartAndEndDates, setEventStartAndEndDates] = useState<DateRange | undefined>()

    function openDatePicker() {
        return setIsDatePickerOpen(true)
    }

    function closeoDatePicker() {
        return setIsDatePickerOpen(false)
    }

    const displayedDate = eventStartAndEndDates && eventStartAndEndDates.from && eventStartAndEndDates.to ? format(eventStartAndEndDates.from, "d' de 'LLL").concat(' até ').concat(format(eventStartAndEndDates.to, "d' de 'LLL")) : null

    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className='flex items-center gap-2 flex-1'>
                <MapPin className="size-5 text-zinc-400" />
                <input
                    disabled={isGuestInputOpen}
                    type="text"
                    placeholder="Para onde vai? "
                    className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                    onChange={event => setDestination(event.target.value)}
                />
            </div>

            <button onClick={openDatePicker} disabled={isGuestInputOpen} className='flex items-center gap-2 text-left w-[248px]'>
                <Calendar className="size-5 text-zinc-400" />
                <span className=" text-lg text-zinc-400 w-40">
                    {displayedDate || 'Quando?'}
                </span>
            </button>
            {isDatePickerOpen && (
                <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
                    <div className=' rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
                        <div className='space-y-2'>
                            <div className='flex items-center justify-between'>
                                <h2 className='semibold text-lg'>Selecione a data</h2>
                                <button type='button' onClick={closeoDatePicker}>
                                    <X className='size-5 text-zinc-400'></X>
                                </button>
                            </div>
                        </div>

                        <DayPicker mode="range" selected={eventStartAndEndDates} onSelect={setEventStartAndEndDates} />
                    </div>
                </div>
            )}

            <div className='w-px h-6 bg-zinc-800'></div>

            {isGuestInputOpen ? (
                <button onClick={closeGuestInput} className='bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700'>Alterar Local/Data
                    <Settings2 className='size-5 ' />
                </button>
            ) : (
                <button onClick={openGuestInput} className='bg-lime-300 text-lime-900 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
                    Continuar
                    <ArrowRight className='size-5 ' />
                </button>
            )}
        </div>
    )
}