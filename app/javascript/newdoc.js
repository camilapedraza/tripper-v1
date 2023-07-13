$(document).ready(function() {
  var startX, startY;

  // Fonction pour capturer les coordonnées de départ du mouvement
  function captureStartCoordinates(event) {
    startX = getEventX(event);
    startY = getEventY(event);
  }

  // Fonction pour récupérer les coordonnées X de l'événement (souris ou tactile)
  function getEventX(event) {
    if (event.type.startsWith("touch")) {
      return event.originalEvent.touches[0].pageX;
    } else {
      return event.pageX;
    }
  }

  // Fonction pour récupérer les coordonnées Y de l'événement (souris ou tactile)
  function getEventY(event) {
    if (event.type.startsWith("touch")) {
      return event.originalEvent.touches[0].pageY;
    } else {
      return event.pageY;
    }
  }

  // Fonction pour gérer le mouvement lors du glissement
  function handleMove(event) {
    var moveX = getEventX(event);
    var moveY = getEventY(event);
    var diffY = moveY - startY;

    if (diffY > 50) {
      // Fermer la carte New Trip si glissement vers le bas suffisant
      $("#new-trip-card").slideUp(500, function() {
        $("#placeholder-card").show();
      });
    }
  }

  $(".add-doc-link").click(function(e) {
    e.preventDefault();

    if ($("#new-trip-card").is(":hidden")) {
      $("#new-trip-card").slideDown(500, function() {
        $("#placeholder-card").hide();
      });
    }
  });

  $(document).on("mousedown touchstart", "#new-trip-card", function(event) {
    captureStartCoordinates(event);

    $(document).on("mousemove touchmove", function(event) {
      handleMove(event);
    });
  });

  $(document).on("mouseup touchend", function() {
    startX = null;
    startY = null;

    $(document).off("mousemove touchmove");
  });

  $(document).on("click", function(event) {
    if (!$(event.target).closest("#new-trip-card").length && !$(event.target).is(".add-doc-link")) {
      if ($("#new-trip-card").is(":visible")) {
        $("#new-trip-card").slideUp(500, function() {
          $("#placeholder-card").show();
        });
      }
    }
  });
});

