export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <p className="text-gray-300 mb-4">
              Ready to work together? Let's discuss your next project.
            </p>
            <a 
              href="mailto:hello@developer.com"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              hello@developer.com
            </a>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <a href="#projects" className="block text-gray-300 hover:text-white transition-colors">
                Projects
              </a>
              <a href="#skills" className="block text-gray-300 hover:text-white transition-colors">
                Skills
              </a>
              <a href="#experience" className="block text-gray-300 hover:text-white transition-colors">
                Experience
              </a>
              <a href="#testimonials" className="block text-gray-300 hover:text-white transition-colors">
                Testimonials
              </a>
            </nav>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://twitter.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Developer Portfolio. Built with Next.js and Cosmic CMS.</p>
        </div>
      </div>
    </footer>
  )
}