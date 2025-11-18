import { User } from 'lucide-react'

export default function Avatar({ src, alt, size = 'md', name }) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  }
  
  const getInitials = (name) => {
    return name?.split(' ').map(n => n[0]).join('').toUpperCase() || 'U'
  }
  
  if (src) {
    return (
      <img
        src={src}
        alt={alt || name}
        className={`${sizes[size]} rounded-full object-cover border-2 border-slate-700`}
      />
    )
  }
  
  return (
    <div className={`${sizes[size]} rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center border-2 border-slate-700`}>
      {name ? (
        <span className="text-white font-bold">{getInitials(name)}</span>
      ) : (
        <User className="w-1/2 h-1/2 text-white" />
      )}
    </div>
  )
}
