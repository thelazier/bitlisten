/** 
 *  @constructor
 *  @extends Floatable
 */
function Block(height, numTransactions, /*outputTotal*/difficulty, blockSize) {
	if (document.visibilityState === "visible") {
		Floatable.call(this);

		// var outputBTC = Math.floor(outputTotal / satoshi) + " BTC";
		var blockSizeKB = (blockSize / 1024).toFixed(2) + " KB";

		this.width = this.height = 500;

		this.addImage(blockImage, this.width, this.height);
		// this.addText("Block #" + height + "<br />Number of Transactions: " + numTransactions + "<br />Transaction Volume: " + outputBTC + "<br />Block Size: " + blockSizeKB);
		this.addText("Block #" + height + "<br />Number of Transactions: " + numTransactions + "<br />Block Difficulty: " + difficulty.toFixed(2) + "<br />Block Size: " + blockSizeKB);
		this.initPosition();
	}
	
	// Sound
	Sound.playRandomSwell();
}

extend(Floatable, Block);
