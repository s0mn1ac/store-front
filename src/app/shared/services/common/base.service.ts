import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Customer } from 'src/app/layout/components/customer/models/customer.model';
import { Developer } from 'src/app/layout/components/developer/models/developer.model';
import { Game } from 'src/app/layout/components/game/components/models/game.model';
import { Order } from 'src/app/layout/components/order/components/models/order.model';
import { Store } from 'src/app/layout/components/store/models/store.model';
import { CategoryEnum } from '../../enums/category.enum';
import { StatusEnum } from '../../enums/status.enum';

interface ServiceParams {
    url: string;
    params?: any;
    callback: any;
    loading?: boolean;
    error?: boolean;
    headers?: HttpHeaders;
    responseType?: any;
    result: any;
}

@Injectable()
export class BaseService {

    constructor(protected http: HttpClient, private messageService: MessageService) { }

    protected serviceGet(serviceParams: ServiceParams): any {
        return this.http.get(serviceParams.url,
            this.getOptions(serviceParams))
            .toPromise().then((apiResponse) => serviceParams.callback(apiResponse));
    }

    protected servicePost(serviceParams: ServiceParams): any {
        return this.http.post(serviceParams.url,
            serviceParams.params,
            this.getOptions(serviceParams))
            .toPromise().then((apiResponse) => serviceParams.callback(apiResponse));
    }

    protected servicePut(serviceParams: ServiceParams): any {
        return this.http.put(serviceParams.url,
            serviceParams.params,
            this.getOptions(serviceParams))
            .toPromise().then((apiResponse) => serviceParams.callback(apiResponse));
    }

    protected serviceDelete(serviceParams: ServiceParams): any {
        return this.http.delete(serviceParams.url,
            this.getOptions(serviceParams))
            .toPromise().then((apiResponse) => serviceParams.callback(apiResponse));
    }

    protected convertCustomersFromReport(report: any[]): Customer[] {

        const customers: Customer[] = [];
    
        report?.forEach((reportItem: any) => {
    
            const customer: Customer = new Customer();
        
            customer.id = reportItem.id;
            customer.name = reportItem.name;
            customer.lastname = reportItem.lastname;
            customer.document = reportItem.document;
            customer.email = reportItem.email;
            customer.birthdate = new Date(reportItem.birthdate);
        
            customers.push(customer);
    
        });
    
        return customers;

    }

    protected convertDevelopersFromReport(report: any[]): Developer[] {

        const developers: Developer[] = [];
    
        report?.forEach((reportItem: any) => {
    
            const developer: Developer = new Developer();
        
            developer.id = reportItem.id;
            developer.name = reportItem.name;
            developer.cif = reportItem.cif;
        
            developers.push(developer);
    
        });
    
        return developers;

    }

    protected convertGamesFromReport(report: any[]): Game[] {

        const games: Game[] = [];
    
        report?.forEach((reportItem: any) => {
    
            const game: Game = new Game();
        
            game.id = reportItem.id;
            game.category = CategoryEnum[reportItem.category as keyof typeof CategoryEnum];
            game.developers = this.convertDevelopersFromReport(reportItem.developers);
            game.launch = new Date(reportItem.launch);
            game.pegi = reportItem.pegi;
            game.title = reportItem.title;
        
            games.push(game);
    
        });
    
        return games;

    }

    protected convertOrdersFromReport(report: any[]): Order[] {

        const orders: Order[] = [];
    
        report?.forEach((reportItem: any) => {
    
            const order: Order = new Order();
        
            order.id = reportItem.id;
            order.reference = reportItem.reference;
            order.status = StatusEnum[reportItem.status as keyof typeof StatusEnum];
            order.customer = this.convertCustomersFromReport([reportItem.customer])[0];
            order.game = this.convertGamesFromReport([reportItem.game])[0];
            order.store = this.convertStoresFromReport([reportItem.store])[0];
        
            orders.push(order);
    
        });

        console.log(orders)
    
        return orders;

    }

    protected convertStoresFromReport(report: any[]): Store[] {

        const stores: Store[] = [];
    
        report?.forEach((reportItem: any) => {
    
            const store: Store = new Store();
        
            store.id = reportItem.id;
            store.name = reportItem.name;
            store.address = reportItem.address;
        
            stores.push(store);
    
        });
    
        return stores;

    }

    private getOptions(serviceParams: ServiceParams): any {
        return {
            headers: serviceParams.headers,
            responseType: serviceParams.responseType,
            observe: 'response',
            withCredentials : false
        };
    }

}
