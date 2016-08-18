function Enemy(x) {
	
	// Starting co-ordinates
	this.x = x+10;
	this.y = -80;

	this.draw = function() {

		// Body
		fill(192, 57, 43);
		rect(this.x+20, this.y, 20, 10);
		rect(this.x+10, this.y+10, 40, 10);
		rect(this.x, this.y+20, 60, 30);
		rect(this.x+10, this.y+50, 10, 10);
		rect(this.x+40, this.y+50, 10, 10);

		// Body shading
		fill(154, 46, 34);
		rect(this.x+20, this.y, 3, 10);
		rect(this.x+10, this.y+10, 3, 10);
		rect(this.x, this.y+20, 3, 30);
		rect(this.x+10, this.y+50, 3, 10);
		rect(this.x+40, this.y+50, 3, 10);

		// Body lighting
		fill(230, 68, 52);
		rect(this.x+37, this.y, 3, 10);
		rect(this.x+47, this.y+10, 3, 10);
		rect(this.x+57, this.y+20, 3, 30);
		rect(this.x+17, this.y+50, 3, 10);
		rect(this.x+47, this.y+50, 3, 10);

		// Eyes
		fill(0);
		rect(this.x+10, this.y+30, 10, 10);
		rect(this.x+40, this.y+30, 10, 10);
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