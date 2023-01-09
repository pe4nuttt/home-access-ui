import request from '@/utils/request';

export const login = (data) => {
    return request({
        url: 'Account/Login',
        method: 'post',
        data,
    });
};
