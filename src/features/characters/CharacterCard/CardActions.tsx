import { FollowingButtonComponent } from 'features/following/button'
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { addCharacterToFollowingList, removeCharacterToFollowingList } from 'features/following/following.slices';

interface Props {
    id: number
}
const CardActions = ({id}: Props) => {
  const followingIds = useAppSelector((state) => state.following.followingIds);
  const dispatch = useAppDispatch()

  const onToggleFavorite = (setFav: boolean) => {
    if (setFav) {
      dispatch(addCharacterToFollowingList(id));
    } else {
      dispatch(removeCharacterToFollowingList(id));
    }
  };

  return (
    <FollowingButtonComponent
        isFav={followingIds.indexOf(id) >= 0}
        onToggleFavorite={(setFav) => onToggleFavorite(setFav)}
    />
  )
}

export default CardActions