import jwt from 'jsonwebtoken';

const JWT_SECRET = `${process.env.NEXT_PUBLIC_JWT_SECRET}`

const encode_token = (data) => {
    const token = jwt.sign(data, JWT_SECRET, { algorithm: 'HS256' });
    return token;
}

const decode_token = (token) => {
    try {
        const data = jwt.verify(token, JWT_SECRET, { algorithm: 'HS256' });
        return data;
    }
    catch (error) {
        console.log('Error decoding token: ', error.message);
        return null;
    }
}

export { encode_token, decode_token }