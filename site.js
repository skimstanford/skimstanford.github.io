async function loadShared() {
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");

    if (header) {
        const response = await fetch("/header.html");
        header.innerHTML = await response.text();

        const isGerman = window.location.pathname.startsWith("/de/");
        document.getElementById("nav-en").style.display = isGerman ? "none" : "block";
        document.getElementById("nav-de").style.display = isGerman ? "block" : "none";

        const path = window.location.pathname;
        const filename = path.split("/").filter(Boolean).pop() || "index.html";

        if (isGerman) {
            const page = filename === "index.html" ? "index.html" : filename;
            document.getElementById("lang-en").href =
                page === "index.html" ? "/" : "/en/" + page;
            document.getElementById("lang-de").href = path;
        } else {
            const page = (path.startsWith("/en/") && filename !== "index.html") ? filename : "index.html";
            document.getElementById("lang-en").href =
                path.startsWith("/en/") ? path : "/";
            document.getElementById("lang-de").href =
                page === "index.html" ? "/de/index.html" : "/de/" + page;
        }
    }

    if (footer) {
        const response = await fetch("/footer.html");
        footer.innerHTML = await response.text();
    }
}

loadShared();
