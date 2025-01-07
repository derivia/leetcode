/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
	// https://medium.com/@fabianterh/optimizing-the-knapsack-problem-dynamic-programming-solution-for-space-complexity-c6bcdff3870b
	// recurso que trata (em inglês) sobre o funcionamento do código abaixo
	const m = s.length;
	const n = p.length;
	const dp = Array(n + 1).fill(false);

	// caso base -> string vazia e padrão vazio
	dp[0] = true;

	// inicializa padrões como a*, b*, etc, que podem corresponder a uma string vazia
	for (let j = 1; j <= n; j++) {
		if (p[j - 1] === "*") {
			dp[j] = dp[j - 2];
		}
	}

	for (let i = 1; i <= m; i++) {
		let prev = dp[0];
		dp[0] = false; // string não vazia com padrão vazio não corresponde
		for (let j = 1; j <= n; j++) {
			const temp = dp[j];
			if (p[j - 1] === "." || p[j - 1] === s[i - 1]) {
				dp[j] = prev; // usa o valor diagonal superior esquerdo
			} else if (p[j - 1] === "*") {
				dp[j] = dp[j - 2]; // há zero ocorrências do elemento anterior
				if (p[j - 2] === "." || p[j - 2] === s[i - 1]) {
					dp[j] = dp[j] || temp; // há uma ou mais ocorrências do elemento anterior
				}
			} else {
				dp[j] = false;
			}
			prev = temp;
		}
	}

	return dp[n];
};
