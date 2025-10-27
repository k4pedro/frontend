import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2, X, AtSign, Plus, User, Mail } from 'lucide-react'
import { use, useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { InviteGuestsModal } from './invite-guest-modal'
import { ConfirmTripModal } from './confirm-trip-modal'
import { DestinationAndDateStep } from './steps/destination-and-date-step'
import { InviteGuestStep } from './steps/invite-guest-step'

export function CreateTripPage() {
    const navigate = useNavigate()
    const [isGuestInputOpen, setIsGuestInputOpen] = useState(false)
    const [isGuestModalOpen, setIsGuestModalOpen] = useState(false)
    const [emailsToInvite, setEmailsToInvite] = useState([
        'pedro@abdou.com.br'
    ])
    const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)

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

    function openConfirmTripModal() {
        setIsConfirmTripModalOpen(true)
    }
    function closeConfirmTripModal() {
        setIsConfirmTripModalOpen(false)
    }

    function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const data = new FormData(event.currentTarget)
        const email = data.get('email')?.toString()

        if (!email) {
            return
        }
        if (emailsToInvite.includes(email)) {
            return
        }

        setEmailsToInvite([...emailsToInvite, email])

        event.currentTarget.reset()
    }

    function removeEmailToInvite(emailToRemove: string) {
        const newEmailList = emailsToInvite.filter(invited => invited !== emailToRemove)

        setEmailsToInvite(newEmailList)
    }

    function createTrip(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        navigate('/trips/1234')
    }
    return (
        <div className="h-screen flex items-center justify-center">
            <div className='max-w-3xl w-full px-6 text-center space-y-10'>
                <p className='text-lg text-zinc-300'>Convide seus amigos e planeje sua viagem!</p>

                <div className='space-y-4'>
                    <DestinationAndDateStep
                        isGuestInputOpen={isGuestInputOpen}
                        openGuestInput={openGuestInput}
                        closeGuestInput={closeGuestInput}
                    />

                    {isGuestInputOpen && (

                        <InviteGuestStep
                            openGuestModal={openGuestModal}
                            openConfirmTripModal={openConfirmTripModal}
                            emailsToInvite={emailsToInvite}
                        />
                    )}
                </div>

                <p className="text-sm text-zinc-500">
                    Ao planejar sua viagem para planner você automaticamente concorda <br />
                    com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">políticas privadas</a>
                </p>

                {/* email guest modal */}
                {isGuestModalOpen && (
                    <InviteGuestsModal
                        emailsToInvite={emailsToInvite}
                        closeGuestModal={closeGuestModal}
                        addNewEmailToInvite={addNewEmailToInvite}
                        removeEmailToInvite={removeEmailToInvite}
                    />
                )}

                {/* email principal useer modal */}
                {isConfirmTripModalOpen && (
                    <ConfirmTripModal
                        closeConfirmTripModal={closeConfirmTripModal}
                        createTrip={createTrip}
                    />
                )}
            </div>
        </div>
    )
}
