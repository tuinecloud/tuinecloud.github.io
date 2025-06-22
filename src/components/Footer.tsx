export function Navbar() {
  return (
    <nav className="bg-white py-4 px-8 flex justify-between items-center shadow-md">
      <a href="/" className="text-2xl font-bold">TuineCloud</a>
      <ul className="flex space-x-6">
        <li><a href="/" className="hover:text-primary">Home</a></li>
        <li><a href="/shop" className="hover:text-primary">Shop</a></li>
        <li><a href="/about" className="hover:text-primary">About</a></li>
        <li><a href="/contact" className="hover:text-primary">Contact</a></li>
      </ul>
    </nav>
  );
}
