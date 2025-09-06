// 地标巡礼页面交互功能
document.addEventListener('DOMContentLoaded', function() {
    // 初始化地标地图
    initLandmarkMap();
    
    // 初始化地标筛选
    initLandmarkFilter();
    
    // 初始化出行指南显示
    initTravelGuide();
});

// 初始化地标地图
function initLandmarkMap() {
    // 北京中心坐标
    const beijingCoords = [39.9042, 116.4074];
    
    // 创建地图实例
    const map = L.map('interactive-map').setView(beijingCoords, 12);
    
    // 添加地图图层
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // 地标数据
    const landmarks = [
        {
            name: "故宫博物院",
            nameEn: "Forbidden City",
            coords: [39.9163, 116.3907],
            category: "historical",
            description: "明清两代皇家宫殿，世界五大宫之首。",
            descriptionEn: "Imperial palace of Ming and Qing dynasties, the first of the world's five great palaces."
        },
        {
            name: "天坛公园",
            nameEn: "Temple of Heaven",
            coords: [39.8823, 116.4194],
            category: "historical",
            description: "明清两代皇帝祭天、祈谷的场所。",
            descriptionEn: "Where emperors of Ming and Qing dynasties worshipped heaven and prayed for good harvests."
        },
        {
            name: "国家体育场（鸟巢）",
            nameEn: "National Stadium (Bird's Nest)",
            coords: [39.9911, 116.3908],
            category: "modern",
            description: "2008年奥运会主体育场，现代建筑的杰出代表。",
            descriptionEn: "Main stadium of 2008 Olympics, an outstanding representative of modern architecture."
        },
        {
            name: "国家游泳中心（水立方）",
            nameEn: "National Aquatics Center (Water Cube)",
            coords: [39.9905, 116.3942],
            category: "modern",
            description: "2008年奥运会游泳比赛场馆，独特的膜结构设计闻名世界。",
            descriptionEn: "Swimming venue for 2008 Olympics, famous for its unique membrane structure design."
        },
        {
            name: "颐和园",
            nameEn: "Summer Palace",
            coords: [39.9994, 116.2676],
            category: "historical",
            description: "清代皇家园林，集中国江南园林和北方园林的特色于一体。",
            descriptionEn: "Qing dynasty royal garden combining features of southern and northern Chinese garden styles."
        },
        {
            name: "中关村科技园区",
            nameEn: "Zhongguancun Science Park",
            coords: [40.0094, 116.3147],
            category: "modern",
            description: "中国第一个国家级高新技术产业开发区，被誉为'中国硅谷'。",
            descriptionEn: "China's first national high-tech industrial development zone, known as 'China's Silicon Valley'."
        },
        {
            name: "香山公园",
            nameEn: "Fragrant Hills Park",
            coords: [39.9919, 116.1874],
            category: "natural",
            description: "北京著名的皇家园林和避暑胜地，秋季红叶闻名。",
            descriptionEn: "Famous royal garden and summer resort in Beijing, known for autumn red leaves."
        },
        {
            name: "奥林匹克森林公园",
            nameEn: "Olympic Forest Park",
            nameEn: "Olympic Forest Park",
            coords: [40.0194, 116.3972],
            category: "natural",
            description: "为2008年奥运会配套建设的大型城市公园。",
            descriptionEn: "Large urban park built for the 2008 Olympic Games."
        }
    ];
    
    // 添加地标标记到地图
    landmarks.forEach(landmark => {
        const lang = document.documentElement.classList.contains('lang-en') ? 'en' : 'zh';
        const marker = L.marker(landmark.coords).addTo(map);
        
        marker.bindPopup(`
            <strong>${lang === 'en' ? landmark.nameEn : landmark.name}</strong><br>
            ${lang === 'en' ? landmark.descriptionEn : landmark.description}
        `);
    });
    
    // 保存地图实例供后续使用
    window.beijingMap = map;
}

// 初始化地标筛选
function initLandmarkFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有按钮的active类
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // 为当前按钮和对应语言的按钮添加active类
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            const lang = document.documentElement.classList.contains('lang-en') ? 'en' : 'zh';
            const counterpartSelector = `.filter-btn[data-filter="${filter}"].${lang === 'en' ? 'cn' : 'en'}`;
            document.querySelector(counterpartSelector).classList.add('active');
            
            // 筛选地标
            const landmarkCards = document.querySelectorAll('.landmark-card');
            landmarkCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // 语言切换时更新筛选按钮状态
    document.addEventListener('languagechange', function() {
        const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
        const lang = event.detail.language;
        
        // 更新按钮active状态
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-filter') === activeFilter) {
                btn.classList.add('active');
            }
        });
    });
}

// 初始化出行指南显示
function initTravelGuide() {
    const guideButtons = document.querySelectorAll('.show-guide');
    
    guideButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.landmark-card');
            const guide = card.querySelector('.travel-guide');
            guide.classList.toggle('active');
            
            // 切换按钮文本
            const buttons = card.querySelectorAll('.show-guide');
            buttons.forEach(btn => {
                if (guide.classList.contains('active')) {
                    btn.textContent = btn.classList.contains('cn') ? '收起指南' : 'Hide Guide';
                } else {
                    btn.textContent = btn.classList.contains('cn') ? '查看出行指南' : 'Travel Guide';
                }
            });
        });
    });
    
    // 导航按钮功能
    const navigateButtons = document.querySelectorAll('.navigate-btn');
    navigateButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lat = parseFloat(this.getAttribute('data-lat'));
            const lng = parseFloat(this.getAttribute('data-lng'));
            const name = this.closest('.landmark-card').querySelector('h3.cn').textContent;
            
            // 在地图上定位并弹窗
            if (window.beijingMap) {
                window.beijingMap.setView([lat, lng], 16);
                
                // 创建临时弹窗
                const popup = L.popup()
                    .setLatLng([lat, lng])
                    .setContent(`<strong>${name}</strong><br>${this.closest('.landmark-card').querySelector('p.cn').textContent}`)
                    .openOn(window.beijingMap);
            }
            
            // 打开外部地图导航
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            let mapUrl;
            
            if (isMobile) {
                // 移动设备使用地图应用
                mapUrl = `geo:${lat},${lng}?q=${encodeURIComponent(name)}`;
            } else {
                // 桌面设备使用百度地图网页版
                mapUrl = `https://map.baidu.com/search/${encodeURIComponent(name)}@${lat},${lng},16z`;
            }
            
            window.open(mapUrl, '_blank');
        });
    });
}
    