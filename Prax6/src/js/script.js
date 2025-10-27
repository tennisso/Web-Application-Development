window.onload = function() {



    fetch("../../res/json/data.json")
        .then((response) => response.json())
        .then(json => {
            for (let i = 0; i < json.length; i++) {
                let div = document.createElement("div");
                div.className = 'post';

                // Title
                let postTitle = document.createElement("h3");
                postTitle.innerText = json[i].title;
                div.appendChild(postTitle);

                // Body
                let postBody = document.createElement("p");
                postBody.innerText = json[i].body;
                div.appendChild(postBody);

                // Likes with SVG
                let likesContainer = this.document.createElement("p");

                // SVG icon 
                let likeSVG = document.createElement("../../res/img/like-svgrepo-com.svg");
                likeSVG.setAttribute("width", "16");
                likeSVG.setAttribute("height", "16");
                likeSVG.setAttribute("viewBox", "0 0 24 24");
                likeSVG.setAttribute("fill", "red");

                // Text node for likes number
                let likesText = this.document.createTextNode(" " + json[i].likes);

                likesContainer.appendChild(likeSVG);
                likesContainer.appendChild(likesText);
            
                div.appendChild(likesContainer);
                document.body.appendChild(div);
            }
        })
        .catch(err => {
        let errDiv = document.createElement("div");
        errDiv.className = 'post';
        errDiv.innerText = err;
        document.body.appendChild(errDiv);
        })
        .finally(() => {
        let footer = document.createElement("footer");
        date = new Date().toLocaleString()
        footer.innerText = date;
        document.body.appendChild(footer);
        })
}