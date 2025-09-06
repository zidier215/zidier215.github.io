// 语言切换功能
document.addEventListener('DOMContentLoaded', function() {
    // 语言数据存储
    const translations = {
        // 可根据需要扩展更多语言
        en: {
            // 导航栏
            "首页": "Home",
            "历史文化": "History",
            "现代发展": "Modern",
            "地标巡礼": "Landmarks",
            
            // 首页
            "北京 · 古今交响": "Beijing · Symphony of Past and Present",
            "三千年建城史的文明印记 | 新时代全球城市的创新脉搏": "3,000 years of urban history | Innovation pulse of a global city",
            "探索北京": "Explore Beijing",
            "城市概览": "City Overview",
            "北京，中华人民共和国首都，是中国的政治、文化、国际交往和科技创新中心。这座城市拥有3000多年的建城史和860多年的建都史，曾是辽、金、元、明、清五朝帝都，积淀了深厚的历史文化底蕴。": "Beijing, the capital of the People's Republic of China, is the country's political, cultural, international exchange, and technological innovation center. With over 3,000 years of urban history and more than 860 years as a capital city, it served as the imperial capital for five dynasties (Liao, Jin, Yuan, Ming, and Qing), accumulating profound historical and cultural heritage.",
            "今天的北京，既是一座古典与现代完美融合的国际大都市，也是中国改革开放和现代化建设的缩影。作为\"双奥之城\"，北京成功举办了2008年夏季奥运会和2022年冬季奥运会，向世界展示了其独特的魅力与活力。": "Today's Beijing is both an international metropolis where the classical and modern blend perfectly, and a microcosm of China's reform and opening up and modernization drive. As the \"Double Olympic City,\" Beijing successfully hosted the 2008 Summer Olympics and 2022 Winter Olympics, showcasing its unique charm and vitality to the world.",
            "建城历史（年）": "Years of urban history",
            "世界遗产": "World Heritage Sites",
            "常住人口": "Permanent population",
            "高新技术企业": "High-tech enterprises",
            "探索千年古都的历史脉络": "Explore the historical context",
            "感受创新之都的科技活力": "Experience technological vitality",
            "走访北京的标志性建筑": "Visit iconic buildings",
            "了解更多 →": "Learn more →",
            "北京印象": "Beijing Impressions",
            
            // 历史文化页
            "北京历史文化": "Beijing's History & Culture",
            "三千年建城史的文明积淀": "Civilization accumulation over 3,000 years of urban history",
            "古都变迁": "Ancient Capital Evolution",
            "公元前1045年": "1045 BCE",
            "蓟城建立": "Ji City Established",
            "北京地区最早的城市，西周时期燕国都城，奠定了北京城市发展的基础。": "The earliest city in the Beijing area, capital of the Yan State during the Western Zhou Dynasty, laying the foundation for Beijing's urban development.",
            "938年": "938 CE",
            "辽南京与金中都": "Liao Nanjing & Jin Zhongdu",
            "辽朝将北京定为南京，金朝将其改为中都，北京首次成为王朝都城。": "The Liao Dynasty designated Beijing as Nanjing, and the Jin Dynasty renamed it Zhongdu, making Beijing a dynastic capital for the first time.",
            "1271年": "1271 CE",
            "元大都": "Yuan Dadu",
            "忽必烈建立元朝，定都大都，奠定了现代北京城市格局的基础。": "Kublai Khan established the Yuan Dynasty with Dadu as its capital, laying the foundation for modern Beijing's urban layout.",
            "1421年": "1421 CE",
            "明北京城": "Ming Beijing",
            "明成祖朱棣迁都北京，建造紫禁城，形成\"凸\"字形城市格局，基本确定了北京的城市轮廓。": "Emperor Yongle moved the capital to Beijing and built the Forbidden City, forming a \"convex\" shaped urban layout that basically determined Beijing's urban outline.",
            "1644年": "1644 CE",
            "清承明制": "Qing Dynasty Continuation",
            "清朝入关后沿用北京城，修建了圆明园、颐和园等皇家园林，形成了今日所见的北京历史风貌。": "After entering the Shanhai Pass, the Qing Dynasty continued to use Beijing as its capital, building imperial gardens such as Yuanmingyuan and the Summer Palace, forming the historical style of Beijing seen today.",
            "皇家建筑": "Royal Architecture",
            "故宫博物院": "Forbidden City",
            "明清两代皇家宫殿，世界上现存规模最大、保存最为完整的木质结构古建筑之一，被誉为\"紫禁城\"。": "Imperial palace of the Ming and Qing dynasties, one of the largest and best-preserved wooden structures in the world, known as the \"Forbidden City.\"",
            "天坛公园": "Temple of Heaven",
            "明清两代皇帝祭天、祈谷的场所，以其独特的建筑布局和象征意义闻名于世。": "Where emperors of the Ming and Qing dynasties worshipped heaven and prayed for good harvests, famous for its unique architectural layout and symbolic significance.",
            "颐和园": "Summer Palace",
            "清代皇家园林，集中国江南园林和北方园林的特色于一体，是中国古典园林艺术的杰作。": "Qing dynasty royal garden combining features of southern and northern Chinese garden styles, a masterpiece of Chinese classical garden art.",
            "了解更多": "Learn more",
            "传统艺术与文化": "Traditional Arts & Culture",
            "京剧": "Peking Opera",
            "中国五大戏曲剧种之一，形成于北京，集唱、念、做、打于一体，被誉为\"国粹\"。": "One of China's five major opera genres, formed in Beijing, integrating singing, recitation, acting, and acrobatics, known as the \"national essence.\"",
            "相声": "Cross-talk",
            "北京特色民间艺术，以幽默讽刺为特点，通过对话形式表演，深受大众喜爱。": "Beijing's characteristic folk art, featuring humor and satire, performed through dialogue, deeply loved by the public.",
            "胡同文化": "Hutong Culture",
            "北京独特的城市肌理，狭窄的巷道连接着传统四合院，是老北京生活方式的缩影。": "Beijing's unique urban texture, with narrow lanes connecting traditional courtyard houses, a microcosm of old Beijing's lifestyle.",
            
            // 页脚
            "© 2023 北京城市介绍 | 探索这座城市的历史与未来": "© 2023 Beijing City Guide | Explore the history and future of the city",
            
            // 广告位
            "广告位": "Ad Space"
        }
        // 可以在这里添加更多语言，如日语、韩语等
    };

// 初始化语言
function initLanguage() {
    // 检查本地存储中的语言偏好
    const savedLang = localStorage.getItem('preferredLanguage') || 'zh'; // 默认中文
    const htmlElement = document.documentElement;

    // *** 核心修改：直接设置 html 的 lang 属性 ***
    htmlElement.setAttribute('lang', savedLang);
    // 如果你之前的逻辑依赖 lang-en 类，可以保留，或者根据新CSS调整
    if (savedLang === 'en') {
        htmlElement.classList.add('lang-en');
    } else {
        htmlElement.classList.remove('lang-en');
    }
    // 触发一次自定义事件，通知页面其他部分语言已初始化
    document.dispatchEvent(new CustomEvent('languageInitialized', { detail: { language: savedLang } }));
}

// 切换语言
function toggleLanguage() {
    const htmlElement = document.documentElement;
    // *** 核心修改：获取当前 lang 属性 ***
    const currentLang = htmlElement.getAttribute('lang');
    // *** 核心修改：切换逻辑基于 lang 属性 ***
    const newLang = currentLang === 'en' ? 'zh' : 'en';

    // *** 核心修改：直接设置 html 的 lang 属性 ***
    htmlElement.setAttribute('lang', newLang);
    // 同样，如果需要，更新类
    if (newLang === 'en') {
        htmlElement.classList.add('lang-en');
    } else {
        htmlElement.classList.remove('lang-en');
    }

    // 保存语言偏好到本地存储
    localStorage.setItem('preferredLanguage', newLang);

    // 触发语言变化事件
    const event = new CustomEvent('languagechange', {
        detail: {
            language: newLang
        }
    });
    document.dispatchEvent(event);
}


    // 添加语言切换按钮事件监听
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }

    // 初始化语言设置
    initLanguage();
});
    