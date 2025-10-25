import DateAndTime from "./components/DateAndTime";
import Ticker from "./components/Ticker";

interface Counter {
    id: number;
    name: string;
    currentNumber: string;
}

export default function App() {

    
    const counters: Counter[] = [
        { id: 1, name: "Billing", currentNumber: "A103" },
        { id: 2, name: "Tax", currentNumber: "B205" },
        { id: 3, name: "Assessment", currentNumber: "C310" },
        { id: 4, name: "Customer Service", currentNumber: "D108" },
    ];

    const nextList = [
        { number: "A104", counter: "Billing" },
        { number: "B206", counter: "Tax" },
        { number: "C311", counter: "Assessment" },
        { number: "D109", counter: "Customer Service" },
    ];

    return (
        <div className="min-h-screen bg-linear-to-br from-orange-50 via-amber-100 to-orange-200 text-slate-900 font-poppins flex flex-col">
            {/* HEADER */}
            <header className="flex justify-between items-center px-10 py-6 bg-white/70 backdrop-blur-md shadow-md border-b border-orange-200">
                <div className="flex items-center gap-4">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/3/3e/OOjs_UI_icon_userProgressive.svg"
                        alt="logo"
                        className="h-12 w-12"
                    />
                    <div>
                        <h1 className="text-3xl font-bold tracking-wide text-orange-700">CQMS</h1>
                        <p className="text-sm text-slate-600">
                            Citizen Queueing Management System
                        </p>
                    </div>
                </div>
                <DateAndTime />
            </header>

            {/* MAIN */}
            <main className="flex-1 grid grid-cols-3 gap-10 px-10 py-10">
                {/* LEFT: Multi Counter Display */}
                <section className="col-span-2 bg-white/80 backdrop-blur-lg border border-orange-100 rounded-3xl shadow-2xl p-10">
                    <h2 className="text-3xl font-semibold text-orange-700 mb-6">
                        Now Serving
                    </h2>

                    <div className="grid grid-cols-2 gap-6">
                        {counters.map((counter) => (
                            <div
                                key={counter.id}
                                className="relative overflow-hidden bg-linear-to-br from-white to-orange-50 rounded-3xl shadow-lg p-6 border border-orange-100 flex flex-col items-center justify-center transition-all hover:shadow-2xl hover:scale-[1.02]"
                            >
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-200/30 rounded-full blur-3xl" />
                                <div className="absolute bottom-0 left-0 w-40 h-40 bg-amber-200/30 rounded-tr-full blur-3xl" />
                                <p className="text-lg font-medium text-slate-600 mb-2 uppercase tracking-wide">
                                    {counter.name}
                                </p>
                                <h3 className="text-7xl font-extrabold text-orange-600 drop-shadow-md animate-pulse">
                                    {counter.currentNumber}
                                </h3>
                            </div>
                        ))}
                    </div>
                </section>

                {/* RIGHT: Next In Line */}
                <section className="bg-white/90 backdrop-blur-xl rounded-3xl border border-orange-100 shadow-xl flex flex-col overflow-hidden">
                    <div className="bg-linear-to-r from-orange-600 to-amber-500 text-white py-4 px-8 text-2xl font-semibold tracking-wide">
                        Next In Line
                    </div>
                    <ul className="flex-1 p-8 flex flex-col gap-5">
                        {nextList.map((item, i) => (
                            <li
                                key={i}
                                className="flex justify-between items-center bg-linear-to-r from-orange-50 to-amber-50 rounded-2xl p-5 text-xl font-semibold shadow-sm border border-orange-100 hover:from-orange-100 hover:to-amber-100 transition-all duration-200"
                            >
                                <span className="text-orange-600 font-extrabold text-3xl tracking-tight">
                                    {item.number}
                                </span>
                                <span className="text-slate-600">{item.counter}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>

            {/* FOOTER */}
            <footer className="bg-linear-to-r from-orange-700 to-amber-600 text-white text-center py-4 text-lg tracking-wide shadow-inner">
                <div className="max-w-6xl mx-auto px-6">
                    <Ticker text="🔊 Welcome to our Service Center! Please wait for your number to be called. Thank you for your patience." />
                </div>
            </footer>
        </div>
    );
}
