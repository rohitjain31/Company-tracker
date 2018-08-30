import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class TargetService {

    public companiesInfo = [
        {
            id: '1',
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
                    { year: '2017', value: 800 },
                    { year: '2016', value: 500 },
                    { year: '2015', value: 300 }
                ]
            }
        },
        {
            id: '2',
            name: 'Ernst & Young',
            status: 'researching',
            info: 'EY is a multinational professional services firm',
            keyContacts: {
                name: 'Scotsman',
                email: 'Scotsman@ey.com'
            },
            financialPerformance: {
                revenue: [
                    { year: '2017', value: 10000 },
                    { year: '2016', value: 8200 },
                    { year: '2015', value: 4500 }
                ],
                profit: [
                    { year: '2017', value: 1800 },
                    { year: '2016', value: 1500 },
                    { year: '2015', value: 700 }
                ]
            }
        },
        {
            id: '3',
            name: 'Filpkart',
            status: 'pending approval',
            info: 'Flipkart Pvt Ltd. is an Indian electronic commerce company',
            keyContacts: {
                name: 'Sachin Bansal',
                email: 'sachin@flipkart.com'
            },
            financialPerformance: {
                revenue: [
                    { year: '2017', value: 4000 },
                    { year: '2016', value: 3200 },
                    { year: '2015', value: 2700 }
                ],
                profit: [
                    { year: '2017', value: 800 },
                    { year: '2016', value: 500 },
                    { year: '2015', value: 300 }
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

    public updateTargetInfo(data, id) {
        this.companiesInfo = this.companiesInfo.map(elem => {
            return elem.id === id ? data : elem;
        })

        return Observable.of(this.companiesInfo);
    }

    public deleteTargetInfo(id) {
        this.companiesInfo = this.companiesInfo.filter(elem => elem.id !== id);
        return Observable.of(this.companiesInfo);
    }
}
