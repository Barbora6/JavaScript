const testimonials = [
  {
    name: "Cherise G",
    photoUrl:
      "https://media.istockphoto.com/id/1564842629/cs/fotografie/portr%C3%A9t-atraktivn%C3%ADho-usm%C4%9Bvav%C3%A9ho-mlad%C3%A9ho-mu%C5%BEe-p%C5%99i-pohledu-na-kameru-v-parku-kavkazsk%C3%BD.jpg?s=612x612&w=0&k=20&c=gpcaIABxolY18f4lg1yNrcHz9Hv_xIHWHH5jsQ9xTTw=",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur quos amet suscipit dignissimos corrupti quibusdam ab qui fuga, nulla  delectus."
  },
  {
    name: "Melisa S",
    photoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTl7Sp1CfQgcUh5oz3aeqTYe9_MI_RwgiXBpfVwRHOWqN0cXnSEbrT6wtx6HrM7TtNCJU&usqp=CAU",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur quos amet suscipit dignissimos corrupti quibusdam ab qui fuga, nulla  delectus."
  },
  {
    name: "Tereza K",
    photoUrl:
      "https://1951880946.rsc.cdn77.org/resize?height=300&type=auto&url=https://reservio-static-production.s3.eu-central-1.amazonaws.com/businesses/37b5a89b-897d-4ca3-b13b-19ff26050da1.png",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur quos amet suscipit dignissimos corrupti quibusdam ab qui fuga, nulla  delectus."
  }
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[idx];
  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;
  idx++;
  if (idx === testimonials.length) {
    idx = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 5000);
}
