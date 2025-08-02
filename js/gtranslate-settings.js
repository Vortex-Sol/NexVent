document.addEventListener("DOMContentLoaded", function () {
  window.gtranslateSettings = {
    default_language: "en",
    languages: ["en", "pl"],
    wrapper_selector: ".gtranslate_wrapper"
  };

  const script = document.createElement("script");
  script.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
  script.defer = true;
  document.body.appendChild(script);
});
