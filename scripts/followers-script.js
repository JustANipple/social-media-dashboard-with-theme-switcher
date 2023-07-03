const followerCards = [
    {
        social: "images/icon-facebook.svg",
        user: "@nathanf",
        totalNum: 1987,
        type: "followers",
        todayNum: 12,
        status: "increased"
    },
    {
        social: "images/icon-twitter.svg",
        user: "@nathanf",
        totalNum: 1044,
        type: "followers",
        todayNum: 99,
        status: "increased"
    },
    {
        social: "images/icon-instagram.svg",
        user: "@realnathanf",
        totalNum: "11k",
        type: "followers",
        todayNum: 1099,
        status: "increased"
    },
    {
        social: "images/icon-youtube.svg",
        user: "Nathan F.",
        totalNum: "8239",
        type: "subscribers",
        todayNum: 144,
        status: "decreased" 
    }
];

for(const card of followerCards) {
    let div = document.createElement("div");
    div.classList.add("card");

    if(card.social.includes("facebook")) {
        div.classList.add("facebook");
    } else if (card.social.includes("twitter")) {
        div.classList.add("twitter");
    } else if (card.social.includes("instagram")) {
        div.classList.add("instagram");
    } else if (card.social.includes("youtube")) {
        div.classList.add("youtube");
    }

    let url;
    if(card.status === "increased") {
        url = "images/icon-up.svg";
    } else if(card.status === "decreased") {
        url = "images/icon-down.svg";
    }

    const inner = 
    `
    <div class="top_wrapper">
        <img 
        src=${card.social}
        alt="social icon"
        class="social_icon">
        <p class="nickname">${card.user}</p>
    </div>
    <div class="mid_wrapper">
        <p class="total_number">${card.totalNum}</p>
        <p class="par">${card.type}</p>
    </div>
    <div class="bottom_wrapper">
        <img 
        src=${url}
        alt=""
        aria-hidden="true">
        <p class="difference ${card.status}"> <span class="number">${card.todayNum}</span> Today</p>
    </div>
    `;

    div.innerHTML = inner;
    document.querySelector(".followers").appendChild(div);
}