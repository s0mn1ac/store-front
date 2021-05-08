import { StatusEnum } from "src/app/shared/enums/status.enum";
import { Customer } from "../../../customer/models/customer.model";
import { Game } from "../../../game/components/models/game.model";
import { Store } from "../../../store/models/store.model";

export class Order {

    id!: number;
    reference!: number;
	status!: StatusEnum;
	game!: Game;
	customer!: Customer;
	store!: Store;

}
