declare module 'next/link' {
  import { ComponentType, ReactNode } from 'react'
  
  interface LinkProps {
    href: string
    as?: string
    replace?: boolean
    scroll?: boolean
    shallow?: boolean
    passHref?: boolean
    prefetch?: boolean
    children: ReactNode
    className?: string
    style?: React.CSSProperties
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
  }
  
  const Link: ComponentType<LinkProps>
  export default Link
}

declare module 'next/image' {
  import { ComponentType, ImgHTMLAttributes } from 'react'
  
  interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> {
    src: string
    alt: string
    width?: number
    height?: number
    fill?: boolean
    priority?: boolean
    placeholder?: 'blur' | 'empty'
    blurDataURL?: string
    quality?: number
    sizes?: string
    loader?: (props: { src: string; width: number; quality?: number }) => string
  }
  
  const Image: ComponentType<ImageProps>
  export default Image
}
