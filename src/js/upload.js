;(function ($, Formstone, undefined) {

	"use strict";

	/**
	 * @method private
	 * @name construct
	 * @description Builds instance.
	 * @param data [object] "Instance data"
	 */

	function construct(data) {
		if (Formstone.support.file) {
			var html = "";

			html += '<div class="' + RawClasses.target + '">';
			html += data.label;
			html += '</div>';
			html += '<input class="' + RawClasses.input + '" type="file"';
			if (data.multiple) {
				html += ' multiple';
			}
			html += '>';

			this.addClass(RawClasses.base)
				.append(html);

			data.$input       = this.find(Classes.input);
			data.queue        = [];
			data.total        = 0;
			data.uploading    = false;
			data.disabled     = true;

			this.on(Events.click, Classes.target, data, onClick)
				.on(Events.dragEnter, data, onDragEnter)
				.on(Events.dragOver, data, onDragOver)
				.on(Events.dragLeave, data, onDragOut)
				.on(Events.drop, Classes.target, data, onDrop);

			data.$input.on(Events.change, data, onChange);

			enableUpload.call(this, data);
		}
	}

	/**
	 * @method private
	 * @name destruct
	 * @description Tears down instance.
	 * @param data [object] "Instance data"
	 */

	function destruct(data) {
		if (Formstone.support.file) {
			data.$input.off(Events.namespace);

			this.off( [Events.click, Events.dragEnter, Events.dragOver, Events.dragLeave, Events.drop].join(" ") )
				.removeClass(RawClasses.base)
				.html("");
		}
	}

	/**
	 * @method
	 * @name disable
	 * @description Disables target instance.
	 * @example $(".target").upload("disable");
	 */

	function disableUpload(data) {
		if (!data.disabled) {
			this.addClass(RawClasses.disabled);
			data.$input.prop("disabled", true);

			data.disabled = true;
		}
	}

	/**
	 * @method
	 * @name enable
	 * @description Enables target instance.
	 * @example $(".target").upload("enable");
	 */

	function enableUpload(data) {
		if (data.disabled) {
			this.removeClass(RawClasses.disabled);
			data.$input.prop("disabled", false);

			data.disabled = false;
		}
	}

	/**
	 * @method private
	 * @name onClick
	 * @description Handles click to target.
	 * @param e [object] "Event data"
	 */
	function onClick(e) {
		Functions.killEvent(e);

		var data = e.data;

		if (!data.disabled) {
			data.$input.trigger(Events.click);
		}
	}

	/**
	 * @method private
	 * @name onChange
	 * @description Handles change to hidden input.
	 * @param e [object] "Event data"
	 */
	function onChange(e) {
		Functions.killEvent(e);

		var data = e.data,
			files = data.$input[0].files;

		if (!data.disabled && files.length) {
			handleUpload(data, files);
		}
	}

	/**
	 * @method private
	 * @name onDragEnter
	 * @description Handles dragenter to target.
	 * @param e [object] "Event data"
	 */
	function onDragEnter(e) {
		Functions.killEvent(e);

		var data = e.data;

		// if (!data.disabled) {
			data.$el.addClass(RawClasses.dropping);
		// }
	}

	/**
	 * @method private
	 * @name onDragOver
	 * @description Handles dragover to target.
	 * @param e [object] "Event data"
	 */
	function onDragOver(e) {
		Functions.killEvent(e);

		var data = e.data;

		// if (!data.disabled) {
			data.$el.addClass(RawClasses.dropping);
		// }
	}

	/**
	 * @method private
	 * @name onDragOut
	 * @description Handles dragout to target.
	 * @param e [object] "Event data"
	 */
	function onDragOut(e) {
		Functions.killEvent(e);

		var data = e.data;

		// if (!data.disabled) {
			data.$el.removeClass(RawClasses.dropping);
		// }
	}

	/**
	 * @method private
	 * @name onDrop
	 * @description Handles drop to target.
	 * @param e [object] "Event data"
	 */
	function onDrop(e) {
		Functions.killEvent(e);

		var data = e.data,
			files = e.originalEvent.dataTransfer.files;

		data.$el.removeClass(RawClasses.dropping);

		if (!data.disabled) {
			handleUpload(data, files);
		}
	}

	/**
	 * @method private
	 * @name handleUpload
	 * @description Handles new files.
	 * @param data [object] "Instance data"
	 * @param files [object] "File list"
	 */
	function handleUpload(data, files) {
		var newFiles = [];

		for (var i = 0; i < files.length; i++) {
			var file = {
				index: data.total++,
				file: files[i],
				name: files[i].name,
				size: files[i].size,
				started: false,
				complete: false,
				error: false,
				transfer: null
			};

			newFiles.push(file);
			data.queue.push(file);
		}

		if (!data.uploading) {
			$Window.on(Events.beforeUnload, function() {
				return data.leave;
			});

			data.uploading = true;
		}

		data.$el.trigger(Events.start, [ newFiles ]);

		checkQueue(data);
	}

	/**
	 * @method private
	 * @name checkQueue
	 * @description Checks and updates file queue.
	 * @param data [object] "Instance data"
	 */
	function checkQueue(data) {
		var transfering = 0,
			newQueue = [];

		// remove lingering items from queue
		for (var i in data.queue) {
			if (data.queue.hasOwnProperty(i) && !data.queue[i].complete && !data.queue[i].error) {
				newQueue.push(data.queue[i]);
			}
		}

		data.queue = newQueue;

		for (var j in data.queue) {
			if (data.queue.hasOwnProperty(j)) {
				if (!data.queue[j].started) {
					var formData = new FormData();

					formData.append(data.postKey, data.queue[j].file);

					for (var k in data.postData) {
						if (data.postData.hasOwnProperty(k)) {
							formData.append(k, data.postData[k]);
						}
					}

					uploadFile(data, data.queue[j], formData);
				}

				transfering++;

				if (transfering >= data.maxQueue) {
					return;
				} else {
					i++;
				}
			}
		}

		if (transfering === 0) {
			$Window.off(Events.beforeUnload);

			data.uploading = false;

			data.$el.trigger(Events.complete);
		}
	}

	/**
	 * @method private
	 * @name uploadFile
	 * @description Uploads file.
	 * @param data [object] "Instance data"
	 * @param file [object] "Target file"
	 * @param formData [object] "Target form"
	 */
	function uploadFile(data, file, formData) {
		// Modify data before upload
		formData = data.beforeSend.call(Window, formData);

		if (file.size >= data.maxSize) {
			file.error = true;
			data.$el.trigger(Events.fileError, [ file, "Too large" ]);

			checkQueue(data);
		} else {
			file.started = true;
			file.transfer = $.ajax({
				url: data.action,
				data: formData,
				type: "POST",
				contentType:false,
				processData: false,
				cache: false,
				xhr: function() {
					var $xhr = $.ajaxSettings.xhr();

					if ($xhr.upload) {
						// Clean progress event
						$xhr.upload.addEventListener("progress", function(e) {
							var percent = 0,
								position = e.loaded || e.position,
								total = e.total;

							if (e.lengthComputable) {
								percent = Math.ceil(position / total * 100);
							}

							data.$el.trigger(Events.fileProgress, [ file, percent ]);
						}, false);
					}

					return $xhr;
				},
				beforeSend: function(jqXHR, settings) {
					data.$el.trigger(Events.fileStart, [ file ]);
				},
				success: function(response, status, jqXHR) {
					file.complete = true;
					data.$el.trigger(Events.fileComplete, [ file, response ]);

					checkQueue(data);
				},
				error: function(jqXHR, status, error) {
					file.error = true;
					data.$el.trigger(Events.fileError, [ file, error ]);

					checkQueue(data);
				}
			});
		}
	}

	/**
	 * @plugin
	 * @name Upload
	 * @description A jQuery plugin for simple drag and drop uploads.
	 * @type widget
	 * @main upload.js
	 * @main upload.css
	 * @dependency jQuery
	 * @dependency core.js
	 */

	var Plugin = Formstone.Plugin("upload", {
			widget: true,

			/**
			 * @options
			 * @param action [string] "Where to submit uploads"
			 * @param beforeSend [function] "Run before request sent, must return modified formdata"
			 * @param customClass [string] <''> "Class applied to instance"
			 * @param label [string] <'Drag and drop files or click to select'> "Drop target text"
			 * @param leave [string] <'You have uploads pending, are you sure you want to leave this page?'> "Before leave message"
			 * @param maxQueue [int] <2> "Number of files to simultaneously upload"
			 * @param maxSize [int] <5242880> "Max file size allowed"
			 * @param multiple [true] <true> "Flag to allow mutiple file uploads"
			 * @param postData [object] "Extra data to post with upload"
			 * @param postKey [string] <'file'> "Key to upload file as"
			 */

			defaults: {
				action         : "",
				beforeSend     : function(formdata) { return formdata; },
				customClass    : "",
				label          : "Drag and drop files or click to select",
				leave          : "You have uploads pending, are you sure you want to leave this page?",
				maxQueue       : 2,
				maxSize        : 5242880, // 5 mb
				multiple       : true,
				postData       : {},
				postKey        : "file"
			},

			classes: [
				"input",
				"target",
				"multiple",
				"dropping",
				"disabled"
			],

			methods: {
				_construct    : construct,
				_destruct     : destruct,

				disable       : disableUpload,
				enable        : enableUpload,
			}
		}),

		// Localize References

		Classes       = Plugin.classes,
		RawClasses    = Classes.raw,
		Events        = Plugin.events,
		Functions     = Plugin.functions,

		Window        = Formstone.window,
		$Window       = Formstone.$window;

		/**
		 * @events
		 * @event complete "All uploads are complete"
		 * @event filecomplete "Specific upload complete"
		 * @event fileerror "Specific upload error"
		 * @event filestart "Specific upload starting"
		 * @event fileprogress "Specific upload progress"
		 * @event start "Uploads starting"
		 */

		Events.complete        = "complete";
		Events.fileStart       = "filestart";
		Events.fileProgress    = "fileprogress";
		Events.fileComplete    = "filecomplete";
		Events.fileError       = "fileerror";
		Events.start           = "start";

})(jQuery, Formstone);