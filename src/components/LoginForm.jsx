import { useState } from 'react';
import axios from 'axios';

function LoginForm(props) {
    const {styleData, setIsLoggedIn, setUserName} = props;
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');

    const onClickBtn = async () => {
        try {
            if (id.length > 0 && pwd.length > 0) {
                if (pwd.length >= 4) {
                    const response = await axios.post('http://localhost:3000/token/login', { id, pwd });
                    const { token, userName } = response.data;
                    localStorage.setItem('jwt', token);
                    setUserName(userName);
                    setIsLoggedIn(true);
                    setId('');
                    setPwd('');
                    alert('로그인 성공! 토큰이 저장되었습니다.');
                    console.log(response);
                } else {
                    alert('패스워드는 최소 4자리 이상 입력하세요');
                }
            } else {
                alert('아이디, 패스워드를 입력하세요');
            }
        } catch (error) {
            alert('로그인 실패: ' + error);
        }
    };

    const onClickLogOut = async () => {
        localStorage.removeItem('jwt');
        setIsLoggedIn(false);
        alert('로그아웃 성공! 토큰을 지웠습니다.');
        setUserName('');
    };

    return (
            <div style = {styleData}>
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder="ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                />
                <button onClick={onClickBtn}>로그인 하기</button>
            </div>
    );
}

export default LoginForm;
