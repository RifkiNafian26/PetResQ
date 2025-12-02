import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FEFAE0]">
      {/* Hero Section */}
      <section className="bg-[#5F6F52] text-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-sm mx-auto">
              <input
                type="text"
                placeholder="Find an Animal to Adopt"
                className="w-full px-4 py-2 pr-12 rounded-md border-2 border-[#FEFAE0] bg-[#FEFAE0] text-[#5F6F52] placeholder-[#5F6F52]/70 focus:outline-none focus:ring-2 focus:ring-[#FEFAE0]"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2">
                <svg className="w-5 h-5 text-[#5F6F52]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Hero Title */}
          <h1 className="text-6xl font-bold text-[#FEFAE0] mb-4 tracking-wide">JARGON</h1>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#5F6F52] mb-8">PetResQ</h2>

          <div className="space-y-3 mb-8">
            <p className="text-[#5F6F52] text-sm">Explanation About PetResQ</p>
            <p className="text-[#5F6F52] text-sm">Explanation About PetResQ</p>
            <p className="text-[#5F6F52] text-sm">Explanation About PetResQ</p>
            <p className="text-[#5F6F52] text-sm">Explanation About PetResQ</p>
          </div>

          <button className="bg-[#5F6F52] text-[#FEFAE0] px-6 py-2 rounded-md text-sm font-medium hover:bg-[#4a5a43] transition-colors">More detailed</button>
        </div>
      </section>

      {/* Adoption Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#5F6F52] text-center mb-12">You Can Adopt an Animal</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {/* Dog Card */}
            <div className="bg-[#5F6F52] rounded-lg p-8 text-center w-full max-w-xs">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-[#4a5a43] rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#FEFAE0]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-[#FEFAE0] font-bold text-lg">DOG</h3>
            </div>

            {/* Cat Card */}
            <div className="bg-[#5F6F52] rounded-lg p-8 text-center w-full max-w-xs">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-[#4a5a43] rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#FEFAE0]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="text-[#FEFAE0] font-bold text-lg">CAT</h3>
            </div>

            {/* Rabbit Card */}
            <div className="bg-[#5F6F52] rounded-lg p-8 text-center w-full max-w-xs">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-[#4a5a43] rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#FEFAE0]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-[#FEFAE0] font-bold text-lg">RABBIT</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#5F6F52] text-center mb-12">What People Say About Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }, (_, i) => (
              <div key={i} className="bg-[#5F6F52] rounded-lg p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#FEFAE0] rounded-full flex items-center justify-center">
                  <span className="text-[#5F6F52] text-xs font-medium">PHOTO REVIEWER</span>
                </div>
                <div className="flex justify-center mb-3">
                  {Array.from({ length: 5 }, (_, j) => (
                    <svg key={j} className="w-4 h-4 text-yellow-400 fill-current">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <h3 className="text-[#FEFAE0] font-bold">REVIEW</h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="bg-[#5F6F52] text-[#FEFAE0] px-6 py-2 rounded-md text-sm font-medium hover:bg-[#4a5a43] transition-colors">Write a Review</button>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-[#5F6F52] leading-tight">
                IMPACT
                <br />
                THAT CAN
                <br />
                BE MADE
              </h2>
            </div>

            <div className="bg-[#5F6F52] rounded-lg p-8 h-64">
              {/* Placeholder for impact content */}
              <div className="h-full flex items-center justify-center text-[#FEFAE0]">
                <p className="text-center">Impact statistics and information will go here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
