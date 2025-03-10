import React from 'react';
import LoginForm from '../../components/auth/LoginForm';

function LoginPage() {
    return (
        <div className="login-page">
            <h1>로그인</h1>
            <LoginForm />
        </div>
    );
}

export default LoginPage;