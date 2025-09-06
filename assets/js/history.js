// 历史文化页面交互功能
document.addEventListener('DOMContentLoaded', function() {
    // 初始化历史时间轴
    initTimeline();
});

// 初始化历史时间轴
function initTimeline() {
    const timelineData = [
        {
            year: "公元前1045年",
            yearEn: "1045 BC",
            title: "蓟城建立",
            titleEn: "Jicheng Founded",
            description: "西周时期，北京地区建立了蓟国，蓟城成为北京城市发展的起点。",
            descriptionEn: "During the Western Zhou Dynasty, the State of Ji was established in the Beijing area, with Jicheng as its capital, marking the beginning of Beijing's urban development."
        },
        {
            year: "公元938年",
            yearEn: "938 AD",
            title: "辽南京",
            titleEn: "Liao Nanjing",
            description: "辽朝将幽州定为南京，成为辽的陪都之一，城市规模开始扩大。",
            descriptionEn: "The Liao Dynasty designated Youzhou as Nanjing (Southern Capital), one of its auxiliary capitals, marking the beginning of urban expansion."
        },
        {
            year: "1153年",
            yearEn: "1153",
            title: "金中都",
            titleEn: "Jin Zhongdu",
            description: "金朝迁都燕京，改名中都，北京成为王朝的政治中心。",
            descriptionEn: "The Jin Dynasty moved its capital to Yanjing, renaming it Zhongdu (Central Capital), making Beijing the political center of a dynasty."
        },
        {
            year: "1271年",
            yearEn: "1271",
            title: "元大都",
            titleEn: "Yuan Dadu",
            description: "忽必烈建立元朝，以北京为大都，奠定了现代北京城市的基本格局。",
            descriptionEn: "Kublai Khan established the Yuan Dynasty with Beijing as Dadu (Great Capital), laying the basic urban structure of modern Beijing."
        },
        {
            year: "1421年",
            yearEn: "1421",
            title: "明北京",
            titleEn: "Ming Beijing",
            description: "明成祖朱棣迁都北京，开始大规模建设，形成了今天北京的城市布局。",
            descriptionEn: "Emperor Yongle of the Ming Dynasty moved the capital to Beijing, initiating large-scale construction that formed the urban layout we see today."
        },
        {
            year: "1644年",
            yearEn: "1644",
            title: "清京师",
            titleEn: "Qing Capital",
            description: "清朝入关后，定都北京，继续完善城市建设，建造了颐和园等皇家园林。",
            descriptionEn: "After entering the pass, the Qing Dynasty made Beijing its capital, continuing urban development and constructing imperial gardens like the Summer Palace."
        },
        {
            year: "1949年",
            yearEn: "1949",
            title: "中华人民共和国首都",
            titleEn: "Capital of PRC",
            description: "中华人民共和国成立，北京成为新中国的首都，开始了现代化建设。",
            descriptionEn: "The People's Republic of China was founded, with Beijing as its capital, initiating modernization and development."
        }
    ];
    
    const timelineTrack = document.querySelector('.timeline-track');
    
    // 创建时间轴线
    const timelineLine = document.createElement('div');
    timelineLine.className = 'timeline-line';
    timelineTrack.appendChild(timelineLine);
    
    // 添加时间轴项目
    timelineData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item animate-on-scroll';
        
        // 创建时间点
        const timelineDot = document.createElement('div');
        timelineDot.className = 'timeline-dot';
        timelineItem.appendChild(timelineDot);
        
        // 填充内容
        timelineItem.innerHTML += `
            <div class="timeline-content">
                <h3 class="cn">${item.year} · ${item.title}</h3>
                <h3 class="en">${item.yearEn} · ${item.titleEn}</h3>
                <p class="cn">${item.description}</p>
                <p class="en">${item.descriptionEn}</p>
            </div>
        `;
        
        timelineTrack.appendChild(timelineItem);
    });
}
    