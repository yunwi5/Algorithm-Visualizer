import { useState, useEffect, useCallback } from "react";
import SectionNav from "./SectionNav";
import { PlayMode } from "../../../models/sudoku-model";
import UserSudoku from "./UserSudoku";
import SudokuSolver from "./SudokuSolver";
import classes from "./SudokuSection.module.scss";

interface Props {
	isBegin: boolean;
	speed: number;
	grid: number[][];
	onComplete: () => void;
}

const SudokuSection: React.FC<Props> = (props) => {
	const { isBegin, speed, grid, onComplete } = props;
	const [ playMode, setPlayMode ] = useState(PlayMode.MACHINE);
	// User message
	const [ timeElapsed, setTimeElapsed ] = useState<number | null>(null);

	// show solution
	const [ showSolution, setShowSolution ] = useState(false);

	const changeModeHandler = (newMode: PlayMode) => {
		setPlayMode(newMode);
		setTimeElapsed(null);
	};

	const timeDisplayHandler = (time: number | null) => {
		setTimeElapsed(time);
	};

	useEffect(
		() => {
			setShowSolution(false);
			onComplete();
		},
		[ grid ]
	);

	useEffect(
		() => {
			if (isBegin) setShowSolution(false);
		},
		[ isBegin ]
	);

	useEffect(
		() => {
			if (showSolution) onComplete();
		},
		[ showSolution ]
	);

	console.log("Is begin:", isBegin);

	return (
		<section className={classes["sudoku-section"]}>
			<SectionNav
				isBegin={isBegin}
				timeElapsed={timeElapsed}
				playMode={playMode}
				onChangeMode={changeModeHandler}
				showSolution={showSolution}
				onTerminate={() => setShowSolution(true)}
			/>
			{playMode === PlayMode.MACHINE ? (
				<SudokuSolver
					isBegin={isBegin}
					speed={speed}
					grid={grid}
					showSolution={showSolution}
					onComplete={onComplete}
					onTime={timeDisplayHandler}
				/>
			) : (
				<UserSudoku grid={grid} onComplete={onComplete} onTime={timeDisplayHandler} />
			)}
		</section>
	);
};

export default SudokuSection;