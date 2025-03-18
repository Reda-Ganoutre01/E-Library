export default function Event({ event }) {
    return <section className="card bg-base-100 w-96 rounded-md shadow-md overflow-hidden border-[#ccc]">
        <figure className={'h-52 w-full overflow-hidden'}>
            <img
                className={'w-full h-full object-cover'}
                src={event.image}
                alt={event.title} />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{event.title}</h2>
            <p>{event.description}</p>
        </div>
    </section>
}