// ==================== LEVEL DATA ====================
const LEVEL_DATA = [
    // WORLD 1 - PRIMAVERA (Levels 1-5)
    { world: 1, name: 'Primavera - Amanecer',
      platforms: [[200,420,3],[400,340,2],[600,260,2],[850,340,3],[1100,420,2],[1300,300,3],[1600,380,2],[1900,280,2],[2200,350,3],[2500,420,2]],
      enemies: [{type:'balloonboy',x:500,patrol:150},{type:'balloonboy',x:1400,patrol:100}],
      hearts: [[250,380],[450,300],[900,300],[1350,260],[2000,240],[2250,310]],
      qblocks: [[460, 260], [1350, 228], [800, 440], [1800, 440]],
      goalX: 2800
    },
    { world: 1, name: 'Primavera - Jardín Secreto',
      platforms: [[250,400,2],[450,320,2],[650,400,3],[900,280,2],[1150,380,2],[1350,260,3],[1600,350,2],[1850,420,2],[2100,300,3],[2400,380,2],[2600,260,2]],
      enemies: [{type:'balloonboy',x:700,patrol:120},{type:'chica',x:1400,patrol:100},{type:'balloonboy',x:2150,patrol:80}],
      hearts: [[300,360],[500,280],[700,360],[950,240],[1400,220],[1650,310],[2150,260],[2450,340]],
      qblocks: [[920, 204], [1600, 268], [550, 440], [2000, 440]],
      goalX: 2900
    },
    { world: 1, name: 'Primavera - Bosque Encantado',
      platforms: [[200,380,2],[400,300,2],[600,420,3],[800,260,2],[1050,350,2],[1300,280,3],[1550,400,2],[1800,320,2],[2050,250,2],[2300,380,3],[2550,300,2]],
      enemies: [{type:'chica',x:650,patrol:130},{type:'bonnie',x:1100,patrol:100},{type:'chica',x:1850,patrol:90},{type:'balloonboy',x:2350,patrol:80}],
      hearts: [[250,340],[450,260],[850,220],[1100,310],[1350,240],[1600,360],[2100,210],[2350,340],[2600,260]],
      qblocks: [[820, 180], [1820, 244], [700, 440], [1500, 440]],
      goalX: 2900
    },
    { world: 1, name: 'Primavera - Cascada de Flores',
      platforms: [[180,400,2],[380,320,2],[580,250,2],[780,380,3],[1000,280,2],[1250,400,2],[1450,300,3],[1700,220,2],[1950,350,2],[2200,280,2],[2450,400,3],[2650,300,2]],
      enemies: [{type:'bonnie',x:400,patrol:100},{type:'freddy',x:830,patrol:120},{type:'chica',x:1300,patrol:90},{type:'bonnie',x:2000,patrol:110},{type:'balloonboy',x:2500,patrol:80}],
      hearts: [[230,360],[430,280],[630,210],[1050,240],[1500,260],[1750,180],[2250,240],[2500,360],[2700,260]],
      qblocks: [[600, 172], [1470, 220], [900, 440], [2200, 440]],
      goalX: 2950
    },
    { world: 1, name: 'Primavera - El Gran Cerezo',
      platforms: [[200,420,3],[400,340,2],[550,260,2],[750,380,3],[950,280,2],[1200,400,2],[1400,300,2],[1600,220,2],[1850,350,3],[2100,260,2],[2350,380,2],[2550,280,3],[2750,200,2]],
      enemies: [{type:'freddy',x:300,patrol:130},{type:'bonnie',x:800,patrol:100},{type:'chica',x:1250,patrol:110},{type:'freddy',x:1900,patrol:90},{type:'balloonboy',x:2400,patrol:80},{type:'bonnie',x:2600,patrol:100}],
      hearts: [[250,380],[450,300],[600,220],[1000,240],[1450,260],[1650,180],[2150,220],[2400,340],[2600,240],[2800,160]],
      qblocks: [[570, 180], [1420, 220], [2570, 200], [750, 440], [2100, 440]],
      goalX: 3000
    },
    // WORLD 2 - PARQUE (Levels 6-10)
    { world: 2, name: 'Parque - Atardecer',
      platforms: [[220,400,2],[420,320,3],[670,420,2],[870,280,2],[1120,380,3],[1350,260,2],[1600,400,2],[1850,300,2],[2100,380,3],[2350,260,2],[2600,400,2]],
      enemies: [{type:'foxy',x:470,patrol:140},{type:'freddy',x:920,patrol:100},{type:'foxy',x:1650,patrol:120}],
      hearts: [[270,360],[470,280],[720,380],[920,240],[1170,340],[1400,220],[1900,260],[2150,340],[2400,220],[2650,360]],
      qblocks: [[890, 200], [1870, 220], [600, 440], [1500, 440]],
      goalX: 2900
    },
    { world: 2, name: 'Parque - Fuente de los Deseos',
      platforms: [[200,380,2],[400,300,2],[650,420,3],[850,260,2],[1100,380,2],[1300,280,3],[1550,400,2],[1800,300,2],[2050,220,2],[2300,380,3],[2550,280,2]],
      enemies: [{type:'foxy',x:700,patrol:120},{type:'freddy',x:1150,patrol:100},{type:'bonnie',x:1850,patrol:110},{type:'foxy',x:2350,patrol:90}],
      hearts: [[250,340],[450,260],[700,380],[900,220],[1150,340],[1350,240],[1600,360],[1850,260],[2100,180],[2350,340],[2600,240]],
      qblocks: [[870, 180], [2070, 140], [400, 440], [1800, 440]],
      goalX: 2950
    },
    { world: 2, name: 'Parque - Luces de la Noche',
      platforms: [[180,400,2],[380,300,2],[600,420,3],[800,250,2],[1050,380,2],[1250,260,2],[1500,400,3],[1700,280,2],[1950,380,2],[2200,240,2],[2450,380,3],[2650,280,2]],
      enemies: [{type:'freddy',x:430,patrol:100},{type:'foxy',x:850,patrol:130},{type:'chica',x:1300,patrol:90},{type:'bonnie',x:1750,patrol:110},{type:'foxy',x:2250,patrol:100}],
      hearts: [[230,360],[430,260],[650,380],[850,210],[1100,340],[1300,220],[1550,360],[1750,240],[2000,340],[2250,200],[2500,340],[2700,240]],
      qblocks: [[820, 172], [1270, 180], [2220, 160], [500, 440], [1700, 440]],
      goalX: 3000
    },
    { world: 2, name: 'Parque - Jardín de las Estrellas',
      platforms: [[200,380,2],[370,280,2],[550,400,3],[750,240,2],[1000,380,2],[1200,260,2],[1400,400,3],[1650,280,2],[1850,200,2],[2100,380,2],[2300,260,3],[2550,380,2],[2750,240,2]],
      enemies: [{type:'freddy',x:600,patrol:120},{type:'foxy',x:800,patrol:100},{type:'bonnie',x:1250,patrol:110},{type:'chica',x:1700,patrol:90},{type:'foxy',x:2150,patrol:130},{type:'freddy',x:2600,patrol:100}],
      hearts: [[250,340],[420,240],[600,360],[800,200],[1050,340],[1250,220],[1450,360],[1700,240],[1900,160],[2150,340],[2350,220],[2600,340],[2800,200]],
      qblocks: [[770, 160], [1870, 120], [600, 440], [2300, 440]],
      goalX: 3050
    },
    { world: 2, name: 'Parque - Nuestro Lugar Especial',
      platforms: [[200,420,3],[380,320,2],[530,240,2],[730,400,3],[930,280,2],[1130,200,2],[1380,380,2],[1580,260,2],[1780,400,3],[1980,280,2],[2180,200,2],[2430,380,2],[2630,260,3],[2830,180,2]],
      enemies: [{type:'freddy',x:280,patrol:120},{type:'foxy',x:780,patrol:130},{type:'bonnie',x:980,patrol:100},{type:'chica',x:1430,patrol:90},{type:'foxy',x:1830,patrol:110},{type:'freddy',x:2030,patrol:100},{type:'balloonboy',x:2480,patrol:80},{type:'foxy',x:2680,patrol:120}],
      hearts: [[250,380],[430,280],[580,200],[780,360],[980,240],[1180,160],[1430,340],[1630,220],[1830,360],[2030,240],[2230,160],[2480,340],[2680,220],[2880,140]],
      qblocks: [[550, 160], [1600, 180], [2650, 180], [380, 440], [1980, 440]],
      goalX: 3100
    }
];


class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }

    create() {
        this.levelIdx = this.registry.get('currentLevel') - 1;
        this.levelData = LEVEL_DATA[this.levelIdx];
        this.score = this.registry.get('score');
        this.lives = this.registry.get('lives');
        this.isWorld1 = this.levelData.world === 1;
        this.isDead = false;

        // Squirrel power state
        this.squirrelPower = false;
        this.flyEnergy = 0;
        this.maxFlyEnergy = 100;
        this.flutterLeft = 0;   // flutter jumps remaining
        this.prevJump = false;
        this.playerStunned = false;

        const levelW = this.levelData.goalX + 400;

        // ============ BACKGROUND ============
        this.createBackground(levelW);

        // ============ PLATFORMS ============
        this.platforms = this.physics.add.staticGroup();
        this.createGround(levelW);
        this.createPlatforms();

        // ============ FLOWERS (after ground so they render on top) ============
        this.createFlowers(levelW);

        // ============ QUESTION BLOCKS ============
        this.qblocksGroup = this.physics.add.staticGroup();
        this.createQBlocks();

        // ============ PLAYER ============
        this.player = this.physics.add.sprite(60, 400, 'player');
        this.player.setScale(2.5);
        this.player.setBounce(0.05);
        this.player.setCollideWorldBounds(true);
        this.player.body.setSize(10, 22);
        this.player.body.setOffset(3, 2);

        // ============ HEARTS ============
        this.heartsGroup = this.physics.add.group();
        this.createHearts();

        // ============ ENEMIES ============
        this.enemiesGroup = this.physics.add.group();
        this.createEnemies();

        // ============ BALLOONS ============
        this.balloonsGroup = this.physics.add.group();

        // ============ CUPCAKES ============
        this.cupcakesGroup = this.physics.add.group();

        // ============ GOAL ============
        this.goal = this.physics.add.sprite(this.levelData.goalX, 440, 'goal');
        this.goal.setScale(3);
        this.goal.body.setAllowGravity(false);
        this.goal.body.setImmovable(true);

        // ============ COLLISIONS ============
        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.heartsGroup, this.platforms);
        this.physics.add.collider(this.enemiesGroup, this.platforms);
        this.physics.add.collider(this.player, this.qblocksGroup, this.hitQBlock, null, this);
        this.physics.add.collider(this.cupcakesGroup, this.platforms, this.hitCupcakePlatform, null, this);
        this.physics.add.overlap(this.player, this.heartsGroup, this.collectHeart, null, this);
        this.physics.add.overlap(this.player, this.enemiesGroup, this.hitEnemy, null, this);
        this.physics.add.overlap(this.player, this.balloonsGroup, this.hitBalloon, null, this);
        this.physics.add.overlap(this.player, this.cupcakesGroup, this.hitCupcake, null, this);
        this.physics.add.overlap(this.player, this.goal, this.winLevel, null, this);

        // ============ CAMERA ============
        this.cameras.main.setBounds(0, 0, levelW, 600);
        this.physics.world.setBounds(0, 0, levelW, 600);
        this.cameras.main.startFollow(this.player, true, 0.08, 0.08);

        // ============ UI ============
        this.createUI();

        // ============ CONTROLS ============
        this.cursors = this.input.keyboard.createCursorKeys();
        this.wasd = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            right: Phaser.Input.Keyboard.KeyCodes.D,
            space: Phaser.Input.Keyboard.KeyCodes.SPACE
        });

        // Heart float animation timer
        this.heartTimer = 0;
    }


    // ==================== BACKGROUND ====================
    createBackground(levelW) {
        const bgKey = this.isWorld1 ? 'bg_spring' : 'bg_park';

        // --- Layer 0: Sky gradient (fixed, no scroll) ---
        if (this.isWorld1) {
            // Spring: bright blue sky gradient
            const skyGradient = this.add.graphics();
            skyGradient.setScrollFactor(0);
            skyGradient.fillGradientStyle(0x87CEEB, 0x87CEEB, 0xB0E0FF, 0xB0E0FF, 1);
            skyGradient.fillRect(0, 0, 800, 600);
        } else {
            // Park: sunset/dusk gradient
            const skyGradient = this.add.graphics();
            skyGradient.setScrollFactor(0);
            skyGradient.fillGradientStyle(0x1a0533, 0x1a0533, 0xFF6B35, 0xFF8C42, 1);
            skyGradient.fillRect(0, 0, 800, 600);
        }

        // --- Layer 1: Far background (mountains/distant scenery) - slow parallax ---
        this.bgFar = this.add.tileSprite(0, 0, 800, 600, bgKey);
        this.bgFar.setOrigin(0, 0);
        this.bgFar.setScrollFactor(0);
        this.bgFar.setAlpha(0.6);

        // --- Layer 2: Main background image - medium parallax ---
        this.bgMain = this.add.tileSprite(0, 0, 800, 600, bgKey);
        this.bgMain.setOrigin(0, 0);
        this.bgMain.setScrollFactor(0);

        // --- Layer 3: Clouds with slow drift animation ---
        this.clouds = [];
        for (let i = 0; i < 10; i++) {
            const cx = Phaser.Math.Between(-100, 900);
            const cy = Phaser.Math.Between(20, 180);
            const cloud = this.add.image(cx, cy, 'cloud');
            const sc = Phaser.Math.FloatBetween(2, 5);
            cloud.setScale(sc);
            cloud.setAlpha(Phaser.Math.FloatBetween(0.3, 0.7));
            cloud.setScrollFactor(0);
            cloud.cloudSpeed = Phaser.Math.FloatBetween(0.08, 0.25);
            cloud.baseX = cx;
            this.clouds.push(cloud);
        }

        // --- Layer 4: Decorative elements (no green lines) ---
        if (this.isWorld1) {
            // Distant tree silhouettes (soft, no lines)
            const treesG = this.add.graphics();
            treesG.setScrollFactor(0.4);
            for (let i = 0; i < Math.floor(levelW / 140); i++) {
                const tx = i * 140 + Phaser.Math.Between(20, 80);
                const ty = Phaser.Math.Between(400, 440);
                // Tree trunk
                treesG.fillStyle(0x1B5E20, 0.25);
                treesG.fillRect(tx, ty - 25, 5, 25);
                // Tree crown
                treesG.fillStyle(0x2E7D32, 0.2);
                treesG.fillCircle(tx + 2, ty - 35, Phaser.Math.Between(12, 20));
            }
        } else {
            // Park: distant building/tree silhouettes
            const silG = this.add.graphics();
            silG.setScrollFactor(0.3);
            for (let i = 0; i < Math.floor(levelW / 150); i++) {
                const tx = i * 150 + Phaser.Math.Between(20, 80);
                const ty = Phaser.Math.Between(390, 430);
                silG.fillStyle(0x1a0e08, 0.3);
                silG.fillRect(tx, ty - 20, 6, 20);
                silG.fillCircle(tx + 3, ty - 30, Phaser.Math.Between(10, 18));
            }
        }

        // --- Layer 5: Foreground ambient particles ---
        if (this.isWorld1) {
            // Flower petals falling
            this.petals = [];
            for (let i = 0; i < 25; i++) {
                const colors = [0xFF69B4, 0xFFB6C1, 0xFF1493, 0xFFDAB9, 0xFFC0CB];
                const petal = this.add.circle(
                    Phaser.Math.Between(0, 800),
                    Phaser.Math.Between(-50, 600),
                    Phaser.Math.Between(1, 3),
                    colors[i % 5]
                );
                petal.setScrollFactor(0);
                petal.setAlpha(Phaser.Math.FloatBetween(0.3, 0.7));
                petal.petalSpeed = Phaser.Math.FloatBetween(0.2, 0.6);
                petal.petalDrift = Phaser.Math.FloatBetween(-0.3, 0.3);
                this.petals.push(petal);
            }
            // Flowers are created in createFlowers() after ground
        } else {
            // Fireflies for park
            this.fireflies = [];
            for (let i = 0; i < 20; i++) {
                const ff = this.add.circle(
                    Phaser.Math.Between(0, 800),
                    Phaser.Math.Between(100, 500),
                    Phaser.Math.Between(1, 2),
                    0xFFFF88
                );
                ff.setScrollFactor(0);
                ff.setAlpha(0);
                ff.ffPhase = Phaser.Math.FloatBetween(0, Math.PI * 2);
                ff.ffSpeed = Phaser.Math.FloatBetween(0.01, 0.03);
                ff.ffDriftX = Phaser.Math.FloatBetween(-0.2, 0.2);
                ff.ffDriftY = Phaser.Math.FloatBetween(-0.15, 0.15);
                this.fireflies.push(ff);
            }
            // Lamp posts along the ground
            for (let i = 0; i < Math.floor(levelW / 400); i++) {
                const lx = 200 + i * 400;
                const pole = this.add.rectangle(lx, 490, 4, 80, 0x555555);
                pole.setScrollFactor(1);
                const lamp = this.add.circle(lx, 450, 6, 0xFFD700, 0.5);
                lamp.setScrollFactor(1);
                const glow = this.add.circle(lx, 452, 20, 0xFFD700, 0.1);
                glow.setScrollFactor(1);
            }
        }
    }

    // ==================== FLOWERS ON GROUND ====================
    createFlowers(levelW) {
        if (this.isWorld1) {
            const flowerTypes = ['flower_daisy', 'flower_tulip', 'flower_sunflower', 'flower_rose'];
            for (let i = 0; i < 60; i++) {
                const fx = Phaser.Math.Between(50, levelW - 50);
                const fType = flowerTypes[i % 4];
                const flower = this.add.image(fx, 548, fType);
                flower.setScale(Phaser.Math.FloatBetween(2, 3.5));
                flower.setScrollFactor(1);
                flower.setOrigin(0.5, 1);
                flower.setDepth(1);
            }
        } else {
            // Small park flowers (fewer, muted colors)
            const flowerTypes = ['flower_rose', 'flower_daisy'];
            for (let i = 0; i < 25; i++) {
                const fx = Phaser.Math.Between(50, levelW - 50);
                const fType = flowerTypes[i % 2];
                const flower = this.add.image(fx, 548, fType);
                flower.setScale(Phaser.Math.FloatBetween(1.5, 2.5));
                flower.setScrollFactor(1);
                flower.setOrigin(0.5, 1);
                flower.setDepth(1);
                flower.setAlpha(0.7);
            }
        }
    }


    // ==================== UPDATE PARALLAX ====================
    updateParallax() {
        const camX = this.cameras.main.scrollX;

        // Move far background slowly
        if (this.bgFar) {
            this.bgFar.tilePositionX = camX * 0.1;
        }
        // Move main background at medium speed
        if (this.bgMain) {
            this.bgMain.tilePositionX = camX * 0.3;
        }

        // Animate clouds drifting
        if (this.clouds) {
            this.clouds.forEach(cloud => {
                cloud.x += cloud.cloudSpeed;
                if (cloud.x > 900) cloud.x = -100;
            });
        }

        // Animate petals (spring)
        if (this.petals) {
            this.petals.forEach(petal => {
                petal.y += petal.petalSpeed;
                petal.x += petal.petalDrift + Math.sin(petal.y * 0.02) * 0.3;
                if (petal.y > 620) {
                    petal.y = -10;
                    petal.x = Phaser.Math.Between(0, 800);
                }
            });
        }

        // Animate fireflies (park)
        if (this.fireflies) {
            this.fireflies.forEach(ff => {
                ff.ffPhase += ff.ffSpeed;
                ff.setAlpha(Math.abs(Math.sin(ff.ffPhase)) * 0.6);
                ff.x += ff.ffDriftX + Math.sin(ff.ffPhase * 0.7) * 0.2;
                ff.y += ff.ffDriftY + Math.cos(ff.ffPhase * 0.5) * 0.15;
                if (ff.x > 820) ff.x = -20;
                if (ff.x < -20) ff.x = 820;
                if (ff.y > 550) ff.y = 100;
                if (ff.y < 50) ff.y = 500;
            });
        }
    }

    // ==================== GROUND ====================
    createGround(levelW) {
        const tileKey = this.isWorld1 ? 'ground_spring' : 'ground_park';
        const numTiles = Math.ceil(levelW / 32) + 2;

        // Fill the bottom of the screen with dirt/stone color so background doesn't show
        const dirtColor = this.isWorld1 ? 0x8D6E3F : 0x616161;
        const dirtFill = this.add.graphics();
        dirtFill.fillStyle(dirtColor, 1);
        dirtFill.fillRect(0, 548, levelW, 52); // Fill from ground top to bottom of screen
        dirtFill.setScrollFactor(1);
        dirtFill.setDepth(0);

        // Create gaps in certain levels for challenge
        const gaps = [];
        if (this.levelIdx >= 2) {
            // Add 1-2 gaps starting from level 3
            const numGaps = Math.min(this.levelIdx - 1, 3);
            for (let g = 0; g < numGaps; g++) {
                gaps.push(Phaser.Math.Between(8 + g * 10, 12 + g * 10));
            }
        }

        for (let i = 0; i < numTiles; i++) {
            const isGap = gaps.includes(i) || gaps.includes(i - 1);
            if (isGap) {
                // Clear dirt fill at gap positions so player can fall through
                const gapFill = this.add.graphics();
                gapFill.fillStyle(0x000000, 0); // Transparent
                gapFill.setScrollFactor(1);
                // Draw a dark pit visual at gap
                const pitG = this.add.graphics();
                pitG.fillStyle(0x000000, 1);
                pitG.fillRect(i * 32, 548, 32, 52);
                pitG.setScrollFactor(1);
                pitG.setDepth(0);
                continue;
            }
            const tile = this.platforms.create(i * 32, 564, tileKey);
            tile.setScale(2);
            tile.refreshBody();
            tile.body.setSize(32, 32);
        }
    }

    // ==================== PLATFORMS ====================
    createPlatforms() {
        const tileKey = this.isWorld1 ? 'plat_spring' : 'plat_park';
        this.levelData.platforms.forEach(p => {
            for (let i = 0; i < p[2]; i++) {
                const plat = this.platforms.create(p[0] + i * 32, p[1], tileKey);
                plat.setScale(2);
                plat.refreshBody();
                plat.body.setSize(32, 16);
            }
        });
    }

    // ==================== HEARTS ====================
    createHearts() {
        this.levelData.hearts.forEach(h => {
            const heart = this.heartsGroup.create(h[0], h[1], 'heart');
            heart.setScale(3);
            heart.body.setAllowGravity(false);
            heart.body.setImmovable(true);
            heart.baseY = h[1]; // Store base Y for floating animation
        });
    }

    // ==================== ENEMIES ====================
    createEnemies() {
        this.levelData.enemies.forEach(e => {
            const enemy = this.enemiesGroup.create(e.x, 400, e.type);
            enemy.setScale(2.5);
            enemy.setBounce(0);
            enemy.setCollideWorldBounds(true);
            enemy.patrolStart = e.x - e.patrol;
            enemy.patrolEnd = e.x + e.patrol;
            enemy.setVelocityX(60 + this.levelIdx * 5);
            enemy.direction = 1;
            enemy.enemyType = e.type; // Store enemy type for animations
            enemy.walkTimer = 0; // Timer for walk animation
            enemy.walkFrame = 0; // Current walk frame
            if (e.type === 'balloonboy') {
                enemy.balloonTimer = Phaser.Math.Between(1000, 3000);
            } else if (e.type === 'chica') {
                enemy.cupcakeTimer = Phaser.Math.Between(1500, 3000);
            } else if (e.type === 'bonnie') {
                enemy.guitarBlastTimer = 0;
                enemy.isGuitarBlasting = false;
            }
        });
    }

    // ==================== QUESTION BLOCKS ====================
    createQBlocks() {
        if (!this.levelData.qblocks) return;
        this.levelData.qblocks.forEach(q => {
            const block = this.qblocksGroup.create(q[0], q[1], 'qblock');
            block.setScale(2.5);
            block.refreshBody();
            block.body.setSize(16, 16);
            block.isHit = false;
            // Gentle floating animation
            this.tweens.add({
                targets: block,
                y: q[1] - 3,
                duration: 900,
                yoyo: true,
                repeat: -1,
                ease: 'Sine.easeInOut'
            });
        });
    }

    hitQBlock(player, block) {
        // Only trigger when player hits from below (head hits bottom of block)
        if (block.isHit) return;
        if (player.body.blocked.up) {
            block.isHit = true;

            // Stop floating tween and bump the block
            this.tweens.killTweensOf(block);
            this.tweens.add({
                targets: block,
                y: block.y - 10,
                duration: 80,
                yoyo: true,
                ease: 'Power2',
                onComplete: () => {
                    block.setTexture('qblock_hit');
                    block.refreshBody();
                }
            });

            // Spawn sparkle effect
            for (let i = 0; i < 6; i++) {
                const spark = this.add.rectangle(
                    block.x + Phaser.Math.Between(-16, 16),
                    block.y - 10,
                    4, 4, 0xFFD700
                );
                this.tweens.add({
                    targets: spark,
                    x: spark.x + Phaser.Math.Between(-40, 40),
                    y: spark.y + Phaser.Math.Between(-50, -10),
                    alpha: 0,
                    duration: 500,
                    ease: 'Power2',
                    onComplete: () => spark.destroy()
                });
            }

            this.activateSquirrelPower();
        }
    }

    activateSquirrelPower() {
        this.squirrelPower = true;
        this.flyEnergy = this.maxFlyEnergy;
        this.flutterLeft = 4; // 4 flutter jumps while power lasts

        // Update HUD
        this.squirrelHUD.setVisible(true);
        this.updateFlyBar();

        // Tint player orange-brown like a squirrel
        this.player.setTint(0xD2691E);

        // Show power-up text
        const pwrText = this.add.text(this.player.x, this.player.y - 60, '🐿️ ¡PODER ARDILLA!', {
            fontSize: '18px', fill: '#FF8C00', fontFamily: 'Arial', fontStyle: 'bold',
            stroke: '#000', strokeThickness: 3
        }).setOrigin(0.5).setScrollFactor(1).setDepth(50);

        this.tweens.add({
            targets: pwrText,
            y: pwrText.y - 60,
            alpha: 0,
            duration: 1500,
            ease: 'Power2',
            onComplete: () => pwrText.destroy()
        });
    }

    updateFlyBar() {
        if (!this.squirrelHUD) return;
        const pct = this.flyEnergy / this.maxFlyEnergy;
        this.flyBarFill.scaleX = Math.max(0, pct);
        // Color: green → yellow → red
        const col = pct > 0.5 ? 0x44FF44 : pct > 0.25 ? 0xFFCC00 : 0xFF4444;
        this.flyBarFill.setFillStyle(col);
    }

    // ==================== UI ====================
    createUI() {
        const worldName = this.isWorld1 ? '🌸 Primavera' : '🌳 Parque';
        const levelNum = this.levelIdx + 1;

        // Semi-transparent UI bar
        const uiBg = this.add.rectangle(400, 22, 800, 44, 0x000000, 0.4);
        uiBg.setScrollFactor(0);

        this.scoreText = this.add.text(16, 10, '❤️ ' + this.score, {
            fontSize: '22px', fill: '#FFFFFF', fontFamily: 'Arial', fontStyle: 'bold'
        });
        this.scoreText.setScrollFactor(0);

        this.add.text(400, 10, worldName + ' - Nivel ' + levelNum, {
            fontSize: '18px', fill: '#FFD700', fontFamily: 'Arial', fontStyle: 'bold'
        }).setOrigin(0.5, 0).setScrollFactor(0);

        // Lives display
        for (let i = 0; i < this.lives; i++) {
            const lifeIcon = this.add.image(750 - i * 25, 22, 'heart');
            lifeIcon.setScale(2.5);
            lifeIcon.setScrollFactor(0);
        }

        // Level name subtitle
        this.add.text(400, 560, '"' + this.levelData.name + '"', {
            fontSize: '14px', fill: '#FFFFFF', fontFamily: 'Arial', fontStyle: 'italic'
        }).setOrigin(0.5, 0).setScrollFactor(0).setAlpha(0.6);

        // ===== SQUIRREL POWER HUD (hidden until activated) =====
        this.squirrelHUD = this.add.container(16, 52).setScrollFactor(0).setVisible(false).setDepth(10);
        // Icon
        const sqIcon = this.add.image(7, 7, 'squirrel_icon').setScale(2);
        // Label
        const sqLabel = this.add.text(22, 0, '🐿️ ARDILLA', {
            fontSize: '11px', fill: '#FF8C00', fontFamily: 'Arial', fontStyle: 'bold'
        });
        // Bar background
        const barBg = this.add.rectangle(22, 16, 80, 8, 0x333333).setOrigin(0, 0.5);
        // Bar fill (starts full)
        this.flyBarFill = this.add.rectangle(22, 16, 80, 8, 0x44FF44).setOrigin(0, 0.5);
        // Flutter counter
        this.flutterText = this.add.text(106, 10, '✈x4', {
            fontSize: '11px', fill: '#FFFFFF', fontFamily: 'Arial', fontStyle: 'bold'
        });
        this.squirrelHUD.add([sqIcon, sqLabel, barBg, this.flyBarFill, this.flutterText]);
    }


    // ==================== UPDATE LOOP ====================
    update(time, delta) {
        if (this.isDead) return;

        // Update parallax scrolling background
        this.updateParallax();

        const onGround = this.player.body.touching.down || this.player.body.blocked.down;

        // Movement
        const left = this.cursors.left.isDown || this.wasd.left.isDown || (window.mobileControls && window.mobileControls.left);
        const right = this.cursors.right.isDown || this.wasd.right.isDown || (window.mobileControls && window.mobileControls.right);
        const jump = this.cursors.up.isDown || this.wasd.up.isDown || this.wasd.space.isDown || (window.mobileControls && window.mobileControls.up);
        const jumpJustPressed = jump && !this.prevJump;
        this.prevJump = jump;

        if (this.playerStunned) {
            // Player is stunned by Bonnie's guitar blast, let physics knockback take over
        } else {
            if (left) {
                this.player.setVelocityX(-220);
                this.player.setFlipX(true);
                if (onGround) this.player.setTexture(this.squirrelPower ? 'player_squirrel' : 'player_walk');
            } else if (right) {
                this.player.setVelocityX(220);
                this.player.setFlipX(false);
                if (onGround) this.player.setTexture(this.squirrelPower ? 'player_squirrel' : 'player_walk');
            } else {
                this.player.setVelocityX(0);
                if (onGround) this.player.setTexture(this.squirrelPower ? 'player_squirrel' : 'player');
            }

            // === NORMAL JUMP ===
            if (jumpJustPressed && onGround) {
                this.player.setVelocityY(-500);
                this.player.setTexture(this.squirrelPower ? 'player_squirrel_fly' : 'player_jump');
            }
        }

        // === SQUIRREL POWER: FLUTTER JUMP & GLIDE ===
        if (this.squirrelPower) {
            // Regenerate fly energy slowly when on ground
            if (onGround) {
                this.flyEnergy = Math.min(this.maxFlyEnergy, this.flyEnergy + 18 * (delta / 1000));
                // Restore flutter charges when back on ground
                if (this.flutterLeft < 4) this.flutterLeft = 4;
            }

            // Flutter jump: press jump while airborne
            if (jumpJustPressed && !onGround && this.flutterLeft > 0 && this.flyEnergy > 0) {
                this.flutterLeft--;
                this.flyEnergy = Math.max(0, this.flyEnergy - 22);
                this.player.setVelocityY(-380);
                this.player.setTexture('player_squirrel_fly');

                // Orange sparkle particles
                for (let i = 0; i < 4; i++) {
                    const sp = this.add.rectangle(
                        this.player.x + Phaser.Math.Between(-10, 10),
                        this.player.y + Phaser.Math.Between(0, 10),
                        5, 5, 0xFF8C00
                    );
                    this.tweens.add({
                        targets: sp,
                        x: sp.x + Phaser.Math.Between(-20, 20),
                        y: sp.y + 30,
                        alpha: 0, duration: 300,
                        onComplete: () => sp.destroy()
                    });
                }
                this.flutterText.setText('✈x' + this.flutterLeft);
            }

            // Glide: hold jump while in air to reduce fall speed
            if (jump && !onGround && this.flyEnergy > 0) {
                if (this.player.body.velocity.y > 80) {
                    this.player.body.setVelocityY(this.player.body.velocity.y - 12);
                }
                this.flyEnergy = Math.max(0, this.flyEnergy - 6 * (delta / 1000));
            }

            // Energy depleted: lose power → revert to normal
            if (this.flyEnergy <= 0 && !onGround) {
                this.squirrelPower = false;
                this.player.clearTint();
                this.player.setTexture('player_jump');
                this.squirrelHUD.setVisible(false);
            }

            // Update HUD
            this.updateFlyBar();
            if (onGround) this.flutterText.setText('✈x' + this.flutterLeft);
        }

        if (!onGround) {
            // Use squirrel fly texture if in squirrel power, else normal jump
            if (this.squirrelPower) {
                this.player.setTexture('player_squirrel_fly');
                this.player.clearTint();
            } else {
                this.player.setTexture('player_jump');
            }
        } else if (this.squirrelPower) {
            this.player.clearTint();
        } else {
            this.player.clearTint();
        }

        // Heart floating animation
        this.heartTimer += delta;
        this.heartsGroup.children.iterate(heart => {
            if (heart && heart.active) {
                heart.y = heart.baseY + Math.sin(this.heartTimer * 0.003 + heart.x) * 5;
            }
        });

        // Enemy patrol AI + walking animation
        this.enemiesGroup.children.iterate(enemy => {
            if (!enemy || !enemy.active) return;

            // Handle Bonnie blast cooldowns
            if (enemy.enemyType === 'bonnie') {
                if (enemy.guitarBlastTimer > 0) {
                    enemy.guitarBlastTimer -= delta;
                }
                
                // If currently blasting, skip patrol movement and walking animation
                if (enemy.isGuitarBlasting) {
                    return;
                }

                // Check distance to trigger guitar blast
                if (enemy.guitarBlastTimer <= 0 && !this.isDead) {
                    const distH = Math.abs(this.player.x - enemy.x);
                    const distV = Math.abs(this.player.y - enemy.y);
                    if (distH < 110 && distV < 60) {
                        // Trigger guitar blast!
                        enemy.isGuitarBlasting = true;
                        enemy.setVelocityX(0);
                        enemy.setTexture('bonnie_guitar');
                        enemy.guitarBlastTimer = 2500; // 2.5 seconds cooldown
                        
                        // Face the player when blasting
                        enemy.setFlipX(this.player.x < enemy.x);

                        // Create soundwave particle
                        const wave = this.add.image(enemy.x + (enemy.flipX ? -20 : 20), enemy.y, 'soundwave');
                        wave.setScale(2.5);
                        wave.setFlipX(enemy.flipX);
                        this.tweens.add({
                            targets: wave,
                            x: wave.x + (enemy.flipX ? -120 : 120),
                            scaleX: 5,
                            scaleY: 5,
                            alpha: 0,
                            duration: 450,
                            onComplete: () => wave.destroy()
                        });

                        // Push player if they are in range
                        const pushDir = this.player.x < enemy.x ? -1 : 1;
                        this.player.setVelocityX(pushDir * 420);
                        this.player.setVelocityY(-220);
                        this.playerStunned = true;
                        
                        this.time.delayedCall(300, () => {
                            this.playerStunned = false;
                        });

                        // Visual shock text
                        const shockText = this.add.text(this.player.x, this.player.y - 35, '🎸 BLAST! 🎸', {
                            fontSize: '12px', fill: '#39ff14', fontFamily: 'Arial', fontStyle: 'bold',
                            stroke: '#000000', strokeThickness: 3
                        }).setOrigin(0.5);
                        this.tweens.add({
                            targets: shockText,
                            y: shockText.y - 30,
                            alpha: 0,
                            duration: 600,
                            onComplete: () => shockText.destroy()
                        });

                        // Resume patrol after 800ms
                        this.time.delayedCall(800, () => {
                            if (enemy && enemy.active) {
                                enemy.isGuitarBlasting = false;
                                enemy.setVelocityX(enemy.direction * (60 + this.levelIdx * 5));
                            }
                        });
                        
                        return; // skip patrol updates for this frame
                    }
                }
            }

            // Chica cupcake throwing timer
            if (enemy.enemyType === 'chica' && !this.isDead) {
                enemy.cupcakeTimer -= delta;
                if (enemy.cupcakeTimer <= 0) {
                    enemy.cupcakeTimer = Phaser.Math.Between(3000, 4500); // 3 to 4.5 seconds
                    this.throwCupcake(enemy);
                }
            }

            if (enemy.x >= enemy.patrolEnd) {
                enemy.direction = -1;
                enemy.setVelocityX(-(60 + this.levelIdx * 5));
                enemy.setFlipX(true);
            } else if (enemy.x <= enemy.patrolStart) {
                enemy.direction = 1;
                enemy.setVelocityX(60 + this.levelIdx * 5);
                enemy.setFlipX(false);
            }

            // Walking animation for all animatronics
            enemy.walkTimer += delta;
            if (enemy.walkTimer > 300) {
                enemy.walkTimer = 0;
                enemy.walkFrame = enemy.walkFrame === 0 ? 1 : 0;
                const baseTexture = enemy.enemyType;
                enemy.setTexture(enemy.walkFrame === 0 ? baseTexture : baseTexture + '_walk');
            }

            // Shoot balloons if Balloon Boy
            if (enemy.enemyType === 'balloonboy') {
                enemy.balloonTimer -= delta;
                if (enemy.balloonTimer <= 0) {
                    enemy.balloonTimer = Phaser.Math.Between(2500, 4500);
                    this.releaseBalloon(enemy);
                }
            }
        });

        // Update active balloons
        this.balloonsGroup.children.iterate(balloon => {
            if (balloon && balloon.active) {
                balloon.sineTimer = (balloon.sineTimer || 0) + delta * 0.003;
                balloon.body.setVelocityY(balloon.baseVy + Math.sin(balloon.sineTimer) * 25);
                if (Math.abs(balloon.x - this.player.x) > 800) {
                    balloon.destroy();
                }
            }
        });

        // Fall into pit = death
        if (this.player.y > 580) {
            this.playerDie();
        }
    }


    // ==================== INTERACTIONS ====================
    collectHeart(player, heart) {
        for (let i = 0; i < 5; i++) {
            const p = this.add.image(heart.x, heart.y, 'heart');
            p.setScale(1.5);
            this.tweens.add({
                targets: p,
                x: heart.x + Phaser.Math.Between(-40, 40),
                y: heart.y + Phaser.Math.Between(-50, -20),
                alpha: 0, scale: 0.5, duration: 400, ease: 'Power2',
                onComplete: () => p.destroy()
            });
        }
        heart.disableBody(true, true);
        this.score += 1;
        this.registry.set('score', this.score);
        this.scoreText.setText('❤️ ' + this.score);
    }

    hitEnemy(player, enemy) {
        // === SQUIRREL ATTACK: flying into an enemy destroys it ===
        if (this.squirrelPower && !player.body.blocked.down) {
            // Squirrel slam — kill enemy regardless of angle
            player.setVelocityY(-250);
            this.tweens.add({
                targets: enemy,
                alpha: 0, scaleX: 3, scaleY: 0.5, duration: 200,
                onComplete: () => enemy.disableBody(true, true)
            });
            // Bonus points for squirrel kill
            this.score += 10;
            this.registry.set('score', this.score);
            this.scoreText.setText('❤️ ' + this.score);

            // Score popup
            const bonus = this.add.text(enemy.x, enemy.y - 20, '+10 ⚡', {
                fontSize: '16px', fill: '#FF8C00', fontFamily: 'Arial', fontStyle: 'bold',
                stroke: '#000', strokeThickness: 2
            }).setOrigin(0.5).setDepth(50);
            this.tweens.add({
                targets: bonus, y: bonus.y - 50, alpha: 0, duration: 800,
                onComplete: () => bonus.destroy()
            });
            return;
        }

        // === NORMAL STOMP ===
        if (player.body.velocity.y > 0 && player.y < enemy.y - 10) {
            player.setVelocityY(-300);
            this.tweens.add({
                targets: enemy,
                alpha: 0, scaleX: 3, scaleY: 0.5, duration: 200,
                onComplete: () => enemy.disableBody(true, true)
            });
            this.score += 5;
            this.registry.set('score', this.score);
            this.scoreText.setText('❤️ ' + this.score);
        } else {
            // Hit by enemy: lose squirrel power first (buffer), then die
            if (this.squirrelPower) {
                this.squirrelPower = false;
                this.flyEnergy = 0;
                this.flutterLeft = 0;
                this.player.clearTint();
                this.player.setTexture('player');
                this.squirrelHUD.setVisible(false);
                player.setVelocityY(-300);
                this.cameras.main.flash(150, 255, 100, 0, true);
            } else {
                this.playerDie();
            }
        }
    }


    releaseBalloon(enemy) {
        const colors = ['red', 'blue', 'yellow', 'green'];
        const color = Phaser.Utils.Array.GetRandom(colors);
        const bx = enemy.x + (enemy.flipX ? -10 : 10);
        const by = enemy.y - 10;

        const balloon = this.balloonsGroup.create(bx, by, 'balloon_' + color);
        balloon.setScale(2.5);
        balloon.body.setAllowGravity(false);
        balloon.body.setSize(10, 14);
        balloon.body.setOffset(1, 1);
        
        const speedX = enemy.flipX ? -90 : 90;
        const speedY = -15;
        balloon.setVelocity(speedX, speedY);
        balloon.baseVy = speedY;
        balloon.sineTimer = Phaser.Math.FloatBetween(0, Math.PI * 2);
    }

    hitBalloon(player, balloon) {
        balloon.destroy();
        // If in squirrel mode, lose power instead of dying
        if (this.squirrelPower) {
            this.squirrelPower = false;
            this.flyEnergy = 0;
            this.flutterLeft = 0;
            this.player.clearTint();
            this.player.setTexture('player');
            this.squirrelHUD.setVisible(false);
            player.setVelocityY(-300);
            this.cameras.main.flash(150, 255, 0, 0, true);
        } else {
            this.playerDie();
        }
    }

    playerDie() {
        if (this.isDead) return;
        this.isDead = true;

        this.lives -= 1;
        this.registry.set('lives', this.lives);

        // ===== SONIC-STYLE DEATH ANIMATION =====
        // Stop all physics
        this.physics.pause();

        // Flash the player and set to jump texture (arms spread)
        this.player.setTint(0xff0000);
        this.player.setTexture('player_jump');
        this.player.setDepth(100); // Make sure player is on top of everything

        // Camera stops following
        this.cameras.main.stopFollow();

        // Phase 1: Bounce UP (like Sonic's death)
        const playerX = this.player.x;
        const playerY = this.player.y;

        this.tweens.add({
            targets: this.player,
            y: playerY - 200, // Launch upward
            duration: 500,
            ease: 'Power2.easeOut',
            onUpdate: () => {
                // Spin the player while going up
                this.player.angle += 15;
            },
            onComplete: () => {
                // Phase 2: Brief pause at the top
                this.time.delayedCall(200, () => {
                    // Phase 3: Fall down off screen
                    this.tweens.add({
                        targets: this.player,
                        y: playerY + 400, // Fall way below the screen
                        duration: 800,
                        ease: 'Power2.easeIn',
                        onUpdate: () => {
                            // Keep spinning while falling
                            this.player.angle += 20;
                        },
                        onComplete: () => {
                            // After animation finishes, handle game state
                            if (this.lives <= 0) {
                                this.showGameOver();
                            } else {
                                this.scene.restart();
                            }
                        }
                    });
                });
            }
        });

        // Screen flash effect
        this.cameras.main.flash(200, 255, 0, 0, true);
    }

    showGameOver() {
        // Dark overlay
        const overlay = this.add.rectangle(400, 300, 800, 600, 0x000000, 0);
        overlay.setScrollFactor(0);
        overlay.setDepth(200);

        this.tweens.add({
            targets: overlay,
            alpha: 0.8,
            duration: 500
        });

        // Broken heart icon animation
        const heartIcon = this.add.text(400, 250, '💔', { fontSize: '60px' });
        heartIcon.setOrigin(0.5).setScrollFactor(0).setDepth(201).setAlpha(0);

        const gameOverText = this.add.text(400, 320, 'Game Over', {
            fontSize: '42px', fill: '#FF1744', fontFamily: 'Arial', fontStyle: 'bold'
        });
        gameOverText.setOrigin(0.5).setScrollFactor(0).setDepth(201).setAlpha(0);

        const retryText = this.add.text(400, 370, 'Haz clic para reintentar', {
            fontSize: '18px', fill: '#FFFFFF', fontFamily: 'Arial'
        });
        retryText.setOrigin(0.5).setScrollFactor(0).setDepth(201).setAlpha(0);

        // Animate texts in
        this.time.delayedCall(300, () => {
            this.tweens.add({ targets: heartIcon, alpha: 1, y: 240, duration: 400, ease: 'Back.easeOut' });
        });
        this.time.delayedCall(600, () => {
            this.tweens.add({ targets: gameOverText, alpha: 1, duration: 400 });
        });
        this.time.delayedCall(900, () => {
            this.tweens.add({ targets: retryText, alpha: 1, duration: 400 });
            // Enable click to restart
            this.input.on('pointerdown', () => {
                this.registry.set('currentLevel', 1);
                this.registry.set('score', 0);
                this.registry.set('lives', 3);
                this.scene.restart();
            });
        });
    }

    winLevel() {
        if (this.isDead) return;
        this.isDead = true;
        this.physics.pause();

        // Victory flash
        this.cameras.main.flash(500, 255, 215, 0);

        this.time.delayedCall(600, () => {
            this.scene.start('CardScene');
        });
    }

    throwCupcake(chica) {
        if (!chica.active || this.isDead) return;
        
        // Only throw if the player is reasonably close (e.g. 500 pixels)
        const dist = Phaser.Math.Distance.Between(chica.x, chica.y, this.player.x, this.player.y);
        if (dist > 500) return;

        const cupcake = this.cupcakesGroup.create(chica.x, chica.y - 15, 'cupcake');
        cupcake.setScale(2.5);
        cupcake.body.setAllowGravity(true);
        cupcake.body.setSize(10, 10);
        cupcake.body.setOffset(1, 1);
        
        // Calculate throw direction towards player
        const dir = this.player.x < chica.x ? -1 : 1;
        
        // Parabolic arc speed (medium difficulty)
        const vx = dir * 180;
        const vy = -320; // lobs upward and falls down
        
        cupcake.setVelocity(vx, vy);
        cupcake.setAngularVelocity(dir * 180); // rotates as it flies
    }

    hitCupcakePlatform(cupcake, platform) {
        cupcake.destroy();
    }

    hitCupcake(player, cupcake) {
        cupcake.destroy();
        // If in squirrel mode, lose power instead of dying
        if (this.squirrelPower) {
            this.squirrelPower = false;
            this.flyEnergy = 0;
            this.flutterLeft = 0;
            this.player.clearTint();
            this.player.setTexture('player');
            this.squirrelHUD.setVisible(false);
            player.setVelocityY(-300);
            this.cameras.main.flash(150, 255, 0, 0, true);
        } else {
            this.playerDie();
        }
    }
}
