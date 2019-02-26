import { Injectable } from "@angular/core";

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

    constructor() {}

    getAllUsers() {
        return this.users;
    }
}