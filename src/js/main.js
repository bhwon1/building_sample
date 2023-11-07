(function ($) {
    const Common = {
        init() {
            this.common();
        },
        common() {
            $(".all-colabds").click(function () {
                $(".element").each(function () {
                    $(this).find("h2").children().eq(0).html("add_circle_outlined");
                    $(this).addClass("m0");
                });
                $(".elements").each(function () {
                    $(this).addClass("dn");
                });
            });

            $(".all-epd").click(function () {
                $(".element").each(function () {
                    $(this).find("h2").children().eq(0).html("do_not_disturb_on");
                    $(this).removeClass("m0");
                });
                $(".elements").each(function () {
                    $(this).removeClass("dn");
                });
            });

            $(".element").on("click", "h2 span", function () {
                let ele = $(this).closest(".element").find("h2").children().eq(1);
                let eles = $(this).closest(".element").find(".elements");

                ele.toggleClass("on");

                if (ele.hasClass("on")) {
                    ele.siblings("i").html("add_circle_outlined");
                    ele.parents(".element").addClass("m0");
                    eles.addClass("dn");
                } else {
                    ele.siblings("i").html("do_not_disturb_on");
                    ele.parents(".element").removeClass("m0");
                    eles.removeClass("dn");
                }
            });

            $(".gp_left").on("click", function (e) {
                let target = e.target;
                if (target.tagName === "A") {
                    $(target).addClass("active");

                    let links = $(".gp_left A");
                    for (let link of links) {
                        if (link !== target) {
                            $(link).removeClass("active");
                        }
                    }
                }
            });

            // // textarea 오토사이징
            $(document).on("keyup", "textarea.autosize", function () {
                $(this).css("height", "auto");
                $(this).height(this.scrollHeight);
            });

            // input 내용 지우기
            $(".input .del").on("click", function () {
                $(this).siblings("input").val("");
            });

            // input datepicker
            $("input.datepicker:not(.except)").datepicker({
                showOn: "button",
                changeYear: true,
                changeMonth: true,
                buttonText: "달력",
                showMonthAfterYear: true,
                dateFormat: "yy-mm-dd",
                yearRange: "c-50:c+50",
                // showOtherMonths : true,
                // selectOtherMonths : true,
                dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
                monthNamesShort: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            });

            // 디데이 선택
            function setupDatepickers(startDateId, endDateId) {
                let startDatePicker = $("#" + startDateId);
                let endDatePicker = $("#" + endDateId);
                let startDateVal = startDatePicker.val();
                let endDateVal = endDatePicker.val();

                startDatePicker.datepicker("setDate", new Date());
                startDatePicker.datepicker("option", "maxDate", endDateVal);
                startDatePicker.datepicker("option", "onClose", function (selectedDate) {
                    endDatePicker.datepicker("option", "minDate", selectedDate);
                });

                endDatePicker.datepicker("option", "minDate", startDateVal);
                endDatePicker.datepicker("option", "onClose", function (selectedDate) {
                    startDatePicker.datepicker("option", "maxDate", selectedDate);
                });
            }

            function setupMultipleDatepickersClass(startId, endId) {
                $(startId).each(function (idx, ele) {
                    let startDateId = $(ele).attr("id");
                    let endDateId = $(ele).closest(".input").nextAll(".input").find(endId).attr("id");

                    setupDatepickers(startDateId, endDateId);
                });
            }
            setupMultipleDatepickersClass(".startDate", ".endDate");
        },
    };

    Common.init();
})(jQuery);
