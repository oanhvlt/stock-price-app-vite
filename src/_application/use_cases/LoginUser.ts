import { IAuthService } from '@/_application/ports/IAuthService';

export class LoginUser {
    constructor(private authService: IAuthService) { }

    async execute(username: string, password: string) {
        return await this.authService.login(username, password);
    }
}
