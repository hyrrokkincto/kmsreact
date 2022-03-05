// import CryptoJS from 'crypto-js';

export const RequestHeaders = {
    authHeaders: () => {
        return {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            // 'Authorization': `Bearer ${CryptoJS.AES.decrypt(localStorage.getItem('active'), 'OF').toString(CryptoJS.enc.Utf8)}`
            'Authorization': `Bearer ${localStorage.getItem('active')}`
        }
    }
}

export const LoginRequest = async (url = "", body = {}) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' },
            body: JSON.stringify(body)
        });
        return await response.json();
    }
    catch (e) {
        return e;
    }
};

export const postData = async (url = "", headers = {}, body = {}) => {
    try {
        const response = await fetch(url, { method: "POST", headers: RequestHeaders.authHeaders(), body: JSON.stringify(body) });
        return await response.json();
    }
    catch (e) {
        return e;
    }
};

export const getData = async (url = "", headers = {}, body = {}) => {
    try {
        const response = await fetch(url, { method: "GET", headers: RequestHeaders.authHeaders(), body: JSON.stringify(body), });
        return await response.json();
    } catch (e) {
        return e;
    }
};

export const deleteRequest = async (url = "", headers = {}, body = {}) => {
    try {
        const response = await fetch(url, { method: "DELETE", headers: RequestHeaders.authHeaders(), body: JSON.stringify(body) });
        if (response.status === 401) {
            return window.location.href = '/login';
        }
        return await response.json();
    } catch (e) {
        return e;
    }
};

export const putData = async (url = "", headers = {}, data = {}) => {
    try {
        const response = await fetch(url, { method: "PUT", headers: RequestHeaders.authHeaders(), body: JSON.stringify(data) });
        if (response.status === 401) {
            return window.location.href = '/login';
        }
        return await response.json();
    } catch (e) {
        return e;
    }
};
