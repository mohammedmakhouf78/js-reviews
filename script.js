const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

let navRight = document.querySelector('.fa-chevron-right')



navRight.addEventListener('click',(e) => {
    e.preventDefault()

    let con = document.querySelector('.con')
    let name = document.querySelector('.name')
    let job = document.querySelector('.job')
    let img = document.querySelector('img')
    let desc = document.querySelector('.desc')

    if(con.id == 1)
    {
        con.id = 2
        img.src = reviews[1].img
        name.textContent = reviews[1].name
        job.textContent = reviews[1].job
        desc.textContent = reviews[1].text
    }
    else if(con.id == 2)
    {
        con.id = 3
        img.src = reviews[2].img
        name.textContent = reviews[2].name
        job.textContent = reviews[2].job
        desc.textContent = reviews[2].text
    }
    else if(con.id == 3)
    {
        con.id = 4
        img.src = reviews[3].img
        name.textContent = reviews[3].name
        job.textContent = reviews[3].job
        desc.textContent = reviews[3].text
    }
    else if(con.id == 4)
    {
        con.id = 1
        img.src = reviews[0].img
        name.textContent = reviews[0].name
        job.textContent = reviews[0].job
        desc.textContent = reviews[0].text
    }
    
})



let navLeft = document.querySelector('.fa-chevron-left')



navLeft.addEventListener('click',(e) => {
    e.preventDefault()

    let con = document.querySelector('.con')
    let name = document.querySelector('.name')
    let job = document.querySelector('.job')
    let img = document.querySelector('img')
    let desc = document.querySelector('.desc')

    if(con.id == 1)
    {
        con.id = 4
        img.src = reviews[3].img
        name.textContent = reviews[3].name
        job.textContent = reviews[3].job
        desc.textContent = reviews[3].text
    }
    else if(con.id == 2)
    {
        con.id = 1
        img.src = reviews[0].img
        name.textContent = reviews[0].name
        job.textContent = reviews[0].job
        desc.textContent = reviews[0].text
    }
    else if(con.id == 3)
    {
        con.id = 2
        img.src = reviews[1].img
        name.textContent = reviews[1].name
        job.textContent = reviews[1].job
        desc.textContent = reviews[1].text
    }
    else if(con.id == 4)
    {
        con.id = 3
        img.src = reviews[2].img
        name.textContent = reviews[2].name
        job.textContent = reviews[2].job
        desc.textContent = reviews[2].text
    }
    
})


let btn = document.querySelector('button')

btn.addEventListener('click',(e) => {
    let random = Math.floor(Math.random()*4)+1
    let con = document.querySelector('.con')
    let name = document.querySelector('.name')
    let job = document.querySelector('.job')
    let img = document.querySelector('img')
    let desc = document.querySelector('.desc')

    if(random == 1)
    {
        con.id = 4
        img.src = reviews[3].img
        name.textContent = reviews[3].name
        job.textContent = reviews[3].job
        desc.textContent = reviews[3].text
    }
    else if(random == 2)
    {
        con.id = 1
        img.src = reviews[0].img
        name.textContent = reviews[0].name
        job.textContent = reviews[0].job
        desc.textContent = reviews[0].text
    }
    else if(random == 3)
    {
        con.id = 2
        img.src = reviews[1].img
        name.textContent = reviews[1].name
        job.textContent = reviews[1].job
        desc.textContent = reviews[1].text
    }
    else if(random == 4)
    {
        con.id = 3
        img.src = reviews[2].img
        name.textContent = reviews[2].name
        job.textContent = reviews[2].job
        desc.textContent = reviews[2].text
    }


})