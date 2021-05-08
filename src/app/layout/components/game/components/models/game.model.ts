import { CategoryEnum } from "src/app/shared/enums/category.enum";
import { Developer } from "../../../developer/models/developer.model";

export class Game {

    id!: number;
	title!: string;
	launch!: Date;
    pegi!: number;
	category!: CategoryEnum;
	developers!: Developer[];

}
