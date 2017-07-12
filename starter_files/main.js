let container = document.querySelector('.container');
let h1 = `<h1>Internal Company Directory</h1>`;
document.body.innerHTML = h1;
for (let i = 0; i < customers.results.length; i++) {
  let person = customers.results[i];
  let info = `${person.location.street}<br />${person.location.city}, ${person.location.state} ${person.location.postcode}<br />${person.cell}`
  let email = person.email;
  let name = `${person.name.title} ${person.name.first} ${person.name.last}`;
  let imgSrc = person.picture.large;
  let ssn = person.id.value;
  container.innerHTML +=
  `<div class="sub-container">
    <img src="${imgSrc}">
    <span class="name">${name}</span>
    <p class="email">${email}</p>
    <p class="info">
      ${info}
    </p>
    <p class="ssn">
        ${ssn}
    </p>
  </div>`
}
document.body.appendChild(container)
