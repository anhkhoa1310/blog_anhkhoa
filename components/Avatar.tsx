import Image from 'next/image'

interface AvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  showInitials?: boolean
}

export default function Avatar({ 
  size = 'md', 
  className = '',
  showInitials = true 
}: AvatarProps) {
  const sizeClasses = {
    sm: 'w-16 h-16 text-lg',
    md: 'w-24 h-24 text-2xl',
    lg: 'w-32 h-32 text-4xl',
    xl: 'w-40 h-40 text-5xl'
  }

  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      {/* Try to load avatar image first */}
      <div className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg overflow-hidden relative">
    <Image
      src="/avatar.jpg"
      alt="Ảnh đại diện"
      fill
      className="object-cover object-center rounded-full border-2 border-primary-600 "
      priority
    />
  </div>
      
      
    </div>
  )
}
