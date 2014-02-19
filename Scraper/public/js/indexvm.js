var viewModel;
function vm(){
	var self = this;
	
	self.submitHardware = function() {
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
}

$(function() {
	viewModel = new vm();
	ko.applyBindings(viewModel);
});