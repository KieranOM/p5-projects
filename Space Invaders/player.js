function Player() {

	// Starting co-ordinates
	this.x = 320;
	this.y = 560;

	// Used to draw the player
	this.draw = function() {
		strokeWeight(0);

		fill(255);
		rect(this.x, this.y, 60, 60);
	}

	// Used to update the player's position
	this.update = function() {
		// Smooth the X co-ord towards the mouse's X
		// -30 to make it central
		this.x = lerp(this.x, mouseX-30, 0.1);

		// Limit the X to the canvas' bounds
		// -60 to make the right side stay in
		this.x = constrain(this.x, 0, width-60);
	}

	this.shoot = function() {
		// Add a new bullet to the bullets array
		bullets.push(new Bullet());
	}
}