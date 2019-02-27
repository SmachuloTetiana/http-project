import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UserService {

    private users = [
        {
            name: 'Tania'
        },
        {
            name: 'Yura'
        }
    ];

    constructor(private http: HttpClient) {}

    getAllUsers() {
        // return this.users;
        return this.http.get('https://jsonplaceholder.typicode.com/users');
    }
}