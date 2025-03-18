/**
 * Loader Component
 *
 * This component renders a loading spinner with a primary color.
 * It is typically used to indicate that content is being loaded.
 *
 * Features:
 * - Uses a scalable `loading-xl` spinner.
 * - Applies the `text-primary` color for theming consistency.
 *
 * @returns {JSX.Element} The rendered loading spinner.
 */
export default function Loader() {
  return <span className="loading loading-xl loading-spinner text-primary" />;
}
