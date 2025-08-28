import Link from "next/link";
const Footer = () => {
  return (
    <div>
         <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h2 className="text-2xl font-bold">SevenStrike CS2</h2>
            <p className="text-gray-400 mt-2">
              Грандиозный турнир по Counter-Strike 2. Соревнуйтесь, побеждайте и докажите свое превосходство!
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white">О нас</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white">Часто задаваемые вопросы</Link></li>
              <li><Link href="/rules" className="text-gray-400 hover:text-white">Правила</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Связаться</Link></li>
                            <li><Link href="/sell" className="text-gray-400 hover:text-white">Торговать</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Подписывайтесь на нас</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link href="https://t.me/+RUy_McUwNN5kYzMy" target="_blank" className="text-gray-400 hover:text-blue-500 text-2xl">
              <i className="fa-brands fa-telegram"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} SevenStrike CS2. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer