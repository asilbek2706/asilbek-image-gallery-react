import { useState } from 'react';

const ImageSearch = ({ searchText, setIsLoading }) => {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        searchText(text);
        setIsLoading(false)
    }

    return (
        <div className="max-w-md mx-auto my-12 px-4">
            <form onSubmit={onSubmit} className="relative group">
                <div className="relative flex items-center bg-white/30 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl overflow-hidden p-1.5 transition-all duration-300 focus-within:ring-2 focus-within:ring-indigo-400/50 focus-within:bg-white/50">

                    <div className="pl-4 text-slate-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    <input
                        onChange={e => setText(e.target.value)}
                        className="bg-transparent border-none w-full text-slate-800 placeholder-slate-400 py-3 px-4 leading-tight focus:outline-none text-base"
                        type="text"
                        placeholder="Rasmlarni qidirish..."
                    />

                    <button
                        className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2.5 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/40 active:scale-95"
                        type="submit"
                    >
                        Search
                    </button>
                </div>

                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-focus-within:opacity-40 -z-10"></div>
            </form>
        </div>
    )
}

export default ImageSearch;