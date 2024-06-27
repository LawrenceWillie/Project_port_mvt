
const sliderContainer = document.querySelector('.slider-container-pricing');
        const slider = document.querySelector('.slider-pricing');
        const cards = document.querySelectorAll('.card-pricing');

        let currentIndex = 0;
        let interval;

        // Function to start the automatic slider
        function startSlider() {
            interval = setInterval(() => {
                currentIndex = (currentIndex + 1) % cards.length;
                slider.style.transform = `translateX(-${currentIndex * 320}px)`;
                
            }, 4000);
        }

        // Function to stop the automatic slider
        function stopSlider() {
            clearInterval(interval);
        }

        // Event listeners for when the mouse enters or leaves the slider container
        sliderContainer.addEventListener('mouseenter', stopSlider);
        sliderContainer.addEventListener('mouseleave', startSlider);

        // Start the automatic slider
        startSlider();