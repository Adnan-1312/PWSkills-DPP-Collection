export async function loadGalleryAsync(imageUrls) {
    const gallery = document.getElementById('gallery');
    for (const url of imageUrls) {
        try {
            const container = await loadImage(url);
            gallery.appendChild(container);
        } catch (error) {
            console.error('Error loading image:', error);
        }
    }
}

function loadImage(url) {
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
}
