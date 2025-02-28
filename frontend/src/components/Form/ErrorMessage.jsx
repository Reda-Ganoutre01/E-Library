export default function ErrorMessage({ message }) {
    return message ? (
      <p className="text-sm text-red-500 bg-red-100 p-2 rounded-md">⚠️{message}</p>
    ) : null;
  }
  