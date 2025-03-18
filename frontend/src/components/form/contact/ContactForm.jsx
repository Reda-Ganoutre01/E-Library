import { MdEmail } from "react-icons/md";
import Input from "../components/Input.jsx";
import TextArea from "../components/TextArea.jsx";
import Form from "../components/Form.jsx";
import FormTitle from "../components/FormTitle.jsx";
import { FaUser } from "react-icons/fa";

/**
 * ContactForm Component
 *
 * This component renders a styled contact form within a card layout.
 * Users can enter their full name, email, and message before sending it via email.
 *
 * Features:
 * - Uses a modern card UI with shadow and border styling.
 * - Includes input fields for full name, email, and a message textarea.
 * - Provides a `mailto` link for direct email submission.
 * - Implements accessible and structured form controls.
 *
 * @returns {JSX.Element} The rendered contact form.
 */
export default function ContactForm() {
  return (
    <Form className="card bg-base-100 w-[38rem] h-[26rem] shadow-lg font-[poppins] border-[0.6px] border-[#ccc]">
      <div className="card-body flex flex-col justify-center">
        <FormTitle text={"Contact"} />
        <Input type={"text"} name={"fullName"} className={"grow w-full"} icon={<FaUser />}  placeHolder={"Full Name"} />
        <Input type={"text"} name={"fullName"} className={"grow w-full"} icon={<MdEmail />} placeHolder={"Personnal Email"} />
        <TextArea placeHolder={"Message"} className={"textarea textarea-bordered textarea-lg w-full resize-none"}>
          Your super message 🌟
        </TextArea>
        <div className="card-actions flex mt-4 justify-center">
          <a className="btn btn-primary w-full" href={"mailto:random@gmail.com"}>Send</a>
        </div>
      </div>
    </Form>
  );
}
