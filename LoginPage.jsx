import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const LoginPage = () => {
    // 유효성 검사 스키마 정의
    const schema = yup.object().shape({
        email: yup.string()
            .email('올바른 이메일 형식이 아닙니다.')
            .required('이메일을 반드시 입력해주세요!!'),
        password: yup.string()
            .min(8, '비밀번호는 8자 이상이어야 합니다.')
            .max(16, '비밀번호는 8-16자 사이로 입력해주시요!')
            .required('비밀번호는 필수입니다.'),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange', // 실시간 검사를 위한 설정
    });

    const onSubmit = (data) => {
        console.log('로그인 데이터 제출');
        console.log(data);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#000' }}>
            <h1 style={{ color: '#fff' }}>로그인</h1>
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <input type="email" placeholder="이메일을 입력하세요" {...register("email")}
                    style={{ margin: '10px 0', padding: '10px', width: '250px' }}
                />
                <p style={{ color: 'red' }}>{errors.email?.message}</p>

                <input type="password" placeholder="비밀번호를 입력하세요" {...register("password")}
                    style={{ margin: '10px 0', padding: '10px', width: '250px' }}
                />
                <p style={{ color: 'red' }}>{errors.password?.message}</p>
                
                <button type="submit" style={{ padding: '10px 20px', backgroundColor: 'red', color: '#fff'}}>
                    로그인
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
