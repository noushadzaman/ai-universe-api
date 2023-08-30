const loadData = () => {
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((res) => res.json())
    .then((data) => showData(data.data.tools));
};

loadData();

const showData = (data) => {
  const cardContainer = document.getElementById("card-container");
  data = data.slice(0, 6);
  data.forEach((datum) => {
    const card = document.createElement("div");
    card.innerHTML = `
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src="${datum.image}" alt="Shoes" /></figure>
        <div class="card-body">
        <h2 class="card-title">Features</h2>
        <p>1. ${datum.features[0]}</p>
        <p>2. ${datum.features[1]}</p>
        <p>3 .${datum.features[2]}</p>
        <hr>
        <h2 class="card-title">${datum.name}</h2> 
        <p>${datum.published_in}</p> 
        <div class="card-actions justify-end">
        <button onclick="handleShowDetails('${datum.id}')" class="btn btn-primary">View Details</button>
        </div>
        </div>
        </div>
        `;
    cardContainer.appendChild(card);
  });
};

const handleShowDetails = (id) => {
  console.log(id);
  fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
    .then((res) => res.json())
    .then((data) => showDetails(data.data));
};
const showDetails = (data) => {
  console.log(data);
  const modalDiv = document.getElementById("modal-div");
  modalDiv.innerHTML = `
    <div class="bg-violet-200 rounded-2xl p-8">
    <div>
    <h2 class="font-bold mb-2">${
      data?.description || "Description Not Available"
    }</h2>
    <div class="flex gap-2 mb-2">
    <div class="bg-rose-200 rounded-2xl p-5 text-rose-900"><h3>$10/month Basic</h3></div>
    <div class="bg-rose-200 rounded-2xl p-5 text-green-900"><h3>$50/month Pro</h3></div>
    <div class="bg-rose-200 rounded-2xl p-5 text-sky-900"><h3>Contact us Enterprise</h3></div>
    </div>
    </div>
    
    <div class="flex justify-between">
    
    <div>
    <h2 class="font-bold text-2xl">Features</h2>
    <ul>
    <li>${data.features[1].feature_name}</li>
    <li>${data.features[2].feature_name}</li>
    <li>${data.features[3].feature_name}</li>
    </ul>
    </div>
    
    <div>
    <h2 class="font-bold text-2xl">Integrations</h2>
    <ul>
    <li>${data.integrations[1]}</li>
    <li>${data.integrations[2]}</li>
    <li>${data.integrations[3]}</li>
    </ul>
    </div>
    </div>
    
    </div>
    `;
  my_modal_2.showModal();
};
const viewMore = () => {
  const loadData = () => {
    fetch("https://openapi.programming-hero.com/api/ai/tools")
      .then((res) => res.json())
      .then((data) => showData(data.data.tools));
  };
  loadData();
  const showData = (data) => {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = '';
    data.forEach((datum) => {
      const card = document.createElement("div");
      card.innerHTML = `
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src="${datum.image}" alt="Shoes" /></figure>
        <div class="card-body">
        <h2 class="card-title">Features</h2>
        <p>1. ${datum.features[0]}</p>
        <p>2. ${datum.features[1]}</p>
        <p>3 .${datum.features[2]}</p>
        <hr>
        <h2 class="card-title">${datum.name}</h2> 
        <p>${datum.published_in}</p> 
        <div class="card-actions justify-end">
        <button onclick="handleShowDetails('${datum.id}')" class="btn btn-primary">View Details</button>
        </div>
        </div>
        </div>
        `;
      cardContainer.appendChild(card);
      document.getElementById('view-more-btn').classList = `hidden`;
    });
  };
};
