

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
        function update() {
            if (!images.length) return;
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

    // Slider 1
    setupSlider('slider-img-1', 'slider-link-1', 'slider-prev-1', 'slider-next-1', 'slider-images-1');
    // Slider 2
    setupSlider('slider-img-2', 'slider-link-2', 'slider-prev-2', 'slider-next-2', 'slider-images-2');
