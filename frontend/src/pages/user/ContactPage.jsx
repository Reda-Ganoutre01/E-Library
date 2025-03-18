import ContactForm from "../../components/form/contact/ContactForm.jsx";

/**
 * ContactPage Component
 *
 * This component renders the contact page of the E-Library application.
 * It provides a form for users to reach out with inquiries or feedback.
 *
 * Features:
 * - Displays a centered `ContactForm` component.
 * - Uses a full-height section for better layout consistency.
 *
 * @returns {JSX.Element} The rendered contact page.
 */
export default function ContactPage() {
  document.title = `E-Library - Contact`;
  return <section className="h-[40rem] flex items-center justify-center">
    <ContactForm />
  </section>;
}
