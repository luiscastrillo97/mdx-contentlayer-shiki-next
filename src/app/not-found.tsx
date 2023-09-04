import Link from "next/link";

const NotFound = () => {
  return (
    <div className="grid gap-4 place-content-center text-center">
        <h1 className="font-bold text-3xl ">¡Oops! Aquí no es</h1>
        <Link href="/" className="bg-black text-white px-4 py-2 rounded-md hover:bg-slate-700">Volver al inicio</Link>
    </div>
  )
}

export default NotFound
