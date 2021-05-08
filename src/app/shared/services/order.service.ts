import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from 'src/app/layout/components/order/components/models/order.model';
import { BaseService } from './common/base.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends BaseService {

    private url = 'http://localhost:8090/order';
    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    public getAllOrders(): Promise<Order[]> {
        return this.serviceGet({
            url: this.url,
            headers: this.httpHeaders,
            callback: (response: any) => this.convertOrdersFromReport(response?.body),
            result: null
        });
    }

    public addOrder(order: Order): Promise<void> {
        return this.servicePost({
            url: this.url,
            params: order,
            headers: this.httpHeaders,
            callback: (response: any) => response?.body,
            result: null
        });
    }

    public modifyOrder(order: Order): Promise<Order> {
        return this.servicePut({
            url: `${this.url}/${order.id}`,
            params: order,
            headers: this.httpHeaders,
            callback: (response: any) => response?.body,
            result: null
        });
    }

    public deleteOrder(order: Order): Promise<void> {
        return this.serviceDelete({
            url: `${this.url}/${order.id}`,
            headers: this.httpHeaders,
            callback: (response: any) => response?.body,
            result: null
        });
    }

}
