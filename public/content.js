window.onload = () => {
	setTimeout(() => {
		var elementToRemove = document.getElementsByClassName("section-title")[1]?.parentElement
		if (elementToRemove) {
			elementToRemove.remove()
		}

		var showMoreButton = document.getElementsByClassName("show-action-btn-label")[0]
		if (showMoreButton) {
			showMoreButton.click()
		}
	}, 500)
}
