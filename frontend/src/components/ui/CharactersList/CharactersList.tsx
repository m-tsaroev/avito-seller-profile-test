import { Group, Text } from '@mantine/core'

import { CHARACTERS_KEYS, CHARACTERS_VALUES } from '@/constants/charactersKeys'

import type {
	CharactersListProps,
	ConditionParamType,
	ParamsKeysType,
	TransmissionParamType,
	TypeParamType
} from './CharactersList.types'

const CharactersList = (props: CharactersListProps) => {
	const { params } = props

	return (
		<Group display='grid'>
			{Object.entries(params).map(
				([key, value], index) =>
					!!value && (
						<Group key={index} gap='12px'>
							<Text fw={600} c='gray' w='150px'>
								{CHARACTERS_KEYS[key as ParamsKeysType]}
							</Text>
							<Text>
								{key === 'type'
									? CHARACTERS_VALUES['type'][value as TypeParamType]
									: key === 'condition'
										? CHARACTERS_VALUES['condition'][
												value as ConditionParamType
											]
										: key === 'transmission'
											? CHARACTERS_VALUES['transmission'][
													value as TransmissionParamType
												]
											: value}
							</Text>
						</Group>
					)
			)}
		</Group>
	)
}

export { CharactersList }
