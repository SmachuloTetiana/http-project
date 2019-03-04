import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface Users {
    id: number,
    name: string
}

@Injectable()
export class UserService {

    private users: Users[] = [
        {
            id: 1,
            name: 'Tania'
        },
        {
            id: 2,
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

    addUser(user: Users) {
        this.users.push(user);
    }

    getUser() {
        return this.users;
    }
    
}