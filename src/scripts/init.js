$(document).ready(function () {

	const mountPoint = $('<div>', {
		id: 'files_mediaviewer',
		html: '<div>'
	});

	if (!OCA.Files) {
		return;
	}

	// ---- Register fileactions -------

	let ViewMedia = {
		mime: 'image/png',
		name: 'ViewMedia',
		permissions: OC.PERMISSION_READ,
		actionHandler(fileName, context) {

			window._mediaviewer = {
				fileName,
				context
			};

			window.location = '#/view/' + fileName;

			$('body').append(mountPoint);
			OC.addScript('files_mediaviewer', 'files_mediaviewer');
		}
	};

	OCA.Files.fileActions.registerAction(ViewMedia);
	OCA.Files.fileActions.setDefault('image/png', 'ViewMedia');
});
