let initialCards = [
    {
        name:"Mountain",
        link:"https://ipt.imgix.net/201494/x/0/ultimate-guide-to-landscape-photography-1?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-2.3.0&w=883"
    },
    {
        name:"Mountain2",
        link:"https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        name:"Mountain3",
        link:"https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg"
    },
    {
        name:"Mountain4",
        link:"https://unsplash.com/photos/twukN12EN7c/download"
    },
    {
        name:"Mountain5",
        link:"https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        name:"Mountain6",
        link:"https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    }
];
let profileName = document.querySelector(".card-title");
let profileBio = document.querySelector(".card-text");
let profilePic = document.querySelector(".card-img")
let usernameInput = document.querySelector(".usernameInput")
let bioInput = document.querySelector(".bioInput")
let profileInput = document.querySelector(".profileInput")
let profileSaveButton = document.querySelector(".profileSaveButton")
let column = document.querySelector(".column")
let imgForm = document.querySelector(".imgForm")
let imgCaption = document.querySelector(".imgCaption")
let imgLink = document.querySelector(".imgLink")
let imgModalButton = document.querySelector(".imgModalButton")
let overlay = document.querySelector(".imgModalOverlay")
let imgButton = document.querySelector(".imgButton")
let popupOverlay = document.querySelector(".popupOverlay")
let popupImg = document.querySelector(".popupImg")
let profileContainer = document.querySelector(".profileContainer")
let profileModal = document.querySelector(".profileModal")

profileName.innerHTML = "Andrew Burns"
const getProfile = () => {
    fetch("http://localhost:3000/profile")
    .then((res) => res.json())
    .then((res) => res.forEach(el => {
        console.log(res)
        profileName.textContent = `${el.name}`
        profileBio.textContent = `${el.description}`
        profilePic.setAttribute("src", `${el.profilepicture}`)
    }))
    .catch((error) => console.log(error))
}
getProfile()

let editProfile = (evt) => {

    let profile = {
        name: usernameInput.value,
        description: bioInput.value,
        profilepicture: profileInput.value
    }
    fetch("http://localhost:3000/profile", {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json',
            'Access-Control-Allow-Origin' : '*'
        },
        body: JSON.stringify(profile)
    })
    .catch((error) => console.log(error))
}

const imgLoader = (arr) => {
    column.textContent = ""
    
    fetch("http://localhost:3000/images")
    .then((res) => res.json())
    .then((res) => res.forEach(el => {
        let deleteButton = document.createElement("button")
        let imgCard = document.createElement("div")
        imgCard.classList.add("imgCard")
        column.prepend(imgCard)
        let figure = document.createElement("figure")
        imgCard.appendChild(figure)
        let img = document.createElement("img")
        figure.appendChild(img)
        let figcaption = document.createElement("figcaption")
        figure.appendChild(figcaption)
        figure.prepend(deleteButton)
        
        figcaption.textContent = `${el.title}`
        img.setAttribute("src", `${el.image}`)
       
        deleteButton.addEventListener("click", (evt) => {
            if (id = `${el.id}`) {
                deleteImage(evt)
            }
        })

        img.addEventListener("click", () => {
            popupImg.setAttribute("src", `${el.image}`)
            popupOverlay.classList.toggle("display")    
        })

    }))
}
const addImage = (evt) => {
    let post = {
        title: imgCaption.value,
        image: imgLink.value
    }
    console.log(post)

    fetch("http://localhost:3000/images", {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'Access-Control-Allow-Origin' : '*'
        },
        body: JSON.stringify(post)
    })
    .catch((error) => console.log(error))
    imgLoader()
}

const deleteImage = (evt) => {
    fetch(`http://localhost:3000/images/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type' : 'application/json',
            'Access-Control-Allow-Origin' : '*'
        }
    })
    .catch((error) => console.log(error))
    imgLoader()
} 
imgLoader();
profileSaveButton.addEventListener("click", (evt) => {
    editProfile(evt)
    profileModal.style.display = "none"
} )
imgModalButton.addEventListener("click", (evt) => {
    overlay.classList.add("display")
    addImage(evt)
})
imgButton.addEventListener("click", () => {
    overlay.classList.remove("display")
})
popupImg.addEventListener("click", () =>{
    popupOverlay.classList.toggle("display")
})

//https://ipt.imgix.net/201494/x/0/ultimate-guide-to-landscape-photography-1?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-2.3.0&w=883
//https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500
//https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg
//https://unsplash.com/photos/twukN12EN7c/download
//https://teams.microsoft.com/l/message/19:ffb47340b9284471b038c3df20301336@thread.tacv2/1594838992527?tenantId=15951461-7480-4271-b690-fce3f88137ab&groupId=cf2f1c2f-292a-45fd-8fb3-bb707c64ae78&parentMessageId=1592587787631&teamName=After%20School%20Coding&channelName=General&createdTime=1594838992527
//https://teams.microsoft.com/l/message/19:ffb47340b9284471b038c3df20301336@thread.tacv2/1594839008540?tenantId=15951461-7480-4271-b690-fce3f88137ab&groupId=cf2f1c2f-292a-45fd-8fb3-bb707c64ae78&parentMessageId=1592587787631&teamName=After%20School%20Coding&channelName=General&createdTime=1594839008540