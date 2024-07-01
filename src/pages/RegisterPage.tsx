import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AuthService } from '@/_services/implementations/AuthService';
import { RegisterUser } from '@/_application/use_cases/RegisterUser';

const RegisterPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const authService = new AuthService();
    const registerUser = new RegisterUser(authService);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const user = await registerUser.execute(username, email, password);
        console.log(user);
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-900">
            <form onSubmit={handleSubmit} className="p-4 border rounded">
                <div>
                    <Input
                        placeholder='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="mb-4"
                    />
                </div>
                <div>
                    <Input
                        placeholder='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mb-4"
                    />
                </div>
                <div>
                    <Input
                        placeholder='password'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mb-4"
                    />
                </div>
                <Button type="submit" className="w-full mt-2">
                    Register
                </Button>
            </form>
        </div>
    );
};

export default RegisterPage;
