function Bullet() {

	this.x = player.x + 25;
	this.y = player.y - 30;

	this.draw = function() {
		fill(241, 196, 15);
		rect(this.x, this.y, 10, 30);
	}

	this.update = function() {
		this.y -= 10;
	}

}