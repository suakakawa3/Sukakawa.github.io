  const canvas = document.getElementById('universe');
        const ctx = canvas.getContext('2d');
        
        let stars = [];
        const count = 500; // 星星总数

        // 初始化画布和星星
        function init() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            stars = [];
            for (let i = 0; i < count; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 1.2,       // 星星大小
                    speed: Math.random() * 0.2 + 0.05, // 移动速度
                    opacity: Math.random(),            // 初始透明度
                    factor: Math.random() > 0.5 ? 1 : -1 // 用于控制闪烁方向
                });
            }
        }

        // 绘制每一帧
        function animate() {
            // 每一帧微弱清空画布，形成纯净感
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            stars.forEach(s => {
                // 1. 绘制星星
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${s.opacity})`;
                ctx.fill();

                // 2. 移动逻辑：缓慢向上漂移
                s.y -= s.speed;
                if (s.y < 0) s.y = canvas.height; // 穿过顶部回到后面

                // 3. 闪烁逻辑：透明度循环变化
                s.opacity += 0.01 * s.factor;
                if (s.opacity <= 0 || s.opacity >= 1) {
                    s.factor *= -1;
                }
            });

            requestAnimationFrame(animate);
        }

        // 监听窗口大小变化，防止拉伸
        window.addEventListener('resize', init);

        init();
        animate();
