export default function Mensaje({ tipo, children }) {
  return <div className={`alerta ${tipo}`}>{children}</div>;
}
