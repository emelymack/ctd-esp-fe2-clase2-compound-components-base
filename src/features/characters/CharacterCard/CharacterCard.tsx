import { ReactNode } from "react"
import CardPicture from "./CardPicture"

interface Props {
    children: ReactNode
}
const CharacterCard = ({children}: Props) => (
    <div className={"card"}>
      {children}
    </div>
)

export default CharacterCard