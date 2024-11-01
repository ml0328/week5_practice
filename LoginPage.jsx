import styled from "styled-components";
import useForm from "../hooks/use-form.js";
import { validateLogin } from "../utils/validate.js";

const LoginPage = () => {
    const login = useForm( {
        initialValue: {
            email:'',
            password: '',
        },
        validate: validateLogin
    })

    const handlePressLogin = () => {
        console.log(login.values.email, login.values.password)
    }
    
    return (
        <container>
            <Input error={login.touched.email && login.errors.password} type={'email'} 
            placeholder = {'이메일을 입력해주세요.'} {...login.getTextInputProps('email')}/>
            {login.touched.email && login.errors.email && <ErrorText>{login.errors.email}</ErrorText>}
            <Input error={login.touched.password && login.errors.password} type = {'password'} 
            placeholder = {'비밀번호를 입력해주세요.'} {...login.getTextInputProps('password')}/>
            {login.touched.password && login.errors.password && <ErrorText>{login.errors.email}</ErrorText>}

            <button onClick = {handlePressLogin}>로그인</button>
        
        </container>
    );
};

export default LoginPage;

const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`
const InputWrapper = styled.div`
    display: flex;
    flex-direction: column; /* 세로 방향으로 정렬 */
    align-items: center; /* 중앙 정렬 */
    margin: 10px 0; /* 위아래 간격 */
`

const Input = styled.input `
    margin: 10px 0;
    padding: 8px;
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 4px;
    
    border: ${props => props.error ? '4px solid red' : '1px solid #ccc'};
    
    &:focus {
        border-color: #007bff;
        }
`

const ErrorText = styled.h1`
    color: red;
    font-size: 12px;
    margin-top: 5px; 
`
const LoginButton = styled.button`
    padding: 10px 20px;
    color: white; 
    border: none; 
    border-radius: 4px; 
    cursor: pointer; 
    font-size: 16px; 
    margin-top: 10px; 
`