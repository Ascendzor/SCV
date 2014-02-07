var viewModel;
function vm(){
	this.gamingDescription = function () {
		$('.description').hide();
		$('#aboutGaming').show();
		console.log('le gaming description');
	}
	this.browsingDescription = function () {
		$('.description').hide();
		$('#aboutBrowsing').show();
		console.log('browsing description');
	}
	this.videoEdittingDescription = function () {
		$('.description').hide();
		$('#aboutVideoEditting').show();
		console.log('video editting description');
	}
	
	this.budget = ko.observable(1337);
	
	this.descriptions = [];
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