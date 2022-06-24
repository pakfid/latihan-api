fetch("data/Alquran.json").then(r => r.json()).then(r => {

  const data = `
  <table>
      <tr>
        <th>Nama</th>
        <th>Arti</th>
      </tr>
      ${r.map(item => `
        <tr>
          <td class="muncul">${item.name}</td>
          <td>${item.name_translations.id}</td>
        </tr> 
      `).join("")}
  </table>
  `
  document.querySelector(".isi").innerHTML = data

  const items = document.querySelectorAll(".muncul")

  const box = document.querySelector(".detail")
  
  const tutup = box.querySelector(".tutup")
  
  tutup.addEventListener("click", function(){
    box.classList.remove("detailMuncul")
  })

  items.forEach((itm, i) => {
    itm.addEventListener("click", function() {

      box.classList.add("detailMuncul")

      if (i == i) {
        const lengkap = `
          <h2 class="judul">${r[i].name_translations.ar}</h2>
          <li><b>Nama : </b>${r[i].name}</li>
          <li> <b>Arti : </b>${r[i].name_translations.id} </li>
          <li > <b>Ayat : </b>${r[i].number_of_ayah}</li> 
          <li > <b>Tipe : </b>${r[i].type}</li> 
          <li > <b>Surat : </b>${r[i].number_of_surah}</li>
         <audio controls src="${r[i].recitation}"></audio>
          `
        box.querySelector("ul").innerHTML = lengkap
      }
    })
  })
})
