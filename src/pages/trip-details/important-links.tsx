import { Link2, Plus } from "lucide-react";

export function ImportantLinks() {
    return (
        <div className="space-y-2">
                        <h2 className="font font-semibold text-xl">Links Importantes</h2>
                        <div className="space-y-5">
                            <div className="flex items-center justify-between gap-4">
                                <div className="space-y-1.5">
                                    <span className="text-zinc-100 block font-medium">Nome do link</span>
                                    <a href="#" className="text-zinc-400 block text-xs truncate hover:text-zinc-200">WWW.LINK.COM
                                    </a>
                                </div>
                                <Link2 className='size-5 text-zinc-400'></Link2>
                            </div>
                        </div>
                        <div className="space-y-5">
                            <div className="flex items-center justify-between gap-4">
                                <div className="space-y-1.5">
                                    <span className="text-zinc-100 block font-medium">Nome do link</span>
                                    <a href="#" className="text-zinc-400 block text-xs truncate hover:text-zinc-200">WWW.LINK.COM
                                    </a>
                                </div>
                                <Link2 className='size-5 text-zinc-400'></Link2>
                            </div>
                        </div>
                        <button className="bg-zinc-800 w-full justify-center text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700">

                            <Plus className="size-5"></Plus>
                            Cadastratar novo link
                        </button>
                    </div>
    )
}