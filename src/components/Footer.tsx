export default function Footer() {
  return (
    <div className="container mx-auto flex items-center flex-col md:flex-row max-w-4xl p-4 text-sm">
      <p className="flex-grow">
        &copy; {new Date().getFullYear()} &middot; Todos os direitos reservados.
      </p>
      <ul className="flex flex-nowrap gap-2">
        <li>
          <a href="#">Termos de uso</a>
        </li>
        <li className="text-gray-500">&middot;</li>
        <li>
          <a href="#">Política de privacidade</a>
        </li>
      </ul>
      <p className="flex-grow mx-2">
        &middot; Developer Laecio Filho
      </p>
    </div>
  )
}
