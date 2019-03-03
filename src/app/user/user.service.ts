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

    sendServers(servers: any[]) {
        return this.http.post('https://users-91eaa.firebaseio.com/data.json', servers);
    }

    getServers() {
        return this.http.get('https://users-91eaa.firebaseio.com/data.json');
    }
}