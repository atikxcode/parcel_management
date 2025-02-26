document.addEventListener('DOMContentLoaded', () => {
    const trackBtn = document.getElementById('trackBtn');
    const trackNowBtn = document.getElementById('trackNowBtn');
    const trackingInput = document.getElementById('trackingInput');

    const trackParcel = () => {
        const trackingNumber = trackingInput.value.trim();
        if (trackingNumber) {
            window.location.href = `track.html?tracking=${trackingNumber}`;
        } else {
            alert('Please enter a tracking number!');
        }
    };

    trackBtn.addEventListener('click', trackParcel);
    trackNowBtn.addEventListener('click', trackParcel);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.feature-card, h2').forEach(el => observer.observe(el));
});