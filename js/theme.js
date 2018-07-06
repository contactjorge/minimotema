/**
/* Minimo tema theme
/* Venus
/* Javascript for theme
/* Jorge L Lopez - IT 390
/* Version 1805.27
/* Copyright 2018


var reference = document.querySelector('.my-button');
var popper = document.querySelector('.my-popper');
var anotherPopper = new Popper(
    reference,
    popper,
    {
      // popper options here
    }
);
 */


! function($) {
  $(document).ready(function() {
    $("div#block-minimotema-ctapanel1").addClass("col-md-4");
    $("div#block-minimotema-ctapanel2").addClass("col-md-4");
    $("div#block-minimotema-ctapanel3").addClass("col-md-4");
  });
}(jQuery);

var block1 = document.getElementById("block-minimotema-ctapanel1");
var block2 = document.getElementById("block-minimotema-ctapanel2");
var block3 = document.getElementById("block-minimotema-ctapanel3");
