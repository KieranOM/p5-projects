function Player() {

	// Starting co-ordinates
	this.x = 320;
	this.y = 560;

	// Used to draw the player
	this.draw = function() {
		strokeWeight(0);

		// Main body
		fill(220);
		rect(this.x, this.y+30, 60, 30);
		rect(this.x+10, this.y+20, 40, 10);

		// Main body shading
		fill(180);
		rect(this.x, this.y+30, 3, 30);
		rect(this.x+10, this.y+20, 3, 10);

		// Main body lighting
		fill(255);
		rect(this.x+57, this.y+30, 3, 30);
		rect(this.x+47, this.y+20, 3, 10);

		// Cannon
		fill(200);
		rect(this.x+25, this.y, 10, 20);

		// Cannon shading
		fill(150);
		rect(this.x+25, this.y, 3, 20);

		// Cannon lighting
		fill(250);
		rect(this.x+32, this.y, 3, 20);
		
		// Cannon tip
		fill(130);
		rect(this.x+25, this.y, 10, 5);

		// Cannon tip shading
		fill(100);
		rect(this.x+25, this.y, 3, 5);

		// Cannon tip lighting
		fill(160);
		rect(this.x+32, this.y, 3, 5);

		// Bottom gap
		fill(0);
		rect(this.x+10, this.y+55, 40, 5);
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