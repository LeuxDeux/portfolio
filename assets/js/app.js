/* Accordion + deep links. No dependencies. */

(function () {
  "use strict";

  var triggers = Array.prototype.slice.call(document.querySelectorAll(".project__trigger"));

  function panelOf(trigger) {
    return document.getElementById(trigger.getAttribute("aria-controls"));
  }

  function setOpen(trigger, open) {
    var panel = panelOf(trigger);
    trigger.setAttribute("aria-expanded", open ? "true" : "false");
    if (panel) panel.hidden = !open;
  }

  function closeAll(except) {
    triggers.forEach(function (trigger) {
      if (trigger !== except) setOpen(trigger, false);
    });
  }

  function articleOf(trigger) {
    return trigger.closest(".project");
  }

  function openById(id) {
    if (!id) return;
    var article = document.getElementById(id);
    if (!article || !article.classList.contains("project")) return;

    var trigger = article.querySelector(".project__trigger");
    if (!trigger) return;

    closeAll(trigger);
    setOpen(trigger, true);
  }

  function openFromHash() {
    openById(window.location.hash.replace("#", ""));
  }

  function writeHash(id) {
    try {
      history.replaceState(null, "", "#" + id);
    } catch (error) { /* file:// can block this */ }
  }

  function clearHash(id) {
    if (window.location.hash !== "#" + id) return;
    try {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    } catch (error) { /* file:// can block this */ }
  }

  triggers.forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      var isOpen = trigger.getAttribute("aria-expanded") === "true";
      var article = articleOf(trigger);

      if (isOpen) {
        setOpen(trigger, false);
        if (article) clearHash(article.id);
      } else {
        closeAll(trigger);
        setOpen(trigger, true);
        if (article) writeHash(article.id);
      }
    });
  });

  /* Status board links: open the case even if the hash is already set. */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    var id = link.getAttribute("href").slice(1);
    var target = document.getElementById(id);
    if (!target || !target.classList.contains("project")) return;

    link.addEventListener("click", function () {
      openById(id);
    });
  });

  window.addEventListener("hashchange", openFromHash);

  /* First project is open in the HTML; respect a deep link instead.
     On phones the list starts closed so all seven projects are visible. */
  if (window.location.hash) {
    openFromHash();
  } else if (window.matchMedia("(max-width: 720px)").matches) {
    closeAll();
  }

  /* Module galleries (SEP / SRE) */
  var galleries = Array.prototype.slice.call(document.querySelectorAll("[data-shots]"));

  galleries.forEach(function (gallery) {
    var tabs = Array.prototype.slice.call(gallery.querySelectorAll('[role="tab"]'));
    if (!tabs.length) return;

    var panels = tabs.map(function (tab) {
      return document.getElementById(tab.getAttribute("aria-controls"));
    });

    function activate(index, focus) {
      if (index < 0) index = 0;
      if (index >= tabs.length) index = tabs.length - 1;

      tabs.forEach(function (tab, i) {
        var selected = i === index;
        tab.setAttribute("aria-selected", selected ? "true" : "false");
        tab.classList.toggle("is-active", selected);
        tab.tabIndex = selected ? 0 : -1;
        if (panels[i]) panels[i].hidden = !selected;
      });

      if (focus && tabs[index]) tabs[index].focus();
    }

    tabs.forEach(function (tab, i) {
      tab.addEventListener("click", function () {
        activate(i, false);
      });

      tab.addEventListener("keydown", function (event) {
        var next = null;

        if (event.key === "ArrowRight" || event.key === "ArrowDown") {
          next = (i + 1) % tabs.length;
        } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
          next = (i - 1 + tabs.length) % tabs.length;
        } else if (event.key === "Home") {
          next = 0;
        } else if (event.key === "End") {
          next = tabs.length - 1;
        }

        if (next !== null) {
          event.preventDefault();
          activate(next, true);
        }
      });
    });

    var initial = tabs.findIndex(function (tab) {
      return tab.getAttribute("aria-selected") === "true";
    });

    activate(initial >= 0 ? initial : 0, false);
  });

  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
