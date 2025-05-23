const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get current year dynamically

  return (
    <footer className="bg-gray-800 text-white py-8 px-4 mt-12">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        {/* Left Section: Navigation ps */}
        <div className="mb-4 sm:mb-0">
          <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
            <li>
              <p className="hover:text-blue-400 transition-colors duration-200">
                Privacy Policy
              </p>
            </li>
            <li>
              <p className="hover:text-blue-400 transition-colors duration-200">
                Terms of Service
              </p>
            </li>
            <li>
              {/* This might typically open a cookie consent modal or p to a dedicated page */}
              <button className="hover:text-blue-400 transition-colors duration-200 focus:outline-none">
                Manage Cookie Preferences
              </button>
            </li>
          </ul>
        </div>

        {/* Right Section: Copyright Info */}
        <div className="text-sm text-gray-400">
          Copyright © {currentYear} Football Arena. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
