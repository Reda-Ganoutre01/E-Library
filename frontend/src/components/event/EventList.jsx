import events from '../../constants/events.json'
import Event from "./Event.jsx";

export default function EventList() {
    return <section className="flex flex-col items-center justify-center mb-12 bg-base-100 rounded-md p-6 shadow-xl border-[0.5px] border-[#ccc]">
        <h1 className={'text-5xl font-[poppins] font-bold mb-6 mt-4'}>Events</h1>
        <section className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'}>
            {
                events.map((event, index) => <Event key={index} event={event} />)
            }
        </section>
    </section>
}