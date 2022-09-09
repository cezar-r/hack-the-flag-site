import React, { useState } from "react";
import Canvas from "./Canvas";

const MatrixBG = (props) => {
	const [ctx, setCtx] = useState(null);
	const [canvasWidth, setCanvasWidth] = useState(null);

	const establishContext = (context) => {
		setCtx(context);
	};

	const establishCanvasWidth = (width) => {
		setCanvasWidth(width);
	};

	// Setting up the letters
	// Move the array outside draw so it is not needlessly recalculated on each call to draw
	const chars =
		"10";
	const letters = chars.split("");

	// Font-size remains constant, so similarly move outside draw
	const fontSize = 10;
	// Setting up the columns
	const columns = canvasWidth ? canvasWidth / fontSize : 10;
	// Setting up the drops
	const drops = [];
	for (let i = 0; i < columns; i++) {
		drops[i] = Math.random() * (-500 - 1) + 1;
	}

	const convertMousePosToRowsAndCols = (x, y) => {
		// get col position
		const col = Math.floor(x / fontSize);

		// get row pos
		const row = Math.min(Math.ceil(y / fontSize), Math.floor(ctx.canvas.height));

		return { row, col };
	};

	// Disturbance Effect Handlers
	let disturbanceRow = -1;
	let disturbanceCol = -1;
	let timeout;

	const disturbanceEffect = (e) => {
		clearTimeout(timeout);
		const bounds = e.target.getBoundingClientRect();
		const x = e.clientX - bounds.left;
		const y = e.clientY - bounds.top;
		const { row, col } = convertMousePosToRowsAndCols(x, y);
		disturbanceRow = row;
		disturbanceCol = col;
		timeout = setTimeout(() => {
			disturbanceRow = -1;
			disturbanceCol = -1;
		}, 50);
	};

	const isDisturbanceAffectedPosition = (dropIndex) => {
		return drops[dropIndex] * fontSize > disturbanceRow && dropIndex === disturbanceCol;
	};

	const draw = () => {
		if (ctx) {
			ctx.fillStyle = "rgba(0, 0, 0, .1)";
			ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
			for (let i = 0; i < drops.length; i++) {
				const text = letters[Math.floor(Math.random() * letters.length)];
				ctx.fillStyle = "#0f0";
				ctx.fillText(text, i * fontSize, drops[i] * fontSize);
				drops[i]++;
				if (drops[i] * fontSize > ctx.canvas.height && Math.random() > 0.95) {
					drops[i] = 0;
				}
				if (isDisturbanceAffectedPosition(i)) {
					const h = Math.max(i - 1, 0);
					const j = Math.min(i + 1, Math.floor(columns));
					drops[h] = disturbanceRow;
					drops[i] = disturbanceRow;
					drops[j] = disturbanceRow;
				}
			}
		}
	};

	return (
		<Canvas
			draw={draw}
			onMouseMove={disturbanceEffect}
			establishContext={establishContext}
			establishCanvasWidth={establishCanvasWidth}
		/>
	);
};

export default MatrixBG;