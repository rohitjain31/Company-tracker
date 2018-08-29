import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class TargetInfo {

    public companiesInfo = [
        {
            name: 'Amex',
            status: 'approved',
            info: 'The American Express Company, also known as Amex',
            keyContacts: [
                {
                    name: 'john doe',
                    email: 'john@amex.com'
                },
                {
                    name: 'jane doe',
                    email: 'jane@amex.com'
                }
            ],
            financialPerformance: {
                revenue: [
                    { year: '2017', value: '7000cr' },
                    { year: '2016', value: '6200cr' },
                    { year: '2015', value: '5500cr' }
                ],
                profit: [
                    { year: '2016', value: '800cr' },
                    { year: '2015', value: '500cr' },
                    { year: '2014', value: '300cr' }
                ]
            }
        }
    ];

    constructor() {}

    public getDefaultTargetInfo() {
        return this.companiesInfo;
    }
}
