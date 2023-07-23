window.onload = function() {
    createLandingPage("501 St. Clair Ave W", "TORONTO", "ON", "condo.png")
    setTimeout(function() {
        // remove existing HTML
        document.body.innerHTML = '';

        // add new HTML
        createGatedPage()
    }, 5000); // 4000 milliseconds = 4 seconds
}

function createLandingPage(streetAddress, city, postalCode, imageUrl) {
    let contentDiv = document.createElement("div");
    contentDiv.className = "content";
    contentDiv.style.backgroundImage = "url('" + imageUrl + "')";

    let h1 = document.createElement("h1");
    let h1Text = document.createTextNode(streetAddress);
    h1.appendChild(h1Text);

    let h2 = document.createElement("h2");
    let h2Text = document.createTextNode(city + ', ' + postalCode);
    h2.appendChild(h2Text);

    let loadingBarGroupDiv = document.createElement("div");
    loadingBarGroupDiv.className = "loading-bar-group";

    let p = document.createElement("p");
    let pText = document.createTextNode("LOADING VIRTUAL TOUR");
    p.appendChild(pText);

    let progressDiv = document.createElement("div");
    progressDiv.className = "progress";

    let progressValueDiv = document.createElement("div");
    progressValueDiv.className = "progress-value";

    progressDiv.appendChild(progressValueDiv);
    loadingBarGroupDiv.appendChild(p);
    loadingBarGroupDiv.appendChild(progressDiv);

    contentDiv.appendChild(h1);
    contentDiv.appendChild(h2);
    contentDiv.appendChild(loadingBarGroupDiv);

    document.body.appendChild(contentDiv);
}

function createGatedPage() {
    let blurryVideoDiv = document.createElement("div");
    blurryVideoDiv.className = "blurry-video";

    let video = document.createElement("video");
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.id = "myVideo";

    let source = document.createElement("source");
    source.src = "video.mp4";
    source.type = "video/mp4";

    video.appendChild(source);
    blurryVideoDiv.appendChild(video);

    let formDiv = document.createElement("div");
    formDiv.className = "form";

    let h1 = document.createElement("h1");
    let h1Text = document.createTextNode("Unlock Virtual Tour");
    h1.appendChild(h1Text);

    let form = document.createElement("form");
    form.action = "/action_page.php";

    let inputName = document.createElement("input");
    inputName.type = "text";
    inputName.placeholder = "Full Name";

    let inputTel = document.createElement("input");
    inputTel.type = "tel";
    inputTel.pattern = "[1-9]{1}[0-9]{9}";
    inputTel.placeholder = "Phone Number";

    let inputSubmit = document.createElement("input");
    inputSubmit.className = "button";
    inputSubmit.type = "submit";
    inputSubmit.value = "Get Access Now";

    let p = document.createElement("p");
    let pText = document.createTextNode('By clicking "Get Access Now" you agree to the ');
    let a = document.createElement("a");
    a.href = "https://www.notion.so/Personal-Use-Terms-of-Service-00e4e5d0f2b9411cbee6493f15779500";
    let aText = document.createTextNode("terms & conditions");
    a.appendChild(aText);
    p.appendChild(pText);
    p.appendChild(a);

    form.appendChild(inputName);
    form.appendChild(inputTel);
    form.appendChild(inputSubmit);
    form.appendChild(p);

    formDiv.appendChild(h1);
    formDiv.appendChild(form);

    document.body.appendChild(blurryVideoDiv);
    document.body.appendChild(formDiv);
}
