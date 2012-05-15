module('$ADP.Registry', {
	teardown: function() {
		// reset after each test
		$ADP.Registry.data = {};
	}
});

test('testRegister', function() {
	
	// after init
	equal(TestUtil.length($ADP.Registry.data), 0, 'There should be no registered data after initialization.');
	
	// register without params
	$ADP.Registry.register();
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
	equal($ADP.Registry.data[2].domId, 'domId:2:1', 'Value of domId for data with id [2] should be \'domId:2:1\'.');
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
	equal($ADP.Registry.data[2].domId, 'domId:2:2', 'Value of domId for data with id [2] should be overidden. The value should be \'domId:2:2\'.');
	equal(TestUtil.length($ADP.Registry.data[2].items), 2, 'There should be two items registered for id [2].');
});

test('testUnregister', function() {
	expect(0); // could be removed, when inserting tests
});

test('testGetById', function() {
	expect(0); // could be removed, when inserting tests
});

test('testPullById', function() {
	expect(0); // could be removed, when inserting tests
});

test('testGetDOMId', function() {
	expect(0); // could be removed, when inserting tests
});

test('testHasId', function() {
	expect(0); // could be removed, when inserting tests
});

test('testSetPublisherInfo', function() {
	expect(0); // could be removed, when inserting tests
});

test('testLocateParentRegistry', function() {
	expect(0); // could be removed, when inserting tests
});

test('testAskParentForPrivacyItems', function() {
	expect(0); // could be removed, when inserting tests
});

test('testAskNextParent', function() {
	expect(0); // could be removed, when inserting tests
});

test('testRegisterParentItems', function() {
	expect(0); // could be removed, when inserting tests
});

test('testLoadPrivacyItemsFromName', function() {
	expect(0); // could be removed, when inserting tests
});

test('testCreatePlayer', function() {
	expect(0); // could be removed, when inserting tests
});

test('testGenerateId', function() {
	expect(0); // could be removed, when inserting tests
});

test('testMessageHandler', function() {
	expect(0); // could be removed, when inserting tests
});

