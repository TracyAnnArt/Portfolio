

    function setupSlider(imgId, linkId, prevId, nextId, imagesId) {
        var images = [];
        var container = document.getElementById(imagesId);
        if (container) {
            var links = container.querySelectorAll('a');
            links.forEach(function(a) {
                var img = a.querySelector('img');
                images.push({
                    src: img.getAttribute('src'),
                    alt: img.getAttribute('alt') || a.getAttribute('data-alt') || '',
                    link: a.getAttribute('href')
                });
            });
        }
        var idx = 0;
        var img = document.getElementById(imgId);
        var link = document.getElementById(linkId);
        var prev = document.getElementById(prevId);
        var next = document.getElementById(nextId);

        // Null checks for all required elements
        if (!img || !link || !prev || !next) {
            console.error('Slider setup: One or more elements not found:', {img, link, prev, next, imagesId});
            return;
        }

        function update() {
            if (!images.length) {
                img.alt = 'No images found for slider.';
                link.style.display = 'none';
                prev.style.display = 'none';
                next.style.display = 'none';
                // Show a visible error message for debugging
                if (img.parentNode) {
                    var msg = document.createElement('div');
                    msg.style.color = 'red';
                    msg.style.fontWeight = 'bold';
                    msg.textContent = 'No images found for slider!';
                    img.parentNode.appendChild(msg);
                }
                console.log('Slider setup: No images found for', imagesId);
                return;
            }
            img.src = images[idx].src;
            img.alt = images[idx].alt;
            link.href = images[idx].link;
            prev.disabled = idx === 0;
            next.disabled = idx === images.length - 1;
        }
        prev.addEventListener('click', function() {
            if (idx > 0) { idx--; update(); }
        });
        next.addEventListener('click', function() {
            if (idx < images.length - 1) { idx++; update(); }
        });
        update();
    }

// Wait for DOM to be fully loaded before initializing sliders
document.addEventListener('DOMContentLoaded', function() {
    setupSlider('slider-img-1', 'slider-link-1', 'slider-prev-1', 'slider-next-1', 'slider-images-1');
    setupSlider('slider-img-2', 'slider-link-2', 'slider-prev-2', 'slider-next-2', 'slider-images-2');
    setupSlider('slider-img-3', 'slider-link-3', 'slider-prev-3', 'slider-next-3', 'slider-images-3');
    setupSlider('slider-img-4', 'slider-link-4', 'slider-prev-4', 'slider-next-4', 'slider-images-4');
});
