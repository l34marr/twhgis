(function () {
  var d = function (c, a) {
    var b = new window.XMLHttpRequest;
    b.open("GET", "/like/" + c + "/");
    b.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    b.onreadystatechange = function () {
      4 == b.readyState && 200 == b.status && a(JSON.parse(b.responseText))
    };
    b.send()
  }, e = function (c) {
      c.preventDefault();
      var a = c.target;
      a.classList.contains("hasvoted") || d(a.parentNode.parentNode.id, function (b) {
        "added" in b && (b = parseInt(a.textContent, 10), a.textContent = b + 1, a.classList.add("hasvoted"))
      })
    };
  window.addEventListener("DOMContentLoaded",
    function () {
      for (var c = document.querySelectorAll(".like .vote"), a = 0; a < c.length; ++a) c[a].addEventListener("click", e)
    })
})();
