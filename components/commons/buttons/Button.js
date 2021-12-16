export default function Button({ children, ...rest }) {
  return (
    <button
      {...rest}
      className="py-2 px-4 bg-transparent text-accent font-bold border border-2 border-accent rounded hover:bg-accent hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-opaque hover:shadow-accent-dark"
    >
      {children}
    </button>
  );
}
