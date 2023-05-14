interface Props { 
    name: string
}
const CardContent = ({name}: Props) => {
  return (
    <span>{name}</span>
  )
}

export default CardContent