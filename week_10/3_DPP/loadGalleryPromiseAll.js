export function loadGalleryPromiseAll(imageUrls) {
    const gallery = document.getElementById('gallery');
    const promises = imageUrls.map(url => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.alt = 'Gallery Image';

            const container = document.createElement('div');
            container.className = 'image-container';

            img.onload = () => resolve(container.appendChild(img));
            img.onerror = () => {
                const errorMessage = document.createElement('div');
                errorMessage.className = 'error-message';
                errorMessage.textContent = 'Failed to load image';
                reject(container.appendChild(errorMessage));
            };
        });
    });

    Promise.all(promises)
        .then(results => {
            results.forEach(result => gallery.appendChild(result));
        })
        .catch(error => {
            console.error('Error loading images:', error);
        });
}
