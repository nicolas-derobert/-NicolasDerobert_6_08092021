
//Source : https://codepen.io/karolinaklein/pen/Jwrabq
(function ($) {
	$(document).ready(function () {
		var customSelect = $(".custom-select");

		customSelect.each(function () {
			var thisCustomSelect = $(this),
				options = thisCustomSelect.find("option"),
				firstOptionText = options.first().text();

			var selectedItem = $("<div></div>", {
				class: "selected-item",
				role: "listbox",
				tabindex: "0",				
			})
				.appendTo(thisCustomSelect)
				.text(firstOptionText);

			var allItems = $("<div></div>", {
				class: "all-items all-items-hide",
			}).appendTo(thisCustomSelect);

			options.each(function () {
				var that = $(this),optionText = that.text();
				// console.log (optionText);
				console.log (that);
				console.log (that.text());
				var item = $("<div></div>", {
					class: "item",
					on: {
						click: function () {
							var selectedOptionText = that.text();
							selectedItem.text(selectedOptionText).removeClass("arrowanim");
							allItems.addClass("all-items-hide");
							console.log(selectedOptionText);
							applySorting(selectedOptionText);
						},
					},
				})
					.appendTo(allItems)
					.text(optionText);
			}); //Usage  of jQuery instance method as a property of the object passed to the second parameter:https://api.jquery.com/jquery/ 
			$(".item").wrap("<div class='item-container'></div>");
			// $(".item").attr({role="option"	 });
			// 	 $(".custom-select").attr({
			// 		role="listbox", tabindex="0", id="listbox1"
			// 		 });
			$(".item").attr('role', 'option');
			

				//  $(".custom-select").attr({
				// 	role="listbox", tabindex="0", id="listbox1"
				// 	 });

		});

		var selectedItem = $(".selected-item"),
			allItems = $(".all-items");

		selectedItem.on("click", function (e) {
			var currentSelectedItem = $(this),
				currentAllItems = currentSelectedItem.next(".all-items");

			allItems.not(currentAllItems).addClass("all-items-hide");
			selectedItem.not(currentSelectedItem).removeClass("arrowanim");

			currentAllItems.toggleClass("all-items-hide");
			currentSelectedItem.toggleClass("arrowanim");

			e.stopPropagation();
			
		});

		$(document).on("click", function () {
			var opened = $(".all-items:not(.all-items-hide)"),
				index = opened.parent().index();

			customSelect.eq(index).find(".all-items").addClass("all-items-hide");
			customSelect.eq(index).find(".selected-item").removeClass("arrowanim");
		});
	});
})(jQuery);

/*
Reference: http://jsfiddle.net/BB3JK/47/
*/

// $("select").each(function () {
// 	var $this = $(this),
// 		numberOfOptions = $(this).children("option").length;

// 	$this.addClass("select-hidden");
// 	$this.wrap('<div class="select"></div>');
// 	$this.after('<div class="select-styled"></div>');

// 	var $styledSelect = $this.next("div.select-styled");
// 	$styledSelect.text($this.children("option").eq(0).text());

// 	var $list = $("<ul />", {
// 		class: "select-options",
// 	}).insertAfter($styledSelect);

// 	for (var i = 0; i < numberOfOptions; i++) {
// 		$("<li />", {
// 			text: $this.children("option").eq(i).text(),
// 			rel: $this.children("option").eq(i).val(),
// 		}).appendTo($list);
// 	}

// 	var $listItems = $list.children("li");

// 	$styledSelect.click(function (e) {
// 		e.stopPropagation();
// 		$("div.select-styled.active")
// 			.not(this)
// 			.each(function () {
// 				$(this).removeClass("active").next("ul.select-options").hide();
// 			});
// 		$(this).toggleClass("active").next("ul.select-options").toggle();
// 	});

// 	$listItems.click(function (e) {
// 		e.stopPropagation();
// 		$styledSelect.text($(this).text()).removeClass("active");
// 		$this.val($(this).attr("rel"));
// 		$list.hide();
// 		//console.log($this.val());
// 	});

// 	$(document).click(function () {
// 		$styledSelect.removeClass("active");
// 		$list.hide();
// 	});
// });
