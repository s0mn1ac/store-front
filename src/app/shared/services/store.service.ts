import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from 'src/app/layout/components/store/models/store.model';
import { BaseService } from './common/base.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService extends BaseService {

    private url = 'http://localhost:8090/store';
    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    public getAllStores(): Promise<Store[]> {
        return this.serviceGet({
            url: this.url,
            headers: this.httpHeaders,
            callback: (response: any) => this.convertStoresFromReport(response?.body),
            result: null
        });
    }

    public addCustomer(store: Store): Promise<Store[]> {
        return this.servicePost({
            url: this.url,
            params: store,
            headers: this.httpHeaders,
            callback: (response: any) => response?.body,
            result: null
        });
    }

    public modifyStore(store: Store): Promise<Store[]> {
        return this.servicePut({
            url: `${this.url}/${store.id}`,
            params: store,
            headers: this.httpHeaders,
            callback: (response: any) => response?.body,
            result: null
        });
    }

    public deleteStore(store: Store): Promise<Store[]> {
        return this.serviceDelete({
            url: `${this.url}/${store.id}`,
            headers: this.httpHeaders,
            callback: (response: any) => response?.body,
            result: null
        });
    }

    private convertStoresFromReport(report: any[]): Store[] {

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

}
