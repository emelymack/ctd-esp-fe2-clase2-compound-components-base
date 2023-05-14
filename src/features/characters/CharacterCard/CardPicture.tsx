interface Props {
    img: string
}
const CardPicture = ({img}: Props) => {
  return (
    <div className={"card-image"}>
        <img src={img} />
    </div>
  )
}

export default CardPicture