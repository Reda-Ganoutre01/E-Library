export default function Image({ className, src, loading, alt }) {
  return <img className={className} src={src} loading={loading} alt={alt} />;
}
