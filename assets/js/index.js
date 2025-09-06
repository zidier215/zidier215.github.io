// 首页交互功能
document.addEventListener('DOMContentLoaded', function() {
    // 数字增长动画
    initNumberAnimation();
});

// 数字增长动画
function initNumberAnimation() {
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalNumber = parseInt(target.getAttribute('data-target'));
                animateNumber(target, 0, finalNumber, 2000);
                observer.unobserve(target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.stat-number').forEach(numberElement => {
        observer.observe(numberElement);
    });
}

// 数字动画函数
function animateNumber(element, start, end, duration) {
    let startTime = null;
    
    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const currentNumber = Math.floor(progress * (end - start) + start);
        
        // 格式化大数字显示（如27000显示为2.7万）
        if (end >= 10000) {
            element.textContent = (currentNumber / 10000).toFixed(1) + '万';
        } else {
            element.textContent = currentNumber.toLocaleString();
        }
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    }
    
    window.requestAnimationFrame(step);
}
    