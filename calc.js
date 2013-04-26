// http://www.math.jyu.fi/matyl/peruskurssi/talousmatematiikkaa/korkor3.8.htm

function LoanCalc($scope) {
	$scope.amount = 100000;
	$scope.interest = 6;
	$scope.years = 25;
	$scope.months = [];

	$scope.calc = function() {
		$scope.monthly = 123;
		var interest = $scope.interest / 100;
		var months = $scope.years * 12;
		$scope.monthly = (Math.pow(1+interest/12, months)*(interest/12)*$scope.amount)/(Math.pow(1+interest/12, 300)-1);

		var left = $scope.amount;
		var interestMonth = 0;
		var extra = 0;
		$scope.months = [];
		for (var i = 0; i < months; i++) {
			interestMonth = left * (interest/12);
			extra = $scope.monthly - interestMonth;
			left -= extra;
			$scope.months.push([i + 1, Math.floor(i / 12 + 1), i % 12 + 1, interestMonth, extra, left]);
		}
	}

	$scope.calc();
}
