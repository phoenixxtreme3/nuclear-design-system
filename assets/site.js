// Nuclear docs site — shared behavior across every page (mobile menu + sidebar search).
(function () {
  var sidebar = document.getElementById("sidebar");
  var menuToggle = document.getElementById("menu-toggle");
  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      sidebar.classList.toggle("open");
    });
  }
  sidebar.addEventListener("click", function (e) {
    if (e.target.tagName === "A" && window.innerWidth <= 860) sidebar.classList.remove("open");
  });

  var searchInput = document.getElementById("search");
  var searchCount = document.getElementById("search-count");
  var tocLinks = Array.prototype.slice.call(document.querySelectorAll("nav.toc a"));
  var tocGroups = Array.prototype.slice.call(document.querySelectorAll("nav.toc .group"));
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      var q = searchInput.value.trim().toLowerCase();
      var shown = 0;
      tocLinks.forEach(function (a) {
        var hay = (a.getAttribute("data-label") || "") + " " + a.textContent;
        var match = !q || hay.toLowerCase().indexOf(q) !== -1;
        a.hidden = !match;
        if (match) shown++;
      });
      tocGroups.forEach(function (g) {
        var anyVisible = Array.prototype.slice.call(g.querySelectorAll("a")).some(function (a) { return !a.hidden; });
        g.hidden = !anyVisible;
      });
      searchCount.textContent = q ? (shown + " match" + (shown === 1 ? "" : "es")) : "";
    });
  }
})();
