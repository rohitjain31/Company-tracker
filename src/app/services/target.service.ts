import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class TargetService {

    public companiesInfo = [
        {
            name: 'Amex',
            status: 'approved',
            info: 'The American Express Company, also known as Amex',
            keyContacts: {
                name: 'john doe',
                email: 'john@amex.com'
            },
            financialPerformance: {
                revenue: [
                    { year: '2017', value: 7000 },
                    { year: '2016', value: 6200 },
                    { year: '2015', value: 5500 }
                ],
                profit: [
                    { year: '2016', value: 800 },
                    { year: '2015', value: 500 },
                    { year: '2014', value: 300 }
                ]
            }
        }
    ];

    public constructor() {}

    public getDefaultTargetInfo() {
        return Observable.of(this.companiesInfo);
    }

    public addToTargetInfo(data) {
        this.companiesInfo.push(data);
        return Observable.of(this.companiesInfo);
    }
}
