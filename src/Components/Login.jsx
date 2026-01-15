import React from 'react';

const Login = () => {
    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleLogin();
                }}
                style={{ padding: "20px" }}
            >
                <h2>Login</h2>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <br /><br />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <br /><br />

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;