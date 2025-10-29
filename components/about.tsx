import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden border border-green-500/20">
            <Image src="/tech-team-office-workspace.jpg" alt="SEVENBITLABS Team" fill className="object-cover" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-5xl font-bold mb-6 text-balance">Driving Digital Transformation in Nigeria</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              SEVENBITLABS is a premier technology firm focused on incubating and commercializing emerging technologies.
              Our mission is to provide cutting-edge digital solutions and advisory services that empower our clients to
              succeed.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Innovative solutions tailored to your business needs</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Expert team with years of industry experience</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Commitment to excellence and client success</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
