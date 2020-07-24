var helperNamespacesInRoot = ['core', 'color', 'extras'];

function chartjsGlobals(original) {
	return function(id) {
		if (id === 'chart.js') {
			return 'Chart';
		}
		if (id.startsWith('chart.js/helpers/')) {
			var nameSpace = id.substr(17);
			if (helperNamespacesInRoot.includes(nameSpace)) {
				return 'Chart.helpers';
			}
			return 'Chart.heleprs.' + nameSpace;
		}

		// fallback to user config
		return typeof original === 'function' ? original(id) : original;
	};
}

module.exports = function() {
	return {
		name: 'chartjs-globals',

		outputOptions: function(options) {
			return chartjsGlobals(options.globals);
		}
	};
};
