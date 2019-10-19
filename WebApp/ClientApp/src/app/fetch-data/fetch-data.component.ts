import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/data.service';

@Component({
    selector: 'app-fetch-data',
    templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
    public forecasts: WeatherForecast[];
    public values: string[];

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string,
        public dataService: DataService
    ) {
        // http.get<WeatherForecast[]>(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
        //     this.forecasts = result;
        // }, error => console.error(error));

        dataService.getValues().subscribe(resp => {
            this.values = resp;
        });
    }
}

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}
