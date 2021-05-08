import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Developer } from 'src/app/layout/components/developer/models/developer.model';
import { BaseService } from './common/base.service';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService extends BaseService {

    private url = 'http://localhost:8090/developer';
    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    public getAllDevelopers(): Promise<Developer[]> {
        return this.serviceGet({
            url: this.url,
            headers: this.httpHeaders,
            callback: (response: any) => this.convertDevelopersFromReport(response?.body),
            result: null
        });
    }

    public addDeveloper(developer: Developer): Promise<void> {
        return this.servicePost({
            url: this.url,
            params: developer,
            headers: this.httpHeaders,
            callback: (response: any) => response?.body,
            result: null
        });
    }

    public modifyDeveloper(developer: Developer): Promise<Developer> {
        return this.servicePut({
            url: `${this.url}/${developer.id}`,
            params: developer,
            headers: this.httpHeaders,
            callback: (response: any) => response?.body,
            result: null
        });
    }

    public deleteDeveloper(developer: Developer): Promise<void> {
        return this.serviceDelete({
            url: `${this.url}/${developer.id}`,
            headers: this.httpHeaders,
            callback: (response: any) => response?.body,
            result: null
        });
    }

}
