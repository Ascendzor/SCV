var viewModel;
function vm(){
	this.budget = ko.observable(1337);
	
	self.hardwares = ko.observableArray([
		{type: 'cpu', name: '4670', price: '294.40'},
		{type: 'graphicsCard', name: 'r9 290', price: '746.35'},
		{type: 'motherboard', name: 'ASRock H81M-HDS', price: '86.25'},
		{type: 'RAM', name: 'G.SKILL Areas 8GB (2x4GB) DDR3 1333MHz', price: '113.85'},
		{type: 'HDD', name: 'WD Blue Edition 1TB', price: '90.85'},
		{type: 'PSU', name: 'CORSAIR 750W HX-750v2', price: '253.00'},
		{type: 'case', name: 'COOLER MASTER N200', price: '90.85'},
	]);
}

function sendBudget() {
	console.log('le sending le budget');
	console.log('budget: ' + viewModel.budget());
	$.ajax({
		type: 'POST',
		dataType: 'json',
		contentType: 'application/json; charset=UTF-8',
		data: JSON.stringify({budget: viewModel.budget()}),
		url: '/indexVM',
		success: function (leObject) {
			console.log(leObject.leValue);
		},
		error: function () {
			console.log('le error');
		}
	});
}

$(function() {
	viewModel = new vm();
	ko.applyBindings(viewModel);
	sendBudget();
});