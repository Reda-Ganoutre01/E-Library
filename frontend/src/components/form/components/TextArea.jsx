export default function TextArea({type , onChange , name , className , placeHolder , value , required=true , children }) {
    return <textarea name={name} value={value} onChange={onChange} className={className} placeholder={placeHolder} required={required}>
        {children}
    </textarea>
}