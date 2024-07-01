import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
    username: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
    }),
    password: z.string().min(6, {
        message: 'Password must be at least 6 characters.',
    }),
});

const LoginPage: React.FC = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
            password: '',
        },
    });

    const handleLogin = (values: z.infer<typeof formSchema>) => {
        console.log('Login', values);
    };

    return (
        <div className="flex items-center justify-center h-screen bg-black">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleLogin)}
                    className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-sm space-y-6"
                >
                    <h2 className="text-center text-white text-2xl mb-6">Vietcap</h2>
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Username" {...field} className="mb-4" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input type="password" placeholder="Password" {...field} className="mb-4" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full bg-green-500 hover:bg-green-600">
                        LOG IN
                    </Button>
                    <div className="text-center text-white mt-4">
                        <a href="#" className="underline text-sm">
                            Forgot password?
                        </a>
                    </div>
                    <div className="text-center text-white mt-4">
                        Don't have a Vietcap account?{' '}
                        <a href="#" className="underline text-sm">
                            Sign up now
                        </a>
                    </div>
                    <div className="text-center text-white mt-4">
                        <a href="#" className="underline text-sm">
                            GO BACK TO PREVIOUS PAGE
                        </a>
                    </div>
                </form>
            </Form>
        </div>
    );
};

export default LoginPage;
