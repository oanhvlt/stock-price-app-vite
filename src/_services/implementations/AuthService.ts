import { User } from '@/_domain/entities/entities';
import { IAuthService } from '../../_application/ports/IAuthService';
import { login, register } from '../api/userApi';

export class AuthService implements IAuthService {
    async login(username: string, password: string): Promise<User> {
        return await login(username, password);
    }

    async register(username: string, email: string, password: string): Promise<User> {
        return await register(username, email, password);
    }

    async logout(): Promise<void> {
        // Logic for logging out the user
    }
}