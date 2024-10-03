export function loadGalleryPromise(imageUrls) {
    const gallery = document.getElementById('gallery');
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
        img.alt = 'Gallery Image';

        const container = document.createElement('div');
        container.className = 'image-container';

        img.onload = () => {
            container.appendChild(img);
            gallery.appendChild(container);
        };

        img.onerror = () => {
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            errorMessage.textContent = 'Failed to load image';
            container.appendChild(errorMessage);
            gallery.appendChild(container);
        };
    });
}
