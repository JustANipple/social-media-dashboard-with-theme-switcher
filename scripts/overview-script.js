const overviewCards = [
    {
        type: "Page Views",
        social: "images/icon-facebook.svg",
        todayNum: 87,
        percentage: 3,
        status: "increased"
    },
    {
        type: "Likes",
        social: "images/icon-facebook.svg",
        todayNum: 52,
        percentage: 2,
        status: "decreased"
    },
    {
        type: "Likes",
        social: "images/icon-instagram.svg",
        todayNum: 5462,
        percentage: 2257,
        status: "increased"
    },
    {
        type: "Profile Views",
        social: "images/icon-instagram.svg",
        todayNum: "52k",
        percentage: 1375,
        status: "increased"
    },
    {
        type: "Retweets",
        social: "images/icon-twitter.svg",
        todayNum: 117,
        percentage: 303,
        status: "increased"
    },
    {
        type: "Likes",
        social: "images/icon-twitter.svg",
        todayNum: 507,
        percentage: 553,
        status: "increased"
    },
    {
        type: "Likes",
        social: "images/icon-youtube.svg",
        todayNum: 107,
        percentage: 19,
        status: "decreased"
    },
    {
        type: "Total Views",
        social: "images/icon-youtube.svg",
        todayNum: 1407,
        percentage: 12,
        status: "decreased"
    }
];

for(const card of overviewCards) {
    let div = document.createElement("div");
    div.classList.add("card");

    let url;
    if(card.status === "increased") {
        url = "images/icon-up.svg";
    } else if(card.status === "decreased") {
        url = "images/icon-down.svg";
    }

    const inner = 
    `
    <div class="top_wrapper">
        <p class="category">${card.type}</p>
        <img src=${card.social} alt="social icon" class="social_icon">
    </div>
    <div class="bottom_wrapper">
        <p class="total_number">${card.todayNum}</p>
        <div class="percentage">
            <img src=${url} alt="" aria-hidden="true">
            <p class="difference ${card.status}"> <span class="number">${card.percentage}</span>% </p>
        </div>
    </div>
    `;

    div.innerHTML = inner;
    document.querySelector(".overview").appendChild(div);
}