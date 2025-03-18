import LatestBooksList from "../../components/book/LatestBooksList.jsx";
import EventList from "../../components/event/EventList.jsx";
import Hero from "../../components/hero/Hero.jsx";
import Alert from "../../components/alert/Alert.jsx";
import alert from "../../constants/alert.json";


/**
 * HomePage Component
 *
 * This component serves as the main homepage of the E-Library application.
 * It sets the document title and renders the main sections of the homepage.
 *
 * Features:
 * - Displays an informational alert.
 * - Shows a hero section for introductory content.
 * - Lists the latest books available in the library.
 * - Displays upcoming events.
 *
 * @returns {JSX.Element} The rendered homepage component.
 */
export default function HomePage() {
  document.title = `E-Library - Home`;
  return (
    <section className="flex flex-col items-center justify-center">
      <Alert className={'alert alert-success w-full rounded-none text-center flex justify-center'} title={alert.title} text={alert.text} />
      <Hero />
      <LatestBooksList />
      <EventList />
    </section>
  );
}
