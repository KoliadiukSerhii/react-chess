import { Colors } from '../Colors';
import { Cell } from '../Cell';
import logo from '../../assets/black-king.png';

export enum FigureNames {
	FIGURE = 'figure',
	KING = 'king',
	KNIGHT = 'knight',
	PAWN = 'pawn',
	QUEEN = 'queen',
	ROOK = 'rook',
	BISHOP = 'bishop',
}

export class Figure {
	color: Colors;
	cell: Cell;
	logo: typeof logo | null;
	name: FigureNames;
	id: number;

	constructor(color: Colors, cell: Cell) {
		this.color = color;
		this.cell = cell;
		this.cell.figure = this;
		this.logo = null;
		this.name = FigureNames.FIGURE;
		this.id = Math.random();
	}

	canMove(target: Cell): boolean {
		if (target.figure?.color === this.color) return false;
		if (target.figure?.name === FigureNames.KING) return false;
		return true;
	}

	moveFigure(target: Cell) {}
}
