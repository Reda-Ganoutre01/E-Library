import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

export default function PageNavigator({path , title}) {
    const navigation = useNavigate();
    return <section className={'font-[poppins] mb-12 flex flex-row justify-between items-center'}>
        <h1 className={'text-5xl font-bold'}>{title}</h1>
        <button className={'btn btn-ghost'} onClick={() => {navigation(path)}}>
            <FaArrowRight className={'size-8'} />
        </button>
    </section>
}