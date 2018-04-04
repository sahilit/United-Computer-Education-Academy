$(document).ready(function () {
    $(".a").click(function () {
        $(".associates").toggle("slow")
        $(".section1").toggle("slow");
        $(".section2").slideUp("slow");
        $(".section3").slideUp("slow");
        $(".section4").slideUp("slow");
        $(".section5").slideUp("slow");
        $(".section6").slideUp("slow");
    });
    $(".b").click(function () {
        $(".associates").toggle("slow")
        $(".section2").toggle("slow");
        $(".section1").slideUp("slow");
        $(".section3").slideUp("slow");
        $(".section4").slideUp("slow");
        $(".section5").slideUp("slow");
        $(".section6").slideUp("slow");
    });
    $(".c").click(function () {
        $(".associates").toggle("slow")
        $(".section3").toggle("slow");
        $(".section1").slideUp("slow");
        $(".section2").slideUp("slow");
        $(".section4").slideUp("slow");
        $(".section5").slideUp("slow");
        $(".section6").slideUp("slow");
    });
    $(".d").click(function () {
        $(".associates").toggle("slow")
        $(".section4").toggle("slow");
        $(".section1").slideUp("slow");
        $(".section2").slideUp("slow");
        $(".section3").slideUp("slow");
        $(".section5").slideUp("slow");
        $(".section6").slideUp("slow");
    });
    $(".e").click(function () {
        $(".associates").toggle("slow")
        $(".section5").toggle("slow");
        $(".section1").slideUp("slow");
        $(".section2").slideUp("slow");
        $(".section3").slideUp("slow");
        $(".section4").slideUp("slow");
        $(".section6").slideUp("slow");
    });
    $(".f").click(function () {
        $(".associates").toggle("slow")
        $(".section6").toggle("slow");
        $(".section1").slideUp("slow");
        $(".section2").slideUp("slow");
        $(".section3").slideUp("slow");
        $(".section4").slideUp("slow");
        $(".section5").slideUp("slow");
    });
});
