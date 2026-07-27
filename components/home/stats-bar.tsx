const stats = [
    { value: 'WHO-GMP', label: 'Certified' },
  { value: 'ISO 9001:2015', label: 'Quality Standards' },
  { value: 'FSSAI', label: 'Approved' },
  
  { value: '100%', label: 'Made in India' },
]

export function StatsBar() {
  return (
    <section className="bg-brand-navy">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4 md:px-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-heading text-3xl font-extrabold text-white md:text-4xl">
              {s.value}
            </p>
            <p className="mt-1 text-sm text-white/70">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
