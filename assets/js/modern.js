// 现代发展页面交互功能
document.addEventListener('DOMContentLoaded', function() {
    // 初始化数据图表
    initCharts();
});

// 初始化数据图表
function initCharts() {
    // 研发投入图表
    const researchCtx = document.getElementById('researchChart').getContext('2d');
    
    // 图表数据（中英双语）
    const researchData = {
        labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
        datasets: [{
            label: '研发投入（亿元）',
            labelEn: 'R&D Investment (100 million yuan)',
            data: [1185, 1384, 1595, 1830, 2086, 2326, 2629, 2859, 3228, 3483],
            borderColor: '#C8102E',
            backgroundColor: 'rgba(200, 16, 46, 0.1)',
            fill: true,
            tension: 0.4
        }]
    };
    
    // 图表配置
    const researchConfig = {
        type: 'line',
        data: researchData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 2000,
                easing: 'easeOutQuart'
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: '研发投入（亿元）',
                        textEn: 'R&D Investment (100 million yuan)',
                        font: {
                            size: 16
                        }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: '年份',
                        textEn: 'Year',
                        font: {
                            size: 16
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const lang = document.documentElement.classList.contains('lang-en') ? 'en' : 'zh';
                            const label = lang === 'en' ? 
                                context.dataset.labelEn : 
                                context.dataset.label;
                            return `${label}: ${context.raw}`;
                        }
                    }
                }
            }
        }
    };
    
    // 企业数量图表
    const enterpriseCtx = document.getElementById('enterpriseChart').getContext('2d');
    
    const enterpriseData = {
        labels: ['人工智能', '生物医药', '新能源', '信息技术', '高端制造'],
        labelsEn: ['AI', 'Biomedicine', 'New Energy', 'IT', 'High-end Manufacturing'],
        datasets: [{
            label: '高新技术企业数量',
            labelEn: 'Number of High-tech Enterprises',
            data: [6800, 4200, 3500, 8900, 3600],
            backgroundColor: [
                'rgba(200, 16, 46, 0.7)',
                'rgba(26, 94, 134, 0.7)',
                'rgba(212, 175, 55, 0.7)',
                'rgba(60, 179, 113, 0.7)',
                'rgba(138, 43, 226, 0.7)'
            ],
            borderColor: [
                'rgba(200, 16, 46, 1)',
                'rgba(26, 94, 134, 1)',
                'rgba(212, 175, 55, 1)',
                'rgba(60, 179, 113, 1)',
                'rgba(138, 43, 226, 1)'
            ],
            borderWidth: 1
        }]
    };
    
    const enterpriseConfig = {
        type: 'bar',
        data: enterpriseData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 2000,
                easing: 'easeOutQuart'
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: '企业数量',
                        textEn: 'Number of Enterprises',
                        font: {
                            size: 16
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const lang = document.documentElement.classList.contains('lang-en') ? 'en' : 'zh';
                            const label = lang === 'en' ? 
                                context.dataset.labelEn : 
                                context.dataset.label;
                            return `${label}: ${context.raw}`;
                        }
                    }
                }
            }
        }
    };
    
    // 创建图表实例
    const researchChart = new Chart(researchCtx, researchConfig);
    const enterpriseChart = new Chart(enterpriseCtx, enterpriseConfig);
    
    // 监听语言切换事件，更新图表
    document.addEventListener('languagechange', function(event) {
        const lang = event.detail.language;
        
        // 更新研发投入图表
        researchChart.options.scales.y.title.text = lang === 'en' ? 
            researchData.datasets[0].labelEn : 
            researchData.datasets[0].label;
        researchChart.options.scales.x.title.text = lang === 'en' ? 'Year' : '年份';
        researchChart.update();
        
        // 更新企业数量图表
        enterpriseChart.data.labels = lang === 'en' ? 
            enterpriseData.labelsEn : 
            enterpriseData.labels;
        enterpriseChart.options.scales.y.title.text = lang === 'en' ? 'Number of Enterprises' : '企业数量';
        enterpriseChart.update();
    });
    
    // 图表懒加载
    const chartObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 触发图表动画
                researchChart.update();
                enterpriseChart.update();
                chartObserver.unobserve(entry.target);
            }
        });
    });
    
    document.querySelectorAll('.chart-container').forEach(container => {
        chartObserver.observe(container);
    });
}
    