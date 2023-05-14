import 'features/characters/characters.css';
import Character from './characters.types';

import { charactersApi } from './characters.endpoints';
import CharactersComponent, { CharactersComponentProps } from './characters.component';

import { CharacterCard } from './CharacterCard';

export { CharactersComponent, charactersApi };
export type { Character, CharactersComponentProps };
