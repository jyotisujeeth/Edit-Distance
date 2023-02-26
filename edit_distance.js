# Edit-Distance
Insert a character Delete a character Replace a character


var minDistance = function(word1, word2) {
	const m = word1.length;
	const n = word2.length;

	const dp = new Array(m + 1).fill(0).map(v => new Array(n + 1));

	for (let i = 0; i <= m; i++) 
		dp[i][n] = m - i;
	
	for (let j = 0; j <= n; j++) 
		dp[m][j] = n - j;
	
	for (let i = m - 1; i >= 0; i--) {
		for (let j = n - 1; j >= 0; j--) {
			if (word1[i] == word2[j]) 
				dp[i][j] = dp[i + 1][j + 1];
			else 
				dp[i][j] = 1 + Math.min(Math.min(dp[i][j + 1], dp[i + 1][j]), dp[i + 1][j + 1]);
		}
	}

	return dp[0][0];
};
