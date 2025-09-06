// UI交互功能管理
document.addEventListener('DOMContentLoaded', function() {
    // 字体大小控制
    initFontControl();
    
    // 音频控制
    initAudioControl();
    
    // 移动端菜单控制
    initMobileMenu();
    
    // 初始化滚动动画监听
    initScrollAnimations();
});

// 字体大小控制
function initFontControl() {
    const fontIncrease = document.getElementById('fontIncrease');
    const fontDecrease = document.getElementById('fontDecrease');
    const htmlElement = document.documentElement;
    
    // 检查本地存储中的字体偏好
    const savedFontSize = localStorage.getItem('preferredFontSize');
    if (savedFontSize === 'large') {
        htmlElement.style.setProperty('--font-size-base', '28px');
    }
    
    // 增大字体
    fontIncrease.addEventListener('click', function() {
        htmlElement.style.setProperty('--font-size-base', '28px');
        localStorage.setItem('preferredFontSize', 'large');
    });
    
    // 减小字体（恢复默认）
    fontDecrease.addEventListener('click', function() {
        htmlElement.style.setProperty('--font-size-base', '20px');
        localStorage.setItem('preferredFontSize', 'normal');
    });
}

// 音频控制
function initAudioControl() {
    const audioToggle = document.getElementById('audioToggle');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const audioIcon = audioToggle.querySelector('i');
    
    // 2. 如果任何一个关键元素不存在，则不初始化音频控制，并安全退出
    if (!backgroundMusic) {
	    console.warn('Audio element (#backgroundMusic) not found. Audio control will be disabled for this page.');
	    // 如果按钮存在但音频元素不存在，可能需要隐藏按钮
	    if (audioToggle) {
		    audioToggle.style.display = 'none'; // 或者移除它
		    console.log('Audio toggle button hidden because audio element is missing.');
	    }
	    return; // 安全退出函数
    }

    // 注意：如果只有按钮不存在，但有音频元素，你可能有不同的逻辑。
    // 但通常两者是配套的。
    if (!audioToggle) {
	    console.warn('Audio toggle button (#audioToggle) not found. Audio control UI will be disabled.');
	    // 音频元素存在，但没有控制按钮，可以选择静音或播放
	    // audioElement.muted = true; // 例如，如果没有按钮就默认静音
	    return; // 安全退出函数
    }

    // 3. 只有当元素都存在时，才执行原有的初始化逻辑
    let isPlaying = false;
    // 检查本地存储中的音频偏好
    const savedAudioState = localStorage.getItem('audioEnabled');
    if (savedAudioState === 'true') {
	    backgroundMusic.play().catch(e => {
			    console.log('音频自动播放失败，需要用户交互:', e);
			    });
	    audioIcon.classList.remove('fa-volume-mute');
	    audioIcon.classList.add('fa-volume-up');
    }

    // 切换音频播放状态
    audioToggle.addEventListener('click', function() {
		    if (backgroundMusic.paused) {
		    backgroundMusic.play().catch(e => {
				    console.log('音频播放失败:', e);
				    });
		    audioIcon.classList.remove('fa-volume-mute');
		    audioIcon.classList.add('fa-volume-up');
		    localStorage.setItem('audioEnabled', 'true');
		    } else {
		    backgroundMusic.pause();
		    audioIcon.classList.remove('fa-volume-up');
		    audioIcon.classList.add('fa-volume-mute');
		    localStorage.setItem('audioEnabled', 'false');
		    }
		    });
}

// 移动端菜单控制
function initMobileMenu() {
	const menuToggle = document.getElementById('menuToggle');
	const mobileMenu = document.getElementById('mobileMenu');

	menuToggle.addEventListener('click', function() {
			mobileMenu.classList.toggle('active');

			// 切换菜单图标
			const icon = menuToggle.querySelector('i');
			if (mobileMenu.classList.contains('active')) {
			icon.classList.remove('fa-bars');
			icon.classList.add('fa-times');
			} else {
			icon.classList.remove('fa-times');
			icon.classList.add('fa-bars');
			}
			});

	// 点击移动端菜单中的链接后关闭菜单
	const mobileLinks = mobileMenu.querySelectorAll('a');
	mobileLinks.forEach(link => {
			link.addEventListener('click', function() {
					mobileMenu.classList.remove('active');
					const icon = menuToggle.querySelector('i');
					icon.classList.remove('fa-times');
					icon.classList.add('fa-bars');
					});
			});
}

// 初始化滚动动画监听
function initScrollAnimations() {
	// 使用Intersection Observer API监听元素滚动到视图中
	const observerOptions = {
root: null,
      rootMargin: '0px',
      threshold: 0.1
	};

	const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
					if (entry.isIntersecting) {
					entry.target.classList.add('animate-in');
					observer.unobserve(entry.target);
					}
					});
			}, observerOptions);

	// 监听所有带有animate-on-scroll类的元素
	document.querySelectorAll('.animate-on-scroll').forEach(el => {
			observer.observe(el);
			});
}

