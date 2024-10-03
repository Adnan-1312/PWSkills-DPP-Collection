import { generateQRCode } from './qrGenerator.js';

const textInput = document.getElementById('text');
const generateBtn = document.getElementById('generateBtn');
const preloader = document.getElementById('preloader');
const qrCodeContainer = document.getElementById('qrCode');

generateBtn.addEventListener('click', () => {
    const text = textInput.value.trim();
    if (text === '') {
        alert('Please enter some text or URL');
        return;
    }

    preloader.style.display = 'block';
    qrCodeContainer.innerHTML = ''; // Clear previous QR code

    generateQRCode(text)
        .then(dataUrl => {
            preloader.style.display = 'none';
            const img = document.createElement('img');
            img.src = dataUrl;
            qrCodeContainer.appendChild(img);
        })
        .catch(error => {
            preloader.style.display = 'none';
            alert('Error generating QR code: ' + error.message);
        });
});