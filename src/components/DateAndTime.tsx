import { useEffect, useState } from "react";

const DateAndTime = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-right">
            <p className="text-lg font-semibold text-slate-800">
                {time.toLocaleDateString("en-US", {
                    month: "long",   // 👉 gives full month name like "October"
                    day: "numeric",  // 👉 shows day as number (e.g. 25)
                    year: "numeric", // 👉 shows year (e.g. 2025)
                })}
            </p>
            <p className="text-xl font-bold text-orange-600">
                {time.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                })}
            </p>
        </div>

    )
}

export default DateAndTime