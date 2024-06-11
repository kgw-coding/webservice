function Welcome(props) {
    const {userName, setIsLoggedIn, setUserName} = props;

    const onClickLogOut = async () => {
        localStorage.removeItem('jwt');
        setIsLoggedIn(false);
        alert('로그아웃 성공! 토큰을 지웠습니다.');
        setUserName('');
    };

    return(
        <div>
            <h2>{userName}님 환영합니다!</h2>
            <button onClick={onClickLogOut}>로그아웃</button>

        </div>
    )
}

export default Welcome;