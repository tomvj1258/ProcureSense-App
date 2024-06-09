/* eslint-disable react/display-name */
'use client';

import { encode_token, decode_token } from '@/utils/jwt';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useEffect, useState } from 'react';

const Login = async ({ email, password }) => {
    const encoded_payload = { email: email, password: encode_token({ password: password }) }

    try {
        const response = await axios.post('http://localhost:8080/api/v1/login', encoded_payload)
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

const Logout = () => {
    try {

    }
    catch (error) {
        throw error
    }
}

const Register = (payload) => {
    try {

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
            const decoded = decode_token(session_token);
            return !!decoded;
        }
        catch (error) {
            toast.error("You are not authenticated. Please login to continue.");
            return false;
        }
    }
};

const AuthWrapper = (WrappedComponent) => {
    return (props) => {

        const router = useRouter();
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            if (!isAuthenticated()) router.replace('/login');
            else setLoading(false);
        }, [router]);

        if (loading) {
            return <p>Loading...</p>;
        }

        return <WrappedComponent />;
    }
}

export { Login, Logout, Register, AuthWrapper }
