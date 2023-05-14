import CardActions from './CardActions'
import CardContent from './CardContent'
import CardPicture from './CardPicture'
import Card from './CharacterCard'

// le asignamos los children a la CharacterCard
export const CharacterCard = Object.assign(Card, {
    Picture: CardPicture,
    Content: CardContent,
    Actions: CardActions
})