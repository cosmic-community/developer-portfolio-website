export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Full Stack Developer
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-slide-up">
            Building modern web applications with React, Node.js, and cutting-edge technologies. 
            Passionate about creating exceptional user experiences and scalable solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <a
              href="#projects"
              className="btn btn-primary px-8 py-3 text-base"
            >
              View My Work
            </a>
            <a
              href="#experience"
              className="btn btn-outline px-8 py-3 text-base"
            >
              My Experience
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}