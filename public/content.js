window.onload = () => {
	setTimeout(() => {
		var elementToRemove = document.evaluate('//*[@id="sidebar-wrapper"]/div[2]/div/section[2]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

		var showMoreButton = document.evaluate('//*[@id="sidebar-wrapper"]/div[2]/div/div[2]/button', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

		// var showMoreChannelsButton = document.evaluate('//*[@id="sidebar-wrapper"]/div[2]/div/div[1]/button', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

		if (elementToRemove) {
			elementToRemove.remove();
		}

		if (showMoreButton) {
			showMoreButton.remove();
		}

		// if (showMoreChannelsButton) {
		// 	// click
		// 	showMoreChannelsButton.click();
		// }
	}, 1000);
}
