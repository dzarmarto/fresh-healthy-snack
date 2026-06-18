// Konfigurasi terpusat — ubah di sini untuk update seluruh website

export const BUSINESS = {
  name: 'Fresh & Healthy Snack',
  tagline: 'Snack rapat yang lebih sehat',
  whatsappNumber: '6282130252141', // Ganti dengan nomor WhatsApp asli (format: 62xxxxxxxxxx)
  instagram: 'https://instagram.com/freshhealthysnack.id',
  email: 'hello@freshhealthysnack.id',
  address: 'Jl. Kemang Raya No. 12, Jakarta Selatan, DKI Jakarta',
}

/**
 * Membuat link WhatsApp dengan pesan pre-filled.
 * @param {string} message - Pesan yang akan otomatis terisi.
 */
export function getWhatsAppLink(message = 'Halo, saya ingin pesan paket buah untuk acara kantor.') {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encoded}`
}
