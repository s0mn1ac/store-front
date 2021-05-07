import { Injectable } from '@angular/core';
import { CustomerService } from '../customer.service';
import { DeveloperService } from '../developer.service';
import { StoreService } from '../store.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    public customerService: CustomerService,
    public developerService: DeveloperService,
    public storeService: StoreService
  ) { }

}
