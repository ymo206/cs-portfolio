
"use strict";

/*
  Yusuf Mohamoud - Computer Science Portfolio
  JavaScript functionality
*/

// ==========================================
// MOBILE NAVIGATION
// ==========================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );
  });

  // Close mobile menu after clicking a link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");

      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });

  // Close mobile menu when pressing Escape
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      navLinks.classList.remove("open");

      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    }
  });

  // Reset the mobile menu when switching to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      navLinks.classList.remove("open");

      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    }
  });
}

// ==========================================
// AUTOMATIC COPYRIGHT YEAR
// ==========================================

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// ==========================================
// RESUME PDF AVAILABILITY
// ==========================================

const resumeLink = document.getElementById("resume-link");
const resumeStatus = document.getElementById("resume-status");

if (resumeLink && resumeStatus) {
  fetch("resume.pdf", {
    method: "HEAD",
    cache: "no-store"
  })
    .then((response) => {
      const contentType =
        response.headers.get("content-type") || "";

      if (response.ok && contentType.includes("pdf")) {
        resumeLink.hidden = false;

        resumeStatus.textContent =
          "My resume is available to view or download.";
      } else {
        resumeLink.hidden = true;

        resumeStatus.textContent =
          "Resume PDF will be available here once it is added to this repository.";
      }
    })
    .catch(() => {
      resumeLink.hidden = true;

      resumeStatus.textContent =
        "Resume PDF will be available here once it is added to this repository.";
    });
}
