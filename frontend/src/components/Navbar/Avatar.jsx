export default function Avatar({username , size , textSize}) {
    return <div className="avatar avatar-placeholder">
        <div className={`bg-neutral text-center text-neutral-content w-10 rounded-full`}>
            <span className={`text-${textSize}`}>{username ? username.charAt(0).toUpperCase() : "?"}</span>
        </div>
    </div>
}