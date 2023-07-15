document.addEventListener("DOMContentLoaded", function() {
  var startX, startY;

  // Fonction pour capturer les coordonnées de départ du mouvement
  function captureStartCoordinates(event) {
    startX = getEventX(event);
    startY = getEventY(event);
  }

  // Fonction pour récupérer les coordonnées X de l'événement (souris ou tactile)
  function getEventX(event) {
    if (event.type.startsWith("touch")) {
      return event.touches[0].pageX;
    } else {
      return event.pageX;
    }
  }

  // Fonction pour récupérer les coordonnées Y de l'événement (souris ou tactile)
  function getEventY(event) {
    if (event.type.startsWith("touch")) {
      return event.touches[0].pageY;
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
      // Fermer la carte down-card si glissement vers le bas suffisant
      $("#down-card").slideUp(500, function() {
        // Code à exécuter après la fermeture de la carte
      });
    }
  }

  $("#add-doc-link").click(function() {
    if ($("#down-card").is(":hidden")) {
      $("#down-card").slideDown(500, function() {
        // Code à exécuter après l'ouverture de la carte
      });
    }
  });

  $(document).on("mousedown touchstart", "#down-card", function(event) {
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
    if (!$(event.target).closest("#down-card").length && !$(event.target).is("#add-doc-link")) {
      if ($("#down-card").is(":visible")) {
        $("#down-card").slideUp(500, function() {
          // Code à exécuter après la fermeture de la carte
        });
      }
    }
  });

  // Masquer la carte "down-card" par défaut
  $("#down-card").hide();
});


document.addEventListener('DOMContentLoaded', function() {
  var addDocLink = document.getElementById('add-doc-link');
  var downCard = document.getElementById('down-card');

  addDocLink.addEventListener('click', function(event) {
    event.preventDefault();
    downCard.classList.toggle('visible');
  });
});
