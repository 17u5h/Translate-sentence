import React, {useEffect, useState} from 'react';
import BackgroundSlot from "../atoms/BackgroundSlot";
import {usePhrasesStore} from "../../../store/initialPhrasesStore";

type Slot = {
	id: number
}

const BackgroundSlots = () => {
	const { constructorArrayInitialLength } = usePhrasesStore(({ constructorArrayInitialLength }) => ({constructorArrayInitialLength}))
	const [slots, setSlots] = useState<Slot[]>()

	useEffect(() => {
		const slotsArray = []
		for (let i = 0; slotsArray.length < constructorArrayInitialLength; i++) {
			slotsArray.push({id: i + 1})
		}
		setSlots(slotsArray)
	},[constructorArrayInitialLength])

	return (
		<>
			{slots && slots.map((el, index) => (<BackgroundSlot key={el.id} index={index} />))}
		</>
	);
};

export default BackgroundSlots;