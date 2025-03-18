export default function Form({ children, className, onAction , encType='' }) {
  return (
    <form className={className} onSubmit={onAction} encType={encType} >
      <div className="card-body flex flex-col justify-center">{children}</div>
    </form>
  );
}
