"use strict";

/**************************
 * Import important stuff *
 **************************/

import React from "react";

/**************************
 * The CodeView component *
 **************************/

function CodeView({grid, program, instructionPointer}) {
	return (
		<table className="fish-program-code-view fish-code text-center">
			<tbody>
				{grid.map((row, y) => (
					<tr key={y}>
						{[...Array(program.width)].map((_,x) => {
							const cell = row[x];
							// Check if this is where the instruction pointer is
							let classNames = new Set();
							if (Math.max(instructionPointer.x, 0) === x && instructionPointer.y === y) {	// XXX The IP starts at x = -1, but will never go there again
								classNames.add("active");
							}
							if (cell === undefined) {
								classNames.add('outside');
							}
							return (<td key={x} className={"fish-code-cell " + Array.from(classNames.values()).join(' ')}>{cell === undefined? ' ' : String.fromCharCode(cell)}</td>);
						})}
					</tr>
				))}
			</tbody>
		</table>
	);
}

/*************
 * Export it *
 *************/

export default CodeView;
export {
	CodeView
};
