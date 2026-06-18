import useReveal from '../hooks/useReveal'
import PackageCard from './PackageCard'

const PACKAGES = [
  {
    name: 'Paket Meeting 10 Orang',
    description: 'Cocok untuk rapat tim kecil hingga diskusi divisi.',
    price: 'Rp350.000',
    image:
      'https://images.unsplash.com/photo-1490885578174-acda8905c2c6?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'Paket buah segar untuk 10 orang dalam rapat kecil',
    features: ['5 jenis buah musiman', 'Kemasan box premium', 'Cocok 1-2 jam meeting'],
  },
  {
    name: 'Paket Meeting 25 Orang',
    description: 'Pilihan favorit untuk rapat divisi & workshop internal.',
    price: 'Rp800.000',
    image:
      'https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'Paket buah segar untuk 25 orang acara workshop kantor',
    featured: true,
    features: ['6 jenis buah pilihan', 'Box individual & nampan', 'Gratis label perusahaan'],
  },
  {
    name: 'Paket Meeting 50 Orang',
    description: 'Untuk seminar, training, dan gathering tim besar.',
    price: 'Rp1.500.000',
    image:
      'https://images.unsplash.com/photo-1543158181-1274e5362710?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'Paket buah segar untuk 50 orang seminar dan training',
    features: ['7 jenis buah segar', 'Setup meja prasmanan buah', 'Tim antar & susun di lokasi'],
  },
  {
    name: 'Paket Corporate Event',
    description: 'Solusi lengkap untuk event perusahaan skala besar.',
    price: 'Rp2.500.000',
    image:
      'https://images.unsplash.com/photo-1573246123716-6b1782bfc499?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'Paket buah premium untuk acara perusahaan skala besar',
    features: ['Custom menu & dekorasi', 'Live fruit counter (opsional)', 'Invoice & PO perusahaan'],
  },
]

export default function Packages() {
  const [ref, visible] = useReveal()

  return (
    <section id="paket" className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-forest-600 font-semibold text-sm tracking-wide uppercase">
            Pilih Paket
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-ink-900 text-balance">
            Paket buah untuk setiap skala acara
          </h2>
          <p className="mt-4 text-ink-500 text-lg">
            Harga di bawah adalah estimasi. Konfirmasi harga final & menu sesuai kebutuhan acara Anda lewat WhatsApp.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 reveal ${
            visible ? 'is-visible' : ''
          }`}
        >
          {PACKAGES.map((pkg) => (
            <PackageCard key={pkg.name} pkg={pkg} featured={pkg.featured} />
          ))}
        </div>
      </div>
    </section>
  )
}
