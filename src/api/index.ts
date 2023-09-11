import request from '../utils/request'

export const fetchData = () => {
    return request({
        url: './table.json',
        method: 'get'
    });
};

export const getSideBarData = () => {
    return request({
        url: './sidebar.json',
        method: 'get'
    });
}

