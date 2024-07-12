document.addEventListener('DOMContentLoaded', function() {
    const photoBlocks = document.querySelectorAll('.photo-block');
    let delay = 0;
    
    photoBlocks.forEach(block => {
        block.style.animationDelay = `${delay}s`;
        delay += 0.3;
    });
});
