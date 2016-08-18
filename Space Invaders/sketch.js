var player = new Player();
var enemies = [];
var bullets = [];
var lastShot = 0;
var points = 0;
var lastRowY;

function setup() {
	createCanvas(640, 640);

	// Create enemies
	addRow();
}

function draw() {
	background(0);

	// Draw player
	player.update();
	player.draw();

	// Draw enemies
	for (var i=enemies.length-1; i>=0; i--) {
		var enemy = enemies[i];

		// Update the current enemy
		enemy.update();

		// If they're off-screen...
		if (enemy.y >= height-60) {
			// Clear all the enemies
			enemies = [];
			// Tell the user their score and reset
			alert("You scored: " + points);
			points = 0;
			break;
		} else {
			// Otherwise, if they were hit by a bullet
			if (enemy.hitByBullet(i)) {
				// Remove them
				enemies.splice(i, 1);
				// Increment the score
				points++;
			} else {
				// Draw the enemy
				enemy.draw();
			}

		}
	}

	// Draw bullets
	for (var i=bullets.length-1; i>=0; i--) {
		var bullet = bullets[i];

		// Update the current bullet
		bullet.update();
		// If the bullet goes off-screen...
		if (bullet.y <= 0) {
			// Remove it
			bullets.splice(i, 1);
		} else {
			// Otherwise, draw it
			bullet.draw();
		}
	}

	// Check for a new row of enemies
	lastRowY += .5;

	if (lastRowY >= 0) {
		addRow();
	}
}

function mouseClicked() {
	// Get the current time
	var time = new Date().getTime();
	// If it has been 1 second since the last shot...
	if (time - lastShot >= 250) {
		// Shoot a bullet
		player.shoot();
		// Reset the cooldown
		lastShot = time;
	}
}

function addRow() {
	// Create a row of 8 enemies
	for (var i=0; i<8; i++) {
		enemies.push(new Enemy(80*i));
	}
	// Reset the last row y co-ord.
	lastRowY = -80;
}