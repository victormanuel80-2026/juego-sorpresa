class CardScene extends Phaser.Scene {
    constructor() {
        super('CardScene');
    }

    create() {
        const level = this.registry.get('currentLevel');
        const score = this.registry.get('score');

        // Dark romantic background
        this.cameras.main.setBackgroundColor('#0d0d1a');

        // Starry background
        for (let i = 0; i < 60; i++) {
            const star = this.add.circle(
                Phaser.Math.Between(10, 790),
                Phaser.Math.Between(10, 590),
                Phaser.Math.Between(1, 2),
                0xFFFFFF, Phaser.Math.FloatBetween(0.3, 0.9)
            );
            this.tweens.add({
                targets: star,
                alpha: Phaser.Math.FloatBetween(0.1, 0.5),
                duration: Phaser.Math.Between(1000, 3000),
                yoyo: true,
                repeat: -1
            });
        }

        // Decorative frame
        const frame = this.add.rectangle(400, 300, 700, 520, 0x000000, 0.0);
        frame.setStrokeStyle(2, 0xFF69B4, 0.6);

        // Corner hearts
        const corners = [[70, 60], [730, 60], [70, 540], [730, 540]];
        corners.forEach(c => {
            const h = this.add.image(c[0], c[1], 'heart');
            h.setScale(3);
            this.tweens.add({
                targets: h,
                scale: 3.5,
                duration: 800,
                yoyo: true,
                repeat: -1,
                ease: 'Sine.easeInOut'
            });
        });

        // Title
        const titleText = level <= 5 ? '🌸 Primavera - Nivel ' + level : '🌳 Parque - Nivel ' + level;
        this.add.text(400, 70, titleText, {
            fontSize: '20px', fill: '#FFD700', fontFamily: 'Georgia, serif', fontStyle: 'bold'
        }).setOrigin(0.5);

        // Card image of girlfriend
        const cardImg = this.add.image(400, 240, 'card_img');
        const imgScale = Math.min(280 / cardImg.width, 260 / cardImg.height);
        cardImg.setScale(imgScale);

        // Glow effect around image
        const glow = this.add.rectangle(400, 240, 300, 280, 0xFF69B4, 0.0);
        glow.setStrokeStyle(3, 0xFF69B4, 0.4);
        this.tweens.add({
            targets: glow,
            strokeAlpha: 0.1,
            duration: 1500,
            yoyo: true,
            repeat: -1
        });

        // ==================== POEMS ====================
        const poems = [
            '"Cada paso que doy en este camino\nes un paso más cerca de ti.\nEres mi destino, mi primavera eterna."',
            '"En el jardín secreto de mi corazón\nsolo crecen flores con tu nombre.\nCada pétalo susurra: te amo."',
            '"Ni los bosques más encantados\ntienen la magia que hay en tus ojos.\nEres mi hechizo favorito."',
            '"Como cascada de flores caes\nsobre mi mundo gris,\nllenándolo todo de color y de ti."',
            '"Bajo el gran cerezo, te esperé.\nY cuando llegaste, entendí\nque toda espera vale la pena por ti."',
            '"El atardecer del parque me recuerda\nel color de tu sonrisa.\nCada día contigo es un regalo."',
            '"En la fuente de los deseos\npedí solo una cosa:\nmás días para amarte."',
            '"Las luces de la noche brillan,\npero ninguna como tú.\nEres mi estrella más hermosa."',
            '"En el jardín de las estrellas\nescribí tu nombre en el cielo.\nPara que el universo sepa que eres mía."',
            '"Este es nuestro lugar especial,\ndonde cada recuerdo vive.\nTe amo hoy, mañana y siempre. 💕"'
        ];

        const poemIdx = Math.min(level - 1, poems.length - 1);

        // Poem text with fade-in
        const poem = this.add.text(400, 430, poems[poemIdx], {
            fontSize: '16px',
            fill: '#FFFFFF',
            fontFamily: 'Georgia, serif',
            align: 'center',
            fontStyle: 'italic',
            lineSpacing: 6,
            wordWrap: { width: 550 }
        }).setOrigin(0.5).setAlpha(0);

        this.tweens.add({
            targets: poem,
            alpha: 1,
            duration: 2000,
            delay: 500
        });

        // Score display
        this.add.text(400, 510, '❤️ Corazones recolectados: ' + score, {
            fontSize: '14px', fill: '#FF69B4', fontFamily: 'Arial'
        }).setOrigin(0.5);

        // Falling hearts particle effect
        this.time.addEvent({
            delay: 300,
            callback: () => {
                const hx = Phaser.Math.Between(80, 720);
                const fallingHeart = this.add.image(hx, -10, 'heart');
                fallingHeart.setScale(Phaser.Math.FloatBetween(1.5, 3));
                fallingHeart.setAlpha(0.5);
                this.tweens.add({
                    targets: fallingHeart,
                    y: 620,
                    alpha: 0,
                    angle: Phaser.Math.Between(-45, 45),
                    duration: Phaser.Math.Between(3000, 5000),
                    onComplete: () => fallingHeart.destroy()
                });
            },
            loop: true
        });

        // Continue prompt
        const continueText = this.add.text(400, 560, '✨ Haz clic para continuar ✨', {
            fontSize: '16px', fill: '#AAAAAA', fontFamily: 'Arial'
        }).setOrigin(0.5);

        this.tweens.add({
            targets: continueText,
            alpha: 0.3,
            duration: 800,
            yoyo: true,
            repeat: -1
        });

        // Click to continue
        this.input.on('pointerdown', () => {
            const nextLevel = level + 1;

            if (nextLevel > 10) {
                // GAME COMPLETE!
                this.scene.start('EndScene');
                return;
            }

            this.registry.set('currentLevel', nextLevel);
            this.scene.start('GameScene');
        });
    }
}

// ==================== END SCENE ====================
class EndScene extends Phaser.Scene {
    constructor() {
        super('EndScene');
    }

    create() {
        this.cameras.main.setBackgroundColor('#0d0d1a');

        // Stars
        for (let i = 0; i < 100; i++) {
            const star = this.add.circle(
                Phaser.Math.Between(0, 800),
                Phaser.Math.Between(0, 600),
                Phaser.Math.Between(1, 2),
                0xFFFFFF, Phaser.Math.FloatBetween(0.2, 1)
            );
            this.tweens.add({
                targets: star,
                alpha: 0.1,
                duration: Phaser.Math.Between(800, 2000),
                yoyo: true,
                repeat: -1
            });
        }

        // Big heart
        const bigHeart = this.add.image(400, 180, 'heart');
        bigHeart.setScale(12);
        this.tweens.add({
            targets: bigHeart,
            scale: 14,
            duration: 1000,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });

        // Card image
        const cardImg = this.add.image(400, 180, 'card_img');
        const imgScale = Math.min(120 / cardImg.width, 120 / cardImg.height);
        cardImg.setScale(imgScale);
        cardImg.setAlpha(0.9);

        // Final message
        this.add.text(400, 310, '¡JUEGO COMPLETADO!', {
            fontSize: '36px', fill: '#FFD700', fontFamily: 'Georgia, serif', fontStyle: 'bold'
        }).setOrigin(0.5);

        const finalMsg = this.add.text(400, 380,
            'Cada nivel fue un paso más hacia ti.\n' +
            'Cada corazón, un latido por ti.\n' +
            'Cada obstáculo, una prueba de que\n' +
            'nada me detiene cuando se trata de amarte.\n\n' +
            'TE AMO 💕', {
            fontSize: '18px', fill: '#FFFFFF', fontFamily: 'Georgia, serif',
            align: 'center', fontStyle: 'italic', lineSpacing: 8
        }).setOrigin(0.5).setAlpha(0);

        this.tweens.add({
            targets: finalMsg,
            alpha: 1,
            duration: 3000,
            delay: 1000
        });

        const score = this.registry.get('score');
        this.add.text(400, 520, '❤️ Total de corazones: ' + score, {
            fontSize: '20px', fill: '#FF69B4', fontFamily: 'Arial', fontStyle: 'bold'
        }).setOrigin(0.5);

        // Restart option
        const restart = this.add.text(400, 565, '🔄 Clic para volver a jugar', {
            fontSize: '14px', fill: '#888888', fontFamily: 'Arial'
        }).setOrigin(0.5);

        this.tweens.add({
            targets: restart, alpha: 0.3, duration: 800, yoyo: true, repeat: -1
        });

        // Falling hearts
        this.time.addEvent({
            delay: 200,
            callback: () => {
                const hx = Phaser.Math.Between(50, 750);
                const fh = this.add.image(hx, -10, 'heart');
                fh.setScale(Phaser.Math.FloatBetween(2, 5));
                fh.setAlpha(0.4);
                this.tweens.add({
                    targets: fh, y: 620, alpha: 0, angle: Phaser.Math.Between(-60, 60),
                    duration: Phaser.Math.Between(2000, 4000),
                    onComplete: () => fh.destroy()
                });
            },
            loop: true
        });

        this.input.on('pointerdown', () => {
            this.registry.set('currentLevel', 1);
            this.registry.set('score', 0);
            this.registry.set('lives', 3);
            this.scene.start('GameScene');
        });
    }
}
