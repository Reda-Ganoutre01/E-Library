function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Services */}
          <nav>
            <h6 className="text-lg font-semibold text-white mb-4">Services</h6>
            <ul className="space-y-3">
              <li><a className="link link-hover text-gray-400 hover:text-white transition duration-200">Branding</a></li>
              <li><a className="link link-hover text-gray-400 hover:text-white transition duration-200">Design</a></li>
              <li><a className="link link-hover text-gray-400 hover:text-white transition duration-200">Marketing</a></li>
              <li><a className="link link-hover text-gray-400 hover:text-white transition duration-200">Advertisement</a></li>
            </ul>
          </nav>

          {/* Company */}
          <nav>
            <h6 className="text-lg font-semibold text-white mb-4">Company</h6>
            <ul className="space-y-3">
              <li><a className="link link-hover text-gray-400 hover:text-white transition duration-200">About us</a></li>
              <li><a className="link link-hover text-gray-400 hover:text-white transition duration-200">Contact</a></li>
              <li><a className="link link-hover text-gray-400 hover:text-white transition duration-200">Jobs</a></li>
              <li><a className="link link-hover text-gray-400 hover:text-white transition duration-200">Press kit</a></li>
            </ul>
          </nav>

          {/* Legal */}
          <nav>
            <h6 className="text-lg font-semibold text-white mb-4">Legal</h6>
            <ul className="space-y-3">
              <li><a className="link link-hover text-gray-400 hover:text-white transition duration-200">Terms of use</a></li>
              <li><a className="link link-hover text-gray-400 hover:text-white transition duration-200">Privacy policy</a></li>
              <li><a className="link link-hover text-gray-400 hover:text-white transition duration-200">Cookie policy</a></li>
            </ul>
          </nav>

          {/* Newsletter */}
          <form>
            <h6 className="text-lg font-semibold text-white mb-4">Newsletter</h6>
            <fieldset className="space-y-4">
              <label className="block text-gray-400">Enter your email address</label>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered p-3 w-full sm:w-64 rounded-md bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                />
                <button className="btn btn-primary w-full sm:w-auto p-3 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition duration-200">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </div>
        <div className="mt-12 text-center text-gray-400">
          <p>&copy; 2025 Reda Ganoutre & Mohamed Lafrouh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
