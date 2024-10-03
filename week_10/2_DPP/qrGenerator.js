export function generateQRCode(text) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        const url = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(text)}&size=256x256`;

        xhr.open('GET', url, true);
        xhr.responseType = 'blob';

        xhr.onload = function () {
            if (xhr.status === 200) {
                const reader = new FileReader();
                reader.onloadend = function () {
                    resolve(reader.result);
                };
                reader.readAsDataURL(xhr.response);
            } else {
                reject(new Error('Failed to generate QR code'));
            }
        };

        xhr.onerror = function () {
            reject(new Error('Network error'));
        };

        xhr.send();
    });
}
