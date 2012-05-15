module('$ADP.Registry', {
	
	teardown: function() {
		// reset after each test
		$ADP.Registry.data = {};
	}

});

test('register', function() {
	
	// after init
	equal(TestUtil.length($ADP.Registry.data), 0, 'There should be no registered data after initialization.');
	
	// register without params
	$ADP.Registry.register();
	ok(true, 'Should not crash, when registering undefined id.');
	equal(TestUtil.length($ADP.Registry.data), 0, 'There should be no registered data after invoking $ADP.Registry.register method without any parameters.');

	// reset data
	$ADP.Registry.data = {};
	
	// register with id [1]
	$ADP.Registry.register(1);
	equal(TestUtil.length($ADP.Registry.data), 1, 'There should be one entry of registered data after registering one.');
	
	// register with id [2]
	$ADP.Registry.register(2, {
		domId: 'domId:2:1',
		items: {
			title: 'title:2:1',
			text: 'text:2:1',
			url: 'url:2:1',
			linkText: 'linkText:2:1'
		}
	});
	equal(TestUtil.length($ADP.Registry.data), 2, 'There should be two entries of registered data after registering two different.');
	equal($ADP.Registry.data[2].domId, 'domId:2:1', 'Value of domId for data with id [2] should be [\'domId:2:1\'].');
	equal(TestUtil.length($ADP.Registry.data[2].items), 1, 'There should be one item registered for id [2].');
	
	// register with id [2]
	$ADP.Registry.register(2, {
		domId: 'domId:2:2',
		items: {
			title: 'title:2:2',
			text: 'text:2:2',
			url: 'url:2:2',
			linkText: 'linkText:2:2'
		}
	});
	equal(TestUtil.length($ADP.Registry.data), 2, 'There should be two entries of registered data after registering two different id\'s [1, 2] and one duplicate [2].');
	equal($ADP.Registry.data[2].domId, 'domId:2:2', 'Value of domId for data with id [2] should be overidden. The value should be [\'domId:2:2\'].');
	equal(TestUtil.length($ADP.Registry.data[2].items), 2, 'There should be two items registered for id [2].');
	
});

test('unregister', function() {
	
	// unregister undefined id
	$ADP.Registry.unregister();
	ok(true, 'Should not crash, when unregistering undefined id.');
	
	// unregister non-existent id [8]
	$ADP.Registry.unregister(8);
	ok(true, 'Should not crash, when unregistering non-existent id [8].');
	
	// register with id [1]
	$ADP.Registry.register(1, {
		domId: 'domId:1:1',
		items: {
			title: 'title:1:1',
			text: 'text:1:1',
			url: 'url:1:1',
			linkText: 'linkText:1:1'
		}
	});
	equal(TestUtil.length($ADP.Registry.data), 1, 'There should be one entry of registered data after registering id [1].');
	
	// unregister id [1]
	$ADP.Registry.unregister(1);
	equal(TestUtil.length($ADP.Registry.data), 0, 'There should be no entry of registered data after unregistering id [1].');
	
});

test('getById', function() {
	
	// get by undefined id
	$ADP.Registry.getById();
	ok(true, 'Should not crash, when retrieving undefined id.');
	
	// get by non-existent id
	$ADP.Registry.getById(8);
	ok(true, 'Should not crash, when retrieving non-existent id.');
	
	// register with id [1]
	$ADP.Registry.register(1, {
		domId: 'domId:1:1',
		items: {
			title: 'title:1:1',
			text: 'text:1:1',
			url: 'url:1:1',
			linkText: 'linkText:1:1'
		}
	});
	equal(TestUtil.length($ADP.Registry.getById(1)), 1, 'There should be one item returned for id [1].');
	
	// register with id [2]
	$ADP.Registry.register(1, {
		domId: 'domId:1:2',
		items: {
			title: 'title:1:2',
			text: 'text:1:2',
			url: 'url:1:2',
			linkText: 'linkText:1:2'
		}
	});
	equal(TestUtil.length($ADP.Registry.getById(1)), 2, 'There should be two items returned for id [1].');
	
});

test('pullById', function() {
	
	// pull by undefined id
	$ADP.Registry.pullById();
	ok(true, 'Should not crash, when retrieving undefined id.');
	
	// get by non-existent id
	$ADP.Registry.pullById(8);
	ok(true, 'Should not crash, when retrieving non-existent id.');
	
	// register with id [1]
	$ADP.Registry.register(1, {
		domId: 'domId:1:1',
		items: {
			title: 'title:1:1',
			text: 'text:1:1',
			url: 'url:1:1',
			linkText: 'linkText:1:1'
		}
	});
	equal(TestUtil.length($ADP.Registry.pullById(1)), 1, 'There should be one item returned for id [1].');
	equal(TestUtil.length($ADP.Registry.data), 0, 'The registered data for id [1] should be unregistered after invoking $ADP.Registry.pullById(1).');
	
});

test('getDOMId', function() {
	expect(0); // could be removed, when inserting tests
});

test('hasId', function() {
	expect(0); // could be removed, when inserting tests
});

test('setPublisherInfo', function() {
	expect(0); // could be removed, when inserting tests
});

test('locateParentRegistry', function() {
	expect(0); // could be removed, when inserting tests
});

test('askParentForPrivacyItems', function() {
	expect(0); // could be removed, when inserting tests
});

test('askNextParent', function() {
	expect(0); // could be removed, when inserting tests
});

test('registerParentItems', function() {
	expect(0); // could be removed, when inserting tests
});

test('loadPrivacyItemsFromName', function() {
	expect(0); // could be removed, when inserting tests
});

test('createPlayer', function() {
	expect(0); // could be removed, when inserting tests
});

test('generateId', function() {
	expect(0); // could be removed, when inserting tests
});

test('messageHandler', function() {
	expect(0); // could be removed, when inserting tests
});

