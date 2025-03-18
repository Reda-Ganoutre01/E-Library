import Loader from "../../components/loader/Loader.jsx";

/**
 * LoadingPage Component
 *
 * This component displays a full-screen loading state with a centered loader.
 * It is useful for handling asynchronous data fetching or navigation transitions.
 *
 * Features:
 * - Takes up the full viewport height (`h-screen`).
 * - Centers the `Loader` component both vertically and horizontally.
 *
 * @returns {JSX.Element} The rendered loading page.
 */
export default function LoadingPage() {
  return (
    <section className="h-screen flex items-center justify-center">
      <Loader />
    </section>
  );
}
