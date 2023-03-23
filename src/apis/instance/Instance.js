import axios from 'axios'

// const BASE_URL = 'https://pjs.or.kr:8080/api';
const BASE_URL = 'http://localhost:8080/';
// url 호출 시 기본 값 셋팅

const api = axios.create({
    baseURL: BASE_URL,
});

// 요청 인터셉터
// 단순 get요청으로 인증값이 필요없는 경우
const axiosApi = (options) => {
    return axios.create({ baseURL: BASE_URL, ...options })
}


// post, delete등 api요청 시 인증값이 필요한 경우
const axiosAuthApi  = (options) => {
    const token= localStorage.getItem("accessToken");
    return axios.create({
        baseURL: BASE_URL,
        headers: { Authorization: 'Bearer ' + token },
        ...options,
    })
}

// 응답 인터셉터
api.interceptors.response.use(
    function (response) {
        // 2xx 번대 응답코드의 응답에 대한 인터셉터
        console.log("get response", response);
        return response;
    },
    async (error) => {
        const {
            config,
            response: { status },
        } = error;
        if (status === 401) {
            console.log(error)
            if (error.response.data.message === "TokenExpiredError") {
                const originalRequest = config;
                // token refresh 요청
                const { data } = await axios.get(
                    `http://localhost:3000/auth/reissue`,
                );
                // 새로운 토큰 저장
                // dispatch(userSlice.actions.setAccessToken(data.data.accessToken)); store에 저장
                const { accessToken: newAccessToken,
                    refreshToken: newRefreshToken
                } = data;
                await localStorage.setItem("accessToken", newAccessToken);
                originalRequest.headers.authorization = `Bearer ${newAccessToken}`;
                // 401로 요청 실패했던 요청 새로운 accessToken으로 재요청
                return axios(originalRequest);
            }
        }
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        console.log("response error", error);
        return Promise.reject(error);
    }
);

export default api;

//권한이 필요없는 api 호출 인터셉터
export const noAuhApi = axiosApi(BASE_URL)
//권한이 필요한 api 호출 인터셉터
export const needAuthApi = axiosAuthApi (BASE_URL)