TestUtil = {
	
	length: function(obj) {
		if(typeof obj === 'array') {
			return obj.length;
		}
		else if(typeof obj === 'object') {
			var length = 0;
			for(var key in obj) {
				length++;
			}
			return length;
		}
	}
	
};