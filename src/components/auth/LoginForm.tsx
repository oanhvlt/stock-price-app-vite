import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface LoginFormProps {
    onLogin: (username: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onLogin(username, password);
    };

    return (
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
                    placeholder='password'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mb-4"
                />
            </div>
            <Button type="submit" className="w-full mt-2">
                Log In
            </Button>
        </form>
    );
};

export default LoginForm;
