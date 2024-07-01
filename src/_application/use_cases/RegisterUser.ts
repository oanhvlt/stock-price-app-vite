import { User } from '@/_domain/entities/entities';
import { IAuthService } from '../ports/IAuthService';

export class RegisterUser {
    constructor(private authService: IAuthService) { }

    async execute(username: string, email: string, password: string): Promise<User> {
        return await this.authService.register(username, email, password);
    }
}
