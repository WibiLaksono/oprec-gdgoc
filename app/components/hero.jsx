"use client"

export default function Hero (){
    return (
        <div className="mt-5 h-[85vh] flex flex-col mx-[7vw]">
            <div>
                <a href="#" className="text-slate-700 text-xl font-Montserrat font-semibold">Home</a>
            </div>
            <div className="w-[100%] h-[80%] flex flex-col justify-center items-center">
                <div className="relative bg-white w-[100%] h-[50vh] rounded-xl shadow-lg shadow-slate-400/50  hover:shadow-slate-500/50 overflow-hidden">
                    <img 
                        src="bghero.jpg" 
                        alt="Background Hero" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                    {/* Konten */}
                    <div className="absolute inset-0 flex flex-col md:flex-row md:gap-20 justify-between items-center md:items-start p-5">
                        <div className="w-[100%] h-[50%] md:w-[50%] md:h-[100%] flex justify-center items-end md:items-start">
                            <h1 className="text-white text-2xl md:text-6xl mt-32 font-bold font-Montserrat">Give Your Money</h1>
                        </div>
                        <div className="w-[100%] h-[50%] md:w-[50%] md:h-[100%] flex justify-center items-end">
                            <button className="bg-white text-black mb-10 text-sm font-semibold font-Montserrat w-[90%] h-[20%] md:w-[70%] md:h-[10%] xl:w-[50%] rounded-lg hover:bg-slate-200">
                                Mulai Berbelanja
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-[100%] h-[10vh] rounded-xl mt-5 flex flex-col">
                    <div>
                        <a href="" className="text-slate-700 font-Montserrat font-semibold">Kategori</a>    
                    </div>
                    <div className="w-[100%] h-[10vh] rounded-xl mt-2 flex flex-row justify-between">
                        <div className="flex flex-col md:flex-row items-center justify-center bg-white w-[23%] h-[10vh] rounded-xl shadow-lg shadow-slate-400/50 hover:shadow-slate-500/50">
                            <svg className="h-10 w-10 md:h-8 md:w-8 text-[#23856D]"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="5 12 3 12 12 3 21 12 19 12" />  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
                            <svg className="h-0 w-0 md:h-10 md:w-10 text-[#23856D]"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="12" y1="5" x2="12" y2="19" /></svg>
                            <p className="text-slate-700 text-xs text-center md:text-base font-Montserrat font-semibold">Peralatan Rumah</p>
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-center bg-white w-[23%] h-[10vh] rounded-xl shadow-lg shadow-slate-400/50 hover:shadow-slate-500/50">
                            <svg className="h-10 w-10 md:h-8 md:w-8 text-blue-500"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M15 4l6 2v5h-3v8a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l6 -2a3 3 0 0 0 6 0" /></svg>
                            <svg className="h-0 w-0 md:h-10 md:w-10 text-blue-500"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="12" y1="5" x2="12" y2="19" /></svg>
                            <p className="text-slate-700 text-xs text-center md:text-base font-Montserrat font-semibold">Pakaian</p>
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-center bg-white w-[23%] h-[10vh] rounded-xl shadow-lg shadow-slate-400/50 hover:shadow-slate-500/50">
                            <svg className="h-10 w-10 md:h-8 md:w-8 text-orange-600"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"/>
                            </svg>
                            <svg className="h-0 w-0 md:h-10 md:w-10 text-orange-600"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="12" y1="5" x2="12" y2="19" /></svg>
                            <p className="text-slate-700 text-xs text-center md:text-base font-Montserrat font-semibold">Permainan</p>
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-center bg-white w-[23%] h-[10vh] rounded-xl shadow-lg shadow-slate-400/50 hover:shadow-slate-500/50">
                            <svg className="h-10 w-10 md:h-8 md:w-8 text-red-800"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />    <path d="M12 12a8 8 0 0 0 8 4M7.5 13.5a12 12 0 0 0 8.5 6.5" />    <path d="M12 12a8 8 0 0 0 8 4M7.5 13.5a12 12 0 0 0 8.5 6.5" transform="rotate(120 12 12)" />    <path d="M12 12a8 8 0 0 0 8 4M7.5 13.5a12 12 0 0 0 8.5 6.5" transform="rotate(240 12 12)" />  </svg>
                            <svg className="h-0 w-0 md:h-10 md:w-10 text-red-800"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="12" y1="5" x2="12" y2="19" /></svg>
                            <p className="text-slate-700 text-xs text-center md:text-base font-Montserrat font-semibold">Olahraga</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}