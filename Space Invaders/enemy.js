function Enemy(x) {
	
	// Starting co-ordinates
	this.x = x+10;
	this.y = -80;

	this.draw = function() {
		fill(192, 57, 43);
		rect(this.x, this.y, 60, 60);
	}

	this.update = function() {
		// Move the enemy down the screen
		this.y += .5;
	}

	this.hitByBullet = function() {

		for (var i=bullets.length-1; i>=0; i--) {
			var bullet = bullets[i];
			// xHit = true when a bullet matches its X co-ords in its hitbox
			var xHit = bullet.x > this.x-10 && bullet.x < this.x+60;
			// yHit = true when a bullet matches its Y co-ords in its hitbox
			var yHit = bullet.y <= this.y+60;

			// If a bullet has hit...
			if (xHit && yHit) {
				// Remove the bullet
				bullets.splice(i, 1);
				return true;
			}
		}
		return false;

	}

}