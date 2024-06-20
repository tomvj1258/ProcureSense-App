/* eslint-disable react/display-name */
'use client';

import { encode_token, decode_token } from '@/utils/jwt';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useEffect, useState } from 'react';
import { userStore } from '@/stores/user';
import Loader from '@/components/pages/loader';
import AxiosConnector from '@/utils/axios';

const Login = async ({ email, password }) => {
    try {
        const encoded_payload = { email: email, password: encode_token({ password: password }) }

        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`, encoded_payload)
        const { token } = response.data.data

        const decoded_token = decode_token(token)

        if (typeof window !== 'undefined') {
            sessionStorage.setItem('session_token', token)
        }

        return decoded_token
    }
    catch (error) {
        throw error
    }
}

const Register = async ({ email, password, firstName, lastName }) => {
    try {
        const encoded_payload = { email: email, password: encode_token({ password: password }), firstName: firstName, lastName: lastName }

        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/register`, encoded_payload)
        const { token } = response.data.data

        const decoded_token = decode_token(token)

        if (typeof window !== 'undefined') {
            sessionStorage.setItem('session_token', token)
        }

        return decoded_token
    }
    catch (error) {
        throw error
    }
}

const Logout = async () => {
    try {
        const axios_instance = new AxiosConnector(`${process.env.NEXT_PUBLIC_BACKEND_URL}/logout`, 'application/json')
        await axios_instance.post('/logout')

        if (typeof window !== 'undefined') {
            sessionStorage.removeItem('session_token')
        }

    }
    catch (error) {
        throw error
    }
}

const isAuthenticated = () => {

    if (typeof window !== 'undefined') {
        const session_token = sessionStorage.getItem('session_token');

        if (!session_token) return false;

        try {
            const decoded_token = decode_token(session_token);
            return { status: !!decoded_token, data: decoded_token };
        }
        catch (error) {
            toast.error("You are not authenticated. Please login to continue.");
            return false;
        }
    }
};

const AuthWrapper = (WrappedComponent) => {
    return ({ children }) => {
        const router = useRouter();
        const [loading, setLoading] = useState(true);
        const { setUserData } = userStore();

        useEffect(() => {
            const { status, data } = isAuthenticated();
            if (!status) router.replace('/login');
            else {
                setUserData(data);
                setLoading(false);
            }
        }, [router]);

        if (loading) {
            return <Loader />;
        }
        return (<WrappedComponent >{children}</WrappedComponent>);
    }
}

export { Login, Logout, Register, AuthWrapper }
