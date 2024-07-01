import { User } from "@/_domain/entities/entities";

export interface IAuthService {
    login(username: string, password: string): Promise<User>;
    register(username: string, email: string, password: string): Promise<User>;
    logout(): Promise<void>;
}
