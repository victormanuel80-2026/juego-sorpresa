class BootScene extends Phaser.Scene {
    constructor() {
        super('BootScene');
    }

    preload() {
        // Show loading text
        this.add.text(400, 300, 'Cargando tu sorpresa...', {
            fontSize: '24px', fill: '#ff69b4', fontFamily: 'Arial'
        }).setOrigin(0.5);

        // Load background images
        this.load.image('bg_spring', 'assets/bg_spring.png');
        this.load.image('bg_park', 'assets/bg_park.png');
        this.load.image('card_img', 'assets/card.png');
    }

    create() {
        // Generate all pixel art sprites programmatically
        this.generateAllSprites();

        // Initialize game state
        this.registry.set('currentLevel', 4);
        this.registry.set('score', 0);
        this.registry.set('lives', 3);

        this.scene.start('GameScene');
    }

    // ==================== HELPER ====================
    px(ctx, x, y, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, 1, 1);
    }

    rect(ctx, x, y, w, h, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, w, h);
    }

    drawMap(ctx, palette, rows, ox, oy) {
        ox = ox || 0; oy = oy || 0;
        for (let y = 0; y < rows.length; y++) {
            for (let x = 0; x < rows[y].length; x++) {
                const c = rows[y][x];
                if (c !== '.' && palette[c]) {
                    ctx.fillStyle = palette[c];
                    ctx.fillRect(ox + x, oy + y, 1, 1);
                }
            }
        }
    }

    generateAllSprites() {
        this.genPlayer();
        this.genPlayerJump();
        this.genPlayerWalk();
        this.genFreddy();
        this.genFreddyWalk();
        this.genBonnie();
        this.genBonnieWalk();
        this.genChica();
        this.genChicaWalk();
        this.genFoxy();
        this.genFoxyWalk();
        this.genBalloonBoy();
        this.genBalloonBoyWalk();
        this.genHeart();
        this.genGroundSpring();
        this.genGroundPark();
        this.genPlatformSpring();
        this.genPlatformPark();
        this.genGoalFlag();
        this.genCloud();
        this.genFlowerDaisy();
        this.genFlowerTulip();
        this.genFlowerSunflower();
        this.genFlowerRose();
        this.genBalloons();
        this.genQBlock();
        this.genQBlockHit();
        this.genSquirrelIcon();
        this.genPlayerSquirrel();
        this.genPlayerSquirrelFly();
        this.genCupcake();
        this.genBonnieGuitar();
        this.genSoundwave();
    }

    // ==================== QUESTION BLOCK ====================
    genQBlock() {
        const c = this.textures.createCanvas('qblock', 16, 16);
        const ctx = c.getContext();
        const r = (x, y, w, h, col) => { ctx.fillStyle = col; ctx.fillRect(x, y, w, h); };
        // Outer dark gold border
        r(0, 0, 16, 16, '#7D5A00');
        // Bright gold fill (fully yellow - no black center)
        r(1, 1, 14, 14, '#FFD700');
        // Highlight top/left edge
        r(1, 1, 13, 1, '#FFE84D');
        r(1, 1, 1, 13, '#FFE84D');
        // Shadow bottom/right edge
        r(2, 14, 13, 1, '#B38600');
        r(14, 2, 1, 12, '#B38600');
        // Inner amber square (gives depth like reference image)
        r(3, 3, 10, 10, '#FFC200');
        // Dark brown ? symbol on amber background
        r(5, 4, 4, 1, '#5A3E00');  // top bar
        r(4, 5, 1, 1, '#5A3E00');  // left curve
        r(8, 5, 1, 1, '#5A3E00');  // right top
        r(8, 6, 1, 1, '#5A3E00');  // right bottom
        r(7, 7, 1, 1, '#5A3E00');  // elbow
        r(7, 8, 1, 1, '#5A3E00');  // stem
        r(7, 10, 2, 1, '#5A3E00'); // dot
        c.refresh();
    }

    genQBlockHit() {
        const c = this.textures.createCanvas('qblock_hit', 16, 16);
        const ctx = c.getContext();
        const r = (x, y, w, h, col) => { ctx.fillStyle = col; ctx.fillRect(x, y, w, h); };
        // Grey used block
        r(0, 0, 16, 16, '#555555');
        r(1, 1, 14, 14, '#888888');
        r(1, 1, 13, 1, '#AAAAAA');
        r(1, 1, 1, 13, '#AAAAAA');
        r(2, 14, 13, 1, '#333333');
        r(14, 2, 1, 12, '#333333');
        r(3, 3, 10, 10, '#666666');
        c.refresh();
    }

    genSquirrelIcon() {
        // 14x14 squirrel face icon for UI
        const c = this.textures.createCanvas('squirrel_icon', 14, 14);
        const ctx = c.getContext();
        const r = (x, y, w, h, col) => { ctx.fillStyle = col; ctx.fillRect(x, y, w, h); };
        // Bushy tail (brown)
        r(0, 3, 3, 8, '#8B4513');
        r(0, 2, 2, 1, '#A0522D');
        r(1, 10, 2, 2, '#A0522D');
        // Body (brown)
        r(3, 5, 7, 7, '#A0522D');
        r(3, 4, 6, 1, '#C0724D');
        // Head
        r(4, 1, 6, 5, '#C0724D');
        r(5, 0, 4, 1, '#A0522D');  // top of head
        // Ears
        r(4, 0, 1, 2, '#8B4513');
        r(9, 0, 1, 2, '#8B4513');
        // Eyes
        r(5, 2, 1, 1, '#1a1a1a');
        r(8, 2, 1, 1, '#1a1a1a');
        // Nose
        r(6, 4, 2, 1, '#FF6B6B');
        // Feet/legs
        r(4, 12, 2, 2, '#8B4513');
        r(8, 12, 2, 2, '#8B4513');
        c.refresh();
    }

    // ==================== SQUIRREL PLAYER ====================
    genPlayerSquirrel() {
        const c = this.textures.createCanvas('player_squirrel', 16, 24);
        const ctx = c.getContext();
        const r = (x, y, w, h, col) => { ctx.fillStyle = col; ctx.fillRect(x, y, w, h); };
        // === SQUIRREL EARS (round, brown) ===
        r(3, 0, 2, 3, '#8B4513');  r(4, 1, 1, 1, '#C0724D');  // left ear
        r(11, 0, 2, 3, '#8B4513'); r(11, 1, 1, 1, '#C0724D'); // right ear
        // === HAIR ===
        r(3, 1, 10, 3, '#5C3317'); r(2, 2, 12, 2, '#5C3317');
        r(2, 4, 2, 7, '#5C3317');  r(12, 4, 2, 7, '#5C3317');
        r(1, 4, 1, 5, '#5C3317');  r(14, 4, 1, 5, '#5C3317');
        r(5, 2, 2, 1, '#7B4F2A');  r(9, 2, 2, 1, '#7B4F2A');
        // === FACE ===
        r(4, 4, 8, 7, '#FFDAB9'); r(5, 3, 6, 1, '#FFDAB9');
        r(5, 6, 2, 2, '#2C1810'); r(9, 6, 2, 2, '#2C1810');
        r(5, 6, 1, 1, '#FFFFFF'); r(9, 6, 1, 1, '#FFFFFF');
        r(4, 8, 2, 1, '#FFB0B0'); r(10, 8, 2, 1, '#FFB0B0');
        r(6, 9, 4, 1, '#E88088');
        // === FLUFFY TAIL (right side) ===
        r(14, 11, 2, 6, '#A0522D');
        r(15, 10, 1, 8, '#C0724D');
        r(15, 16, 1, 1, '#E8C090');
        // === OUTFIT (orange/brown squirrel theme) ===
        r(4, 11, 8, 3, '#D2691E'); r(3, 12, 10, 1, '#D2691E');
        r(5, 11, 6, 1, '#E8A060'); r(7, 12, 2, 1, '#A04010');
        r(3, 14, 10, 3, '#D2691E'); r(2, 15, 12, 2, '#D2691E');
        r(3, 16, 10, 1, '#A04010');
        // === LEGS & SHOES ===
        r(5, 17, 2, 4, '#FFDAB9'); r(9, 17, 2, 4, '#FFDAB9');
        r(4, 21, 3, 2, '#8B4513'); r(9, 21, 3, 2, '#8B4513');
        r(4, 22, 3, 1, '#6B3A1F'); r(9, 22, 3, 1, '#6B3A1F');
        // === ARMS ===
        r(2, 12, 2, 4, '#FFDAB9'); r(12, 12, 2, 4, '#FFDAB9');
        c.refresh();
    }

    genPlayerSquirrelFly() {
        const c = this.textures.createCanvas('player_squirrel_fly', 16, 24);
        const ctx = c.getContext();
        const r = (x, y, w, h, col) => { ctx.fillStyle = col; ctx.fillRect(x, y, w, h); };
        // === SQUIRREL EARS ===
        r(3, 0, 2, 3, '#8B4513');  r(4, 1, 1, 1, '#C0724D');
        r(11, 0, 2, 3, '#8B4513'); r(11, 1, 1, 1, '#C0724D');
        // === HAIR (flowing up) ===
        r(3, 1, 10, 3, '#5C3317'); r(2, 2, 12, 2, '#5C3317');
        r(2, 4, 2, 6, '#5C3317');  r(12, 4, 2, 6, '#5C3317');
        r(1, 3, 1, 4, '#5C3317');  r(14, 3, 1, 4, '#5C3317');
        r(1, 1, 1, 3, '#5C3317');  r(14, 1, 1, 3, '#5C3317');
        // === FACE (happy gliding) ===
        r(4, 4, 8, 7, '#FFDAB9'); r(5, 3, 6, 1, '#FFDAB9');
        r(5, 6, 2, 1, '#2C1810'); r(9, 6, 2, 1, '#2C1810');
        r(5, 7, 1, 1, '#2C1810'); r(10, 7, 1, 1, '#2C1810');
        r(4, 8, 2, 1, '#FFB0B0'); r(10, 8, 2, 1, '#FFB0B0');
        r(6, 9, 4, 1, '#E88088'); r(7, 10, 2, 1, '#E88088');
        // === TAIL (prominent when flying) ===
        r(14, 9, 2, 7, '#A0522D');
        r(15, 8, 1, 9, '#C0724D');
        r(15, 16, 1, 1, '#E8C090');
        // === OUTFIT ===
        r(4, 11, 8, 3, '#D2691E'); r(5, 11, 6, 1, '#E8A060'); r(7, 12, 2, 1, '#A04010');
        // Skirt flared while gliding
        r(2, 14, 12, 3, '#D2691E'); r(1, 15, 14, 1, '#D2691E'); r(2, 16, 12, 1, '#A04010');
        // === LEGS SPREAD ===
        r(3, 17, 2, 4, '#FFDAB9'); r(11, 17, 2, 4, '#FFDAB9');
        r(2, 21, 3, 2, '#8B4513'); r(11, 21, 3, 2, '#8B4513');
        r(2, 22, 3, 1, '#6B3A1F'); r(11, 22, 3, 1, '#6B3A1F');
        // === ARMS WIDE (gliding) ===
        r(1, 11, 2, 4, '#FFDAB9'); r(13, 11, 2, 4, '#FFDAB9');
        r(0, 12, 1, 3, '#D2691E'); r(15, 12, 1, 3, '#D2691E'); // glide membrane
        c.refresh();
    }

    // ==================== BALLOONS ====================
    genBalloons() {
        const colors = {
            'red': { main: '#FF1744', dark: '#B71C1C', light: '#FF8A80' },
            'blue': { main: '#2979FF', dark: '#0D47A1', light: '#82B1FF' },
            'yellow': { main: '#FFEA00', dark: '#F57F17', light: '#FFFF8D' },
            'green': { main: '#00E676', dark: '#1B5E20', light: '#B9F6CA' }
        };

        for (const [name, palette] of Object.entries(colors)) {
            const c = this.textures.createCanvas('balloon_' + name, 12, 18);
            const ctx = c.getContext();
            const r = (x,y,w,h,col) => { ctx.fillStyle=col; ctx.fillRect(x,y,w,h); };

            r(3,0,6,1, palette.dark);
            r(2,1,8,1, palette.main);
            r(1,2,10,6, palette.main);
            r(2,8,8,1, palette.main);
            r(3,9,6,1, palette.dark);

            r(3,2,2,2, palette.light); // Shine
            r(5,10,2,1, palette.dark); // Knot
            r(5,11,1,7, '#FFFFFF'); // String

            c.refresh();
        }
    }

    // ==================== PLAYER (Tu Novia ❤️) ====================
    genPlayer() {
        const c = this.textures.createCanvas('player', 16, 24);
        const ctx = c.getContext();
        const r = (x,y,w,h,col) => { ctx.fillStyle=col; ctx.fillRect(x,y,w,h); };
        // Hair
        r(3,0,10,4,'#5C3317'); r(2,1,12,3,'#5C3317');
        r(2,4,2,8,'#5C3317'); r(12,4,2,8,'#5C3317');
        r(1,4,1,6,'#5C3317'); r(14,4,1,6,'#5C3317');
        r(5,1,2,1,'#7B4F2A'); r(9,1,2,1,'#7B4F2A');
        r(2,5,1,2,'#7B4F2A'); r(13,5,1,2,'#7B4F2A');
        // Face
        r(4,4,8,7,'#FFDAB9'); r(5,3,6,1,'#FFDAB9');
        // Eyes
        r(5,6,2,2,'#2C1810'); r(9,6,2,2,'#2C1810');
        r(5,6,1,1,'#FFFFFF'); r(9,6,1,1,'#FFFFFF');
        // Blush & smile
        r(4,8,2,1,'#FFB0B0'); r(10,8,2,1,'#FFB0B0');
        r(6,9,4,1,'#E88088');
        // Hair bow
        r(11,3,3,2,'#FF1493'); r(12,2,1,1,'#FF1493'); r(12,5,1,1,'#FF1493');
        // Dress
        r(4,11,8,3,'#FF69B4'); r(3,12,10,1,'#FF69B4');
        r(5,11,6,1,'#FFFFFF'); r(7,12,2,1,'#FF1493');
        // Skirt
        r(3,14,10,3,'#FF69B4'); r(2,15,12,2,'#FF69B4');
        r(3,16,10,1,'#D44A8A'); r(4,15,2,1,'#D44A8A'); r(10,15,2,1,'#D44A8A');
        // Legs & shoes
        r(5,17,2,4,'#FFDAB9'); r(9,17,2,4,'#FFDAB9');
        r(4,21,3,2,'#FF1493'); r(9,21,3,2,'#FF1493');
        r(4,22,3,1,'#D44A8A'); r(9,22,3,1,'#D44A8A');
        // Arms
        r(2,12,2,4,'#FFDAB9'); r(12,12,2,4,'#FFDAB9');
        c.refresh();
    }

    genPlayerJump() {
        const c = this.textures.createCanvas('player_jump', 16, 24);
        const ctx = c.getContext();
        const r = (x,y,w,h,col) => { ctx.fillStyle=col; ctx.fillRect(x,y,w,h); };
        // Hair (flowing up)
        r(3,0,10,4,'#5C3317'); r(2,1,12,3,'#5C3317');
        r(2,4,2,7,'#5C3317'); r(12,4,2,7,'#5C3317');
        r(1,3,1,5,'#5C3317'); r(14,3,1,5,'#5C3317');
        r(1,1,1,3,'#5C3317'); r(14,1,1,3,'#5C3317');
        r(5,1,2,1,'#7B4F2A'); r(9,1,2,1,'#7B4F2A');
        // Face
        r(4,4,8,7,'#FFDAB9'); r(5,3,6,1,'#FFDAB9');
        // Eyes (happy)
        r(5,6,2,1,'#2C1810'); r(9,6,2,1,'#2C1810');
        r(5,7,1,1,'#2C1810'); r(10,7,1,1,'#2C1810');
        r(4,8,2,1,'#FFB0B0'); r(10,8,2,1,'#FFB0B0');
        r(6,9,4,1,'#E88088'); r(7,10,2,1,'#E88088');
        // Bow
        r(11,3,3,2,'#FF1493'); r(12,2,1,1,'#FF1493');
        // Dress
        r(4,11,8,3,'#FF69B4'); r(5,11,6,1,'#FFFFFF'); r(7,12,2,1,'#FF1493');
        // Skirt (flared)
        r(2,14,12,3,'#FF69B4'); r(1,15,14,1,'#FF69B4'); r(2,16,12,1,'#D44A8A');
        // Legs spread
        r(3,17,2,4,'#FFDAB9'); r(11,17,2,4,'#FFDAB9');
        r(2,21,3,2,'#FF1493'); r(11,21,3,2,'#FF1493');
        r(2,22,3,1,'#D44A8A'); r(11,22,3,1,'#D44A8A');
        // Arms raised
        r(1,10,2,4,'#FFDAB9'); r(13,10,2,4,'#FFDAB9');
        c.refresh();
    }

    genPlayerWalk() {
        const c = this.textures.createCanvas('player_walk', 16, 24);
        const ctx = c.getContext();
        const r = (x,y,w,h,col) => { ctx.fillStyle=col; ctx.fillRect(x,y,w,h); };
        // Hair
        r(3,0,10,4,'#5C3317'); r(2,1,12,3,'#5C3317');
        r(2,4,2,8,'#5C3317'); r(12,4,2,8,'#5C3317');
        r(1,4,1,6,'#5C3317'); r(14,4,1,6,'#5C3317');
        r(5,1,2,1,'#7B4F2A'); r(9,1,2,1,'#7B4F2A'); r(2,5,1,2,'#7B4F2A');
        // Face
        r(4,4,8,7,'#FFDAB9'); r(5,3,6,1,'#FFDAB9');
        r(5,6,2,2,'#2C1810'); r(9,6,2,2,'#2C1810');
        r(5,6,1,1,'#FFFFFF'); r(9,6,1,1,'#FFFFFF');
        r(4,8,2,1,'#FFB0B0'); r(10,8,2,1,'#FFB0B0');
        r(6,9,4,1,'#E88088');
        // Bow
        r(11,3,3,2,'#FF1493'); r(12,2,1,1,'#FF1493'); r(12,5,1,1,'#FF1493');
        // Dress
        r(4,11,8,3,'#FF69B4'); r(3,12,10,1,'#FF69B4');
        r(5,11,6,1,'#FFFFFF'); r(7,12,2,1,'#FF1493');
        // Skirt
        r(3,14,10,3,'#FF69B4'); r(2,15,12,2,'#FF69B4'); r(3,16,10,1,'#D44A8A');
        // Walking legs
        r(4,17,2,3,'#FFDAB9'); r(10,17,2,3,'#FFDAB9');
        r(3,19,2,2,'#FFDAB9'); r(11,19,2,2,'#FFDAB9');
        r(2,21,3,2,'#FF1493'); r(10,21,3,2,'#FF1493');
        r(2,22,3,1,'#D44A8A'); r(10,22,3,1,'#D44A8A');
        // Arms swinging
        r(1,12,2,5,'#FFDAB9'); r(13,11,2,4,'#FFDAB9');
        c.refresh();
    }

    // ==================== FREDDY ====================
    genFreddy() {
        const pal = {
            'B':'#8B4513','b':'#A0522D','H':'#000000',
            'S':'#D2691E','E':'#00b4d8','W':'#FFFFFF',
            'G':'#555555','N':'#000000'
        };
        const rows = [
            '....HHHHHH....',
            '....HHHHHH....',
            '...HHHHHHHH...',
            '..BBHHHHHHBB..',
            '.BBBbHHHHbBBB.',
            '.BBBBBBBBBBBB.',
            '.BBbEbBBbEbBB.',
            '.BBWEWBBWEWBB.',
            '..BBSSNBSSBB..',
            '..BSSSSSSSBB..',
            '...BWWWWWB....',
            '....BBBBB.....',
            '....HHHHHH....',
            '..BBBBBBBBBB..',
            '..BBSSSSSSBB..',
            '..BBSSSSSSBB..',
            '..BBSSSSSSBB..',
            '...BBBBBBBB...',
            '....GG..GG....',
            '....BB..BB....',
            '....BB..BB....',
            '....GG..GG....',
            '...BBB..BBB...',
            '...BBB..BBB...',
        ];
        const c = this.textures.createCanvas('freddy', 14, 24);
        const ctx = c.getContext();
        this.drawMap(ctx, pal, rows, 0, 0);
        c.refresh();
    }

    genFreddyWalk() {
        const pal = {
            'B':'#8B4513','b':'#A0522D','H':'#000000',
            'S':'#D2691E','E':'#00b4d8','W':'#FFFFFF',
            'G':'#555555','N':'#000000'
        };
        const rows = [
            '....HHHHHH....',
            '....HHHHHH....',
            '...HHHHHHHH...',
            '..BBHHHHHHBB..',
            '.BBBbHHHHbBBB.',
            '.BBBBBBBBBBBB.',
            '.BBbEbBBbEbBB.',
            '.BBWEWBBWEWBB.',
            '..BBSSNBSSBB..',
            '..BSSSSSSSBB..',
            '...BWWWWWB....',
            '....BBBBB.....',
            '....HHHHHH....',
            '..BBBBBBBBBB..',
            '..BBSSSSSSBB..',
            '..BBSSSSSSBB..',
            '..BBSSSSSSBB..',
            '...BBBBBBBB...',
            '....GG..GG....',
            '...BB....BB...',
            '...BB....BB...',
            '..GG......GG..',
            '.BBB......BBB.',
            '.BBB......BBB.',
        ];
        const c = this.textures.createCanvas('freddy_walk', 14, 24);
        const ctx = c.getContext();
        this.drawMap(ctx, pal, rows, 0, 0);
        c.refresh();
    }

    // ==================== BONNIE ====================
    genBonnie() {
        const pal = {
            'P':'#6f42c1','p':'#8c52ff','S':'#d8b4f8',
            'E':'#39ff14','W':'#FFFFFF','H':'#1a1a1a',
            'R':'#d90429','G':'#777777','N':'#1a1a1a'
        };
        const rows = [
            '..PP......PP..',
            '..PP......PP..',
            '..PS......SP..',
            '..PS......SP..',
            '..PP......PP..',
            '..PP......PP..',
            '..PPPPPPPPPP..',
            '.PPpEpPPpEpPP.',
            '.PPWEWPPWEWPP.',
            '..PPSSNBSSPP..',
            '..PSSSSSSSss..',
            '...PWWWWWP....',
            '....PPPPP.....',
            '....RRRRRR....',
            '..PPPPPPPPPP..',
            '..PPSSSSSSPP..',
            '..PPSSSSSSPP..',
            '..PPSSSSSSPP..',
            '...PPPPPPPP...',
            '....GG..GG....',
            '....PP..PP....',
            '....PP..PP....',
            '....GG..GG....',
            '...PPP..PPP...',
            '...PPP..PPP...',
        ];
        const c = this.textures.createCanvas('bonnie', 14, 25);
        const ctx = c.getContext();
        this.drawMap(ctx, pal, rows, 0, 0);
        c.refresh();
    }

    genBonnieWalk() {
        const pal = {
            'P':'#6f42c1','p':'#8c52ff','S':'#d8b4f8',
            'E':'#39ff14','W':'#FFFFFF','H':'#1a1a1a',
            'R':'#d90429','G':'#777777','N':'#1a1a1a'
        };
        const rows = [
            '..PP......PP..',
            '..PP......PP..',
            '..PS......SP..',
            '..PS......SP..',
            '..PP......PP..',
            '..PP......PP..',
            '..PPPPPPPPPP..',
            '.PPpEpPPpEpPP.',
            '.PPWEWPPWEWPP.',
            '..PPSSNBSSPP..',
            '..PSSSSSSSss..',
            '...PWWWWWP....',
            '....PPPPP.....',
            '....RRRRRR....',
            '..PPPPPPPPPP..',
            '..PPSSSSSSPP..',
            '..PPSSSSSSPP..',
            '..PPSSSSSSPP..',
            '...PPPPPPPP...',
            '....GG..GG....',
            '...PP....PP...',
            '...PP....PP...',
            '..GG......GG..',
            '.PPP......PPP.',
            '.PPP......PPP.',
        ];
        const c = this.textures.createCanvas('bonnie_walk', 14, 25);
        const ctx = c.getContext();
        this.drawMap(ctx, pal, rows, 0, 0);
        c.refresh();
    }

    // ==================== CHICA ====================
    genChica() {
        const pal = {
            'Y': '#ffd166', // Amarillo Toy Chica
            'y': '#ffb703', // Amarillo sombra
            'P': '#ff007f', // Rosa fuerte (mejillas y shorts)
            'p': '#ffb6c1', // Rosa claro (confeti / bib shadow)
            'O': '#fb8500', // Naranja (dedos del signo de paz y pies)
            'W': '#FFFFFF', // Blanco (babero, ojos y dientes)
            'w': '#dddddd', // Blanco sombra
            'K': '#1a1a1a', // Negro (ojos, boca)
            'G': '#888888', // Gris (cuello endo)
            'C': '#00E676', // Verde confeti
            'B': '#2979FF'  // Azul confeti
        };
        const rows = [
            ".........Y..Y..........",
            "........Y.YY.Y.........",
            ".........YYY...........",
            "......YYYYYYYYYY.......",
            "O.O..YYYYYYYYYYYY..O.O.",
            "O.O.YYYYYYYYYYYYYY.O.O.",
            "OOO.YYYKKKKKKKKYYY.OOO.",
            ".OO.YYKKWKKKKWKKYY..OO.",
            ".YY.YYKKKKKKKKKKYY..YY.",
            ".YY.YPPKKKKKKKKPPY..YY.",
            ".YY.YPPKKKKKKKKPPY..YY.",
            "..Y.YYYKKWWWWKKYYY..Y..",
            "..Y..YYKKKKKKKKYY..Y...",
            ".....YYYYYYYYYYYY......",
            "........GGGG...........",
            "......YYYYYYYYYY.......",
            ".....YYYYYYYYYYYY......",
            ".....WWWWWWWWWWWW......",
            ".....WpWpWBWpWpWW......",
            ".....WPPWPPWPPWCW......",
            "......WPPWPPWPPW.......",
            ".......YYYYYYYY........",
            "........YYYYYY.........",
            "......PPPPPPPPPP.......",
            ".....PPPPPPPPPPPP......",
            "....YYYYYYYYYYYYYY.....",
            "....YYYY......YYYY.....",
            "....GGGG......GGGG.....",
            "....YYYY......YYYY.....",
            "...OOOOO......OOOOO...."
        ];
        const c = this.textures.createCanvas('chica', 23, 30);
        const ctx = c.getContext();
        this.drawMap(ctx, pal, rows, 0, 0);
        c.refresh();
    }

    genChicaWalk() {
        const pal = {
            'Y': '#ffd166', // Amarillo Toy Chica
            'y': '#ffb703', // Amarillo sombra
            'P': '#ff007f', // Rosa fuerte (mejillas y shorts)
            'p': '#ffb6c1', // Rosa claro (confeti / bib shadow)
            'O': '#fb8500', // Naranja (dedos del signo de paz y pies)
            'W': '#FFFFFF', // Blanco (babero, ojos y dientes)
            'w': '#dddddd', // Blanco sombra
            'K': '#1a1a1a', // Negro (ojos, boca)
            'G': '#888888', // Gris (cuello endo)
            'C': '#00E676', // Verde confeti
            'B': '#2979FF'  // Azul confeti
        };
        const rows = [
            ".......................",
            ".........Y..Y..........",
            "........Y.YY.Y.........",
            ".........YYY...........",
            "......YYYYYYYYYY.......",
            "O.O..YYYYYYYYYYYY..O.O.",
            "O.O.YYYYYYYYYYYYYY.O.O.",
            "OOO.YYYKKKKKKKKYYY.OOO.",
            ".OO.YYKKWKKKKWKKYY..OO.",
            ".YY.YYKKKKKKKKKKYY..YY.",
            ".YY.YPPKKKKKKKKPPY..YY.",
            ".YY.YPPKKKKKKKKPPY..YY.",
            "..Y.YYYKKWWWWKKYYY..Y..",
            "..Y..YYKKKKKKKKYY..Y...",
            ".....YYYYYYYYYYYY......",
            "........GGGG...........",
            "......YYYYYYYYYY.......",
            ".....YYYYYYYYYYYY......",
            ".....WWWWWWWWWWWW......",
            ".....WpWpWBWpWpWW......",
            ".....WPPWPPWPPWCW......",
            "......WPPWPPWPPW.......",
            ".......YYYYYYYY........",
            "........YYYYYY.........",
            "......PPPPPPPPPP.......",
            ".....PPPPPPPPPPPP......",
            "....YYYYYYYYYYYYYY.....",
            "..YYYY..........YYYY...",
            "..GGGG..........GGGG...",
            ".OOOOO..........OOOOO.."
        ];
        const c = this.textures.createCanvas('chica_walk', 23, 30);
        const ctx = c.getContext();
        this.drawMap(ctx, pal, rows, 0, 0);
        c.refresh();
    }

    // ==================== FOXY ====================
    genFoxy() {
        const pal = {
            'R':'#d90429','r':'#ef233c','E':'#ffea00',
            'W':'#FFFFFF','H':'#1a1a1a','B':'#6c584c',
            'G':'#aaaaaa','K':'#555555'
        };
        const rows = [
            '..RR......RR..',
            '..RR......RR..',
            '..RRRRRRRRRR..',
            '.RRHHRRrrERRR.',
            '.RRHHRRWWERRR.',
            '..RRRRRRRRRR..',
            '...RRRRRRRR...',
            '....RWWWR.....',
            '.....RRR......',
            '..RRRRRRRRRR..',
            '.KRRGGGGGGKK..',
            'GRRGGGGGGK..G.',
            '..RRRRRRRR....',
            '..BBBBBBBBBB..',
            '..BBBBBBBBBB..',
            '..BBBBBBBBBB..',
            '...BBBBBBBB...',
            '....GG..GG....',
            '....GG..GG....',
            '....GG..GG....',
            '....GG..GG....',
            '....GG..GG....',
            '....KK..KK....',
            '....KK..KK....',
        ];
        const c = this.textures.createCanvas('foxy', 14, 24);
        const ctx = c.getContext();
        this.drawMap(ctx, pal, rows, 0, 0);
        c.refresh();
    }

    genFoxyWalk() {
        const pal = {
            'R':'#d90429','r':'#ef233c','E':'#ffea00',
            'W':'#FFFFFF','H':'#1a1a1a','B':'#6c584c',
            'G':'#aaaaaa','K':'#555555'
        };
        const rows = [
            '..RR......RR..',
            '..RR......RR..',
            '..RRRRRRRRRR..',
            '.RRHHRRrrERRR.',
            '.RRHHRRWWERRR.',
            '..RRRRRRRRRR..',
            '...RRRRRRRR...',
            '....RWWWR.....',
            '.....RRR......',
            '..RRRRRRRRRR..',
            '.KRRGGGGGGKK..',
            'GRRGGGGGGK..G.',
            '..RRRRRRRR....',
            '..BBBBBBBBBB..',
            '..BBBBBBBBBB..',
            '..BBBBBBBBBB..',
            '...BBBBBBBB...',
            '....GG..GG....',
            '...GG....GG...',
            '...GG....GG...',
            '..GG......GG..',
            '..GG......GG..',
            '.KK........KK.',
            '.KK........KK.',
        ];
        const c = this.textures.createCanvas('foxy_walk', 14, 24);
        const ctx = c.getContext();
        this.drawMap(ctx, pal, rows, 0, 0);
        c.refresh();
    }

    // ==================== BALLOON BOY (FNAF Design - Polished) ====================
    genBalloonBoy() {
        const c = this.textures.createCanvas('balloonboy', 22, 28);
        const ctx = c.getContext();
        const r = (x,y,w,h,col) => { ctx.fillStyle=col; ctx.fillRect(x,y,w,h); };

        // ===== BALLOON (orange/amber, top-left) =====
        r(1,0,4,1,'#CC6600');       // top edge dark
        r(0,1,6,1,'#E87800');       // upper body
        r(0,2,6,2,'#FF8C00');       // main body
        r(1,2,3,1,'#FFA500');       // highlight shine
        r(0,4,6,1,'#E87800');       // lower body
        r(1,5,4,1,'#CC6600');       // bottom edge dark
        r(2,6,2,1,'#8B0000');       // tie knot
        r(3,7,1,7,'#999999');       // string going to hand

        // ===== PROPELLER =====
        r(12,0,2,1,'#FFD700');      // gold hub center
        r(11,0,1,1,'#DAA520');      // hub edge
        r(14,0,1,1,'#DAA520');      // hub edge
        r(7,0,4,1,'#6B2A0A');       // left blade
        r(15,0,4,1,'#6B2A0A');      // right blade
        r(8,0,2,1,'#8B3A1A');       // blade highlight left
        r(16,0,2,1,'#8B3A1A');      // blade highlight right
        r(13,1,1,1,'#B0C4DE');      // stick

        // ===== CAP (blue with red stripes - 4 rows) =====
        r(9,2,8,1,'#1E3A8A');       // top blue
        r(8,3,10,1,'#1E3A8A');      // blue row 2
        r(8,4,10,1,'#8B1A1A');      // red stripe
        r(7,5,12,1,'#1E3A8A');      // blue row 3
        r(7,6,12,1,'#8B1A1A');      // red stripe 2

        // ===== HAIR (brown/reddish, sides of face) =====
        r(6,7,2,4,'#6B3A1F');       // left hair block
        r(18,7,2,4,'#6B3A1F');      // right hair block
        r(5,8,1,3,'#7B4A2F');       // left outer strand
        r(20,8,1,3,'#7B4A2F');      // right outer strand

        // ===== FACE (skin colored, wider) =====
        r(8,7,10,7,'#FFDAB9');      // main face
        r(9,7,8,1,'#FFE4C4');       // forehead highlight

        // ===== EYES (blue squares with white sclera) =====
        // Left eye
        r(8,9,4,3,'#FFFFFF');       // white sclera
        r(9,9,3,2,'#1E3A8A');       // blue iris
        r(9,9,1,1,'#4169E1');       // lighter blue highlight
        // Right eye
        r(14,9,4,3,'#FFFFFF');      // white sclera
        r(14,9,3,2,'#1E3A8A');      // blue iris
        r(14,9,1,1,'#4169E1');      // lighter blue highlight

        // ===== CHEEKS (orange circles - prominent) =====
        r(7,11,1,1,'#FF6600');
        r(6,12,2,1,'#FF6600');
        r(18,11,1,1,'#FF6600');
        r(18,12,2,1,'#FF6600');

        // ===== NOSE (brown, center) =====
        r(12,11,2,1,'#A0522D');
        r(12,12,1,1,'#8B4513');     // nose shadow

        // ===== TEETH / BIG GRIN (wide toothy smile) =====
        r(8,13,10,2,'#FFFFFF');     // teeth block
        r(9,13,1,2,'#999999');      // gap line
        r(11,13,1,2,'#999999');     // gap line
        r(13,13,1,2,'#999999');     // gap line
        r(15,13,1,2,'#999999');     // gap line
        r(17,13,1,2,'#999999');     // gap line
        r(8,14,10,1,'#EEEEEE');     // bottom teeth slightly darker

        // ===== BODY / SHIRT (blue center, red/maroon sides) =====
        r(7,15,12,5,'#1E3A8A');     // main blue body
        r(6,15,1,5,'#8B1A1A');      // left red accent
        r(19,15,1,5,'#8B1A1A');     // right red accent
        r(5,16,1,4,'#8B1A1A');      // wider left red
        r(20,16,1,4,'#8B1A1A');     // wider right red
        // Dark center area / buttons
        r(11,17,4,2,'#0D1B3E');
        r(12,17,2,1,'#1a1a1a');     // button dark

        // ===== ARMS / HANDS (skin) =====
        r(3,16,2,4,'#FFDAB9');      // left hand (holds string)
        r(3,19,1,1,'#E8B89A');      // left hand shadow
        r(21,16,1,4,'#FFDAB9');     // right hand (holds sign)

        // ===== SIGN ("Balloons!" - right side) =====
        r(19,14,3,3,'#F5DEB3');     // sign board cream
        r(19,14,3,1,'#EED8AE');     // sign top edge
        r(20,15,1,1,'#333333');     // text dot on sign
        r(20,17,1,3,'#6B3A1F');     // sign stick brown

        // ===== PANTS (dark navy) =====
        r(7,20,12,2,'#0D1B3E');     // waist
        r(7,22,5,3,'#0D1B3E');      // left leg
        r(14,22,5,3,'#0D1B3E');     // right leg

        // ===== SHOES (dark brown with sole) =====
        r(6,25,6,2,'#5D3A1A');      // left shoe
        r(14,25,6,2,'#5D3A1A');     // right shoe
        r(6,26,6,1,'#3E2510');      // left sole
        r(14,26,6,1,'#3E2510');     // right sole
        r(7,25,2,1,'#7B4F32');      // left shoe highlight
        r(15,25,2,1,'#7B4F32');     // right shoe highlight

        c.refresh();
    }

    genBalloonBoyWalk() {
        const c = this.textures.createCanvas('balloonboy_walk', 22, 28);
        const ctx = c.getContext();
        const r = (x,y,w,h,col) => { ctx.fillStyle=col; ctx.fillRect(x,y,w,h); };

        // ===== BALLOON (same design, slight sway) =====
        r(0,0,4,1,'#CC6600');
        r(0,1,5,1,'#E87800');
        r(0,2,5,2,'#FF8C00');
        r(1,2,2,1,'#FFA500');
        r(0,4,5,1,'#E87800');
        r(1,5,3,1,'#CC6600');
        r(2,6,1,1,'#8B0000');
        r(2,7,1,7,'#999999');

        // ===== PROPELLER (rotated frame 2) =====
        r(12,0,2,1,'#FFD700');
        r(11,0,1,1,'#DAA520'); r(14,0,1,1,'#DAA520');
        r(9,1,2,1,'#6B2A0A'); r(10,0,1,1,'#6B2A0A'); // diagonal left
        r(15,1,2,1,'#6B2A0A'); r(16,0,1,1,'#6B2A0A'); // diagonal right
        r(13,1,1,1,'#B0C4DE');

        // ===== CAP =====
        r(9,2,8,1,'#1E3A8A');
        r(8,3,10,1,'#1E3A8A');
        r(8,4,10,1,'#8B1A1A');
        r(7,5,12,1,'#1E3A8A');
        r(7,6,12,1,'#8B1A1A');

        // ===== HAIR =====
        r(6,7,2,4,'#6B3A1F'); r(18,7,2,4,'#6B3A1F');
        r(5,8,1,3,'#7B4A2F'); r(20,8,1,3,'#7B4A2F');

        // ===== FACE =====
        r(8,7,10,7,'#FFDAB9');
        r(9,7,8,1,'#FFE4C4');
        // Eyes
        r(8,9,4,3,'#FFFFFF'); r(9,9,3,2,'#1E3A8A'); r(9,9,1,1,'#4169E1');
        r(14,9,4,3,'#FFFFFF'); r(14,9,3,2,'#1E3A8A'); r(14,9,1,1,'#4169E1');
        // Cheeks
        r(7,11,1,1,'#FF6600'); r(6,12,2,1,'#FF6600');
        r(18,11,1,1,'#FF6600'); r(18,12,2,1,'#FF6600');
        // Nose
        r(12,11,2,1,'#A0522D'); r(12,12,1,1,'#8B4513');
        // Teeth
        r(8,13,10,2,'#FFFFFF');
        r(9,13,1,2,'#999999'); r(11,13,1,2,'#999999'); r(13,13,1,2,'#999999');
        r(15,13,1,2,'#999999'); r(17,13,1,2,'#999999');
        r(8,14,10,1,'#EEEEEE');

        // ===== SHIRT =====
        r(7,15,12,5,'#1E3A8A');
        r(6,15,1,5,'#8B1A1A'); r(19,15,1,5,'#8B1A1A');
        r(5,16,1,4,'#8B1A1A'); r(20,16,1,4,'#8B1A1A');
        r(11,17,4,2,'#0D1B3E'); r(12,17,2,1,'#1a1a1a');

        // ===== ARMS (swinging forward/back) =====
        r(3,17,2,3,'#FFDAB9');      // left arm swung forward
        r(21,15,1,4,'#FFDAB9');     // right arm swung back

        // ===== SIGN =====
        r(19,13,3,3,'#F5DEB3'); r(19,13,3,1,'#EED8AE');
        r(20,14,1,1,'#333333'); r(20,16,1,3,'#6B3A1F');

        // ===== PANTS (walking stride) =====
        r(7,20,12,2,'#0D1B3E');
        // Left leg forward
        r(6,22,5,3,'#0D1B3E');
        // Right leg back
        r(15,22,5,3,'#0D1B3E');

        // ===== SHOES (walking stride) =====
        r(5,25,6,2,'#5D3A1A');      // left shoe forward
        r(15,25,6,2,'#5D3A1A');     // right shoe back
        r(5,26,6,1,'#3E2510');
        r(15,26,6,1,'#3E2510');
        r(6,25,2,1,'#7B4F32');
        r(16,25,2,1,'#7B4F32');

        c.refresh();
    }

    // ==================== HEART COIN ====================
    genHeart() {
        const pal = {
            'R':'#FF1744','r':'#FF5252','p':'#FF8A80','w':'#FFFFFF'
        };
        const rows = [
            '.rr.rr.',
            'rRRrRRr',
            'rRwRRRr',
            'rRRRRRr',
            '.rRRRr.',
            '..rRr..',
            '...r...',
        ];
        const c = this.textures.createCanvas('heart', 7, 7);
        const ctx = c.getContext();
        this.drawMap(ctx, pal, rows, 0, 0);
        c.refresh();
    }

    // ==================== GROUND TILES ====================
    genGroundSpring() {
        const c = this.textures.createCanvas('ground_spring', 16, 16);
        const ctx = c.getContext();
        // Grass top
        this.rect(ctx, 0, 0, 16, 4, '#4CAF50');
        this.rect(ctx, 0, 1, 16, 3, '#388E3C');
        // Grass detail
        this.px(ctx, 2, 0, '#66BB6A'); this.px(ctx, 7, 0, '#81C784');
        this.px(ctx, 12, 0, '#66BB6A'); this.px(ctx, 5, 1, '#4CAF50');
        // Dirt
        this.rect(ctx, 0, 4, 16, 12, '#8D6E3F');
        this.rect(ctx, 0, 4, 16, 2, '#A0845C');
        // Dirt detail
        this.px(ctx, 3, 7, '#7D5E2F'); this.px(ctx, 10, 9, '#7D5E2F');
        this.px(ctx, 6, 11, '#9E7C4E'); this.px(ctx, 13, 8, '#9E7C4E');
        this.px(ctx, 1, 13, '#7D5E2F'); this.px(ctx, 8, 14, '#7D5E2F');
        c.refresh();
    }

    genGroundPark() {
        const c = this.textures.createCanvas('ground_park', 16, 16);
        const ctx = c.getContext();
        // Stone top
        this.rect(ctx, 0, 0, 16, 3, '#9E9E9E');
        this.rect(ctx, 0, 1, 16, 2, '#757575');
        // Stone body
        this.rect(ctx, 0, 3, 16, 13, '#616161');
        // Stone detail/cracks
        this.px(ctx, 4, 5, '#545454'); this.px(ctx, 5, 5, '#545454');
        this.px(ctx, 11, 8, '#545454'); this.px(ctx, 12, 8, '#545454');
        this.px(ctx, 2, 11, '#6E6E6E'); this.px(ctx, 8, 13, '#6E6E6E');
        this.px(ctx, 7, 3, '#8A8A8A'); this.px(ctx, 14, 6, '#8A8A8A');
        c.refresh();
    }

    genPlatformSpring() {
        const c = this.textures.createCanvas('plat_spring', 16, 8);
        const ctx = c.getContext();
        this.rect(ctx, 0, 0, 16, 2, '#66BB6A');
        this.rect(ctx, 0, 2, 16, 6, '#A0845C');
        this.rect(ctx, 1, 2, 14, 1, '#8D6E3F');
        this.px(ctx, 3, 0, '#81C784'); this.px(ctx, 9, 0, '#81C784');
        this.px(ctx, 4, 4, '#7D5E2F'); this.px(ctx, 11, 5, '#7D5E2F');
        c.refresh();
    }

    genPlatformPark() {
        const c = this.textures.createCanvas('plat_park', 16, 8);
        const ctx = c.getContext();
        this.rect(ctx, 0, 0, 16, 2, '#BDBDBD');
        this.rect(ctx, 0, 2, 16, 6, '#757575');
        this.px(ctx, 3, 1, '#E0E0E0'); this.px(ctx, 10, 1, '#E0E0E0');
        this.px(ctx, 5, 4, '#616161'); this.px(ctx, 12, 5, '#616161');
        c.refresh();
    }

    // ==================== GOAL FLAG ====================
    genGoalFlag() {
        const c = this.textures.createCanvas('goal', 8, 20);
        const ctx = c.getContext();
        // Pole
        this.rect(ctx, 3, 0, 2, 20, '#C0C0C0');
        this.rect(ctx, 3, 0, 2, 1, '#FFD700');
        // Flag (heart-shaped pennant)
        this.rect(ctx, 4, 2, 4, 6, '#FF1744');
        this.rect(ctx, 5, 1, 2, 1, '#FF1744');
        this.px(ctx, 6, 8, '#FF1744');
        this.px(ctx, 5, 7, '#FF5252');
        this.px(ctx, 5, 3, '#FF8A80');
        // Ball on top
        this.px(ctx, 3, 0, '#FFD700'); this.px(ctx, 4, 0, '#FFD700');
        c.refresh();
    }

    // ==================== CLOUD ====================
    genCloud() {
        const c = this.textures.createCanvas('cloud', 24, 10);
        const ctx = c.getContext();
        this.rect(ctx, 4, 3, 16, 5, '#FFFFFF');
        this.rect(ctx, 2, 4, 20, 3, '#FFFFFF');
        this.rect(ctx, 7, 1, 6, 3, '#FFFFFF');
        this.rect(ctx, 14, 2, 5, 2, '#FFFFFF');
        // Shading
        this.rect(ctx, 4, 7, 16, 1, '#E8E8E8');
        this.rect(ctx, 2, 6, 2, 1, '#E8E8E8');
        c.refresh();
    }

    // ==================== FLOWERS ====================
    genFlowerDaisy() {
        // White daisy with yellow center - 9x9
        const c = this.textures.createCanvas('flower_daisy', 9, 9);
        const ctx = c.getContext();
        // Stem
        ctx.fillStyle = '#2E7D32'; ctx.fillRect(4, 5, 1, 4);
        // Leaf
        ctx.fillStyle = '#4CAF50'; ctx.fillRect(5, 6, 2, 1); ctx.fillRect(2, 7, 2, 1);
        // Petals (white)
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(3, 0, 3, 1); // top
        ctx.fillRect(3, 4, 3, 1); // bottom
        ctx.fillRect(1, 2, 1, 1); // left
        ctx.fillRect(7, 2, 1, 1); // right
        ctx.fillRect(2, 1, 1, 1); ctx.fillRect(6, 1, 1, 1); // top corners
        ctx.fillRect(2, 3, 1, 1); ctx.fillRect(6, 3, 1, 1); // bottom corners
        // Center (yellow)
        ctx.fillStyle = '#FFD700'; ctx.fillRect(3, 1, 3, 3);
        ctx.fillStyle = '#FFA000'; ctx.fillRect(4, 2, 1, 1);
        c.refresh();
    }

    genFlowerTulip() {
        // Red tulip - 7x9
        const c = this.textures.createCanvas('flower_tulip', 7, 9);
        const ctx = c.getContext();
        // Stem
        ctx.fillStyle = '#2E7D32'; ctx.fillRect(3, 4, 1, 5);
        // Leaves
        ctx.fillStyle = '#4CAF50'; ctx.fillRect(4, 6, 2, 1); ctx.fillRect(1, 7, 2, 1);
        // Tulip petals
        ctx.fillStyle = '#FF1744';
        ctx.fillRect(2, 1, 3, 3);
        ctx.fillRect(1, 2, 5, 2);
        ctx.fillRect(1, 0, 2, 2);
        ctx.fillRect(4, 0, 2, 2);
        // Highlights
        ctx.fillStyle = '#FF5252'; ctx.fillRect(2, 0, 1, 1); ctx.fillRect(5, 1, 1, 1);
        c.refresh();
    }

    genFlowerSunflower() {
        // Yellow sunflower - 9x9
        const c = this.textures.createCanvas('flower_sunflower', 9, 9);
        const ctx = c.getContext();
        // Stem
        ctx.fillStyle = '#2E7D32'; ctx.fillRect(4, 5, 1, 4);
        ctx.fillStyle = '#4CAF50'; ctx.fillRect(5, 7, 2, 1);
        // Petals (bright yellow)
        ctx.fillStyle = '#FFD600';
        ctx.fillRect(3, 0, 3, 1);
        ctx.fillRect(3, 4, 3, 1);
        ctx.fillRect(1, 2, 1, 1);
        ctx.fillRect(7, 2, 1, 1);
        ctx.fillRect(2, 1, 1, 1); ctx.fillRect(6, 1, 1, 1);
        ctx.fillRect(2, 3, 1, 1); ctx.fillRect(6, 3, 1, 1);
        // Center (brown)
        ctx.fillStyle = '#5D4037'; ctx.fillRect(3, 1, 3, 3);
        ctx.fillStyle = '#3E2723'; ctx.fillRect(4, 2, 1, 1);
        c.refresh();
    }

    genFlowerRose() {
        // Pink rose - 7x9
        const c = this.textures.createCanvas('flower_rose', 7, 9);
        const ctx = c.getContext();
        // Stem
        ctx.fillStyle = '#2E7D32'; ctx.fillRect(3, 5, 1, 4);
        // Thorns
        ctx.fillStyle = '#1B5E20'; ctx.fillRect(4, 6, 1, 1); ctx.fillRect(2, 7, 1, 1);
        // Rose petals (layered pink)
        ctx.fillStyle = '#FF69B4';
        ctx.fillRect(2, 1, 3, 3);
        ctx.fillRect(1, 2, 5, 2);
        // Inner petals
        ctx.fillStyle = '#FF1493';
        ctx.fillRect(2, 0, 3, 1);
        ctx.fillRect(1, 1, 1, 2);
        ctx.fillRect(5, 1, 1, 2);
        // Center
        ctx.fillStyle = '#C2185B'; ctx.fillRect(3, 2, 1, 1);
        // Highlight
        ctx.fillStyle = '#FFB6C1'; ctx.fillRect(2, 1, 1, 1);
        c.refresh();
    }

    genCupcake() {
        const pal = {
            'P': '#FF69B4', // Pink frosting
            'K': '#000000', // Black
            'W': '#FFFFFF', // White
            'B': '#8B4513', // Brown base
            'Y': '#FFD700', // Yellow flame
            'C': '#00d2ff', // Cyan candle
            '.': 'transparent'
        };
        const rows = [
            '.....YY.....',
            '.....CC.....',
            '...PPPPPP...',
            '..PPPPPPPP..',
            '.PPKKPPKKPP.',
            '.PKWWPKWWKP.',
            '.PPKKPPKKPP.',
            'PPPPPPPPPPPP',
            '.BBBBBBBBBB.',
            '.BBBBBBBBBB.',
            '..BBBBBBBB..',
            '...BBBBBB...',
        ];
        const c = this.textures.createCanvas('cupcake', 12, 12);
        const ctx = c.getContext();
        this.drawMap(ctx, pal, rows, 0, 0);
        c.refresh();
    }

    genBonnieGuitar() {
        const pal = {
            'P':'#6f42c1','p':'#8c52ff','S':'#d8b4f8',
            'E':'#39ff14','W':'#FFFFFF','H':'#1a1a1a',
            'R':'#d90429','G':'#777777','N':'#1a1a1a',
            'g':'#8B4513', // Guitar wood brown
            'r':'#ff0000', // Red guitar body
            'w':'#dddddd'  // Guitar neck/strings
        };
        const rows = [
            '..PP......PP..',
            '..PP......PP..',
            '..PS......SP..',
            '..PS......SP..',
            '..PP......PP..',
            '..PP......PP..',
            '..PPPPPPPPPP..',
            '.PPpEpPPpEpPP.',
            '.PPWEWPPWEWPP.',
            '..PPSSNBSSPP..',
            '..PSSSSSSSss..',
            '...PWWWWWP....',
            '....PPPPP.....',
            '....RRRRRR....',
            '..PPPPPPwPPP..',
            '..PPSSSwwSPP..',
            '..PPSwwwwwPP..',
            '..PPwwrrrwPP..',
            '...PPrrrPP....',
            '....GGrrGG....',
            '....PP..PP....',
            '....PP..PP....',
            '....GG..GG....',
            '...PPP..PPP...',
            '...PPP..PPP...',
        ];
        const c = this.textures.createCanvas('bonnie_guitar', 14, 25);
        const ctx = c.getContext();
        this.drawMap(ctx, pal, rows, 0, 0);
        c.refresh();
    }

    genSoundwave() {
        const c = this.textures.createCanvas('soundwave', 16, 16);
        const ctx = c.getContext();
        const r = (x,y,w,h,col) => { ctx.fillStyle=col; ctx.fillRect(x,y,w,h); };
        // Draw 3 concentric arcs pointing right
        r(1, 2, 2, 12, 'rgba(111, 66, 193, 0.8)'); // Purple wave 1
        r(3, 4, 1, 8, 'rgba(111, 66, 193, 0.8)');
        
        r(6, 1, 2, 14, 'rgba(57, 255, 20, 0.6)');  // Green wave 2
        r(8, 3, 1, 10, 'rgba(57, 255, 20, 0.6)');

        r(11, 0, 2, 16, 'rgba(0, 210, 255, 0.4)'); // Cyan wave 3
        r(13, 2, 1, 12, 'rgba(0, 210, 255, 0.4)');
        c.refresh();
    }
}
