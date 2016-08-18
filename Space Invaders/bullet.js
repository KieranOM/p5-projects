function Bullet() {

	// Starting co-ordinates
	this.x = player.x + 25;
	this.y = player.y - 30;

	this.draw = function() {

		// Bullet tip
		fill(241, 196, 15);
		rect(this.x+2, this.y, 6, 2);

		// Bullet body
		rect(this.x, this.y+2, 10, 28);

		// Bullet shading
		fill(192, 154, 12);
		rect(this.x, this.y+2, 3, 28);
		rect(this.x+2, this.y, 2, 2);

		// Bullet lighting
		fill(255, 235, 18);
	}

	this.update = function() {
		// Move the bullet up the screen
		this.y -= 10;
	}

}