type SvgIconProps = {
  src: string
  alt: string
  className?: string
}

const SvgIcon: React.FC<SvgIconProps> = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={`size-5 ${className}`} />
)

export default SvgIcon
