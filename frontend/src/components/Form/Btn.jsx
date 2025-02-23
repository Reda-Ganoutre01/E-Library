export default function Btn({type,classname,text}){

    return(
        <>
        <button type={type} className={classname}>
            {text}    
        </button>
        </>
    )
} 