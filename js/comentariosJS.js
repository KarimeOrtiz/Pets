/**
 * Creates a new carousel element - © Diana Karime 2021 - GPL-2
 *
 * @param {string} pclass  - The parent div class, usually "carousel__elemento".
 * @param {string} qclass  - The arriba div class, usually "arriba".
 * @param {string} sid     - The img class, usually "img_student".
 * @param {string} sid_im  - The img src.
 * @param {string} alt_im  - The img alt.
 * @param {string} w_im    - The img width.
 * @param {string} h_im    - The img heigh.
 * @param {string} aclass  - The abajo div class, usually "abajo".
 * @param {string} atext1  - The student name in a paragraph.
 * @param {string} atext2  - The career student text in a paragraph.
 * @param {string} atext3  - The experience student text in a paragraph.
 *
 * */

 function create_collapse(pclass, qclass, sid, sid_im, alt_im, w_im, h_im, aclass, atext1, atext2, atext3) {
    // Árbol principal para insertar en documento.
    let tree = document.createDocumentFragment();

    // Variable para crear el div de classe "carousel_elemento"
    let carousel__elemento = document.createElement("div");
    carousel__elemento.setAttribute("class", pclass);

    // div class="arriba" adentro de carousel__elemento
    let arriba = document.createElement("div");
    arriba.setAttribute("class", qclass);

    // img adentro de arriba
    let himg = document.createElement("img");
    himg.setAttribute("src", sid_im);
    himg.setAttribute("class", sid);
    himg.setAttribute("alt", alt_im);
    himg.setAttribute("width", w_im);
    himg.setAttribute("height", h_im);

    // div id="qid" adentro de div class="arriba"
    let qdiv = document.createElement("div");
    qdiv.setAttribute("id", "qid");

    // p adentro de qid
    let t1 = document.createElement("p");
    t1.style.fontWeight = "bold";
    t1.setAttribute("class","namee");
    t1.appendChild(document.createTextNode(atext1));

    // p adentro de qid
    let t2 = document.createElement("p");
    t2.setAttribute("class","career");
    t2.appendChild(document.createTextNode(atext2));

    // Variable para crear el div de classe "abajo"
    let abajo = document.createElement("div");
    abajo.setAttribute("class", aclass);

    // p adentro de abajo
    let t3 = document.createElement("p");
    t3.appendChild(document.createTextNode(atext3));

    // Elementos dentro del div vacio
    qdiv.appendChild(t1);
    qdiv.appendChild(t2);

    // Elementos dentro del div class="arriba"
    arriba.appendChild(himg);
    arriba.appendChild(qdiv);

    // P adentro del div class="abajo"
    abajo.appendChild(t3);

    // Meter div class="arriba" y div class="abajo" en carousel__elemento
    carousel__elemento.appendChild(arriba);
    carousel__elemento.appendChild(abajo);

    // Meter item_faq en el tree
    tree.appendChild(carousel__elemento);

    // Meter el tree en el DOM de HTML
    document.getElementById("carrusel").appendChild(tree);
  }

    create_collapse("carousel__elemento", "arriba", "img_student", "", "Foto de estudiante", "", "", "abajo", "", "Excellent ⭐", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae placeat, officiis, quo necessitatibus quam, laboriosam ut mollitia a sunt iure nam aut maiores cum rerum dolor repellendus ex. Cupiditate, libero!");
    create_collapse("carousel__elemento", "arriba", "img_student", "", "Foto de estudiante", "", "", "abajo", "", "Efficient 🌿", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae placeat, officiis, quo necessitatibus quam, laboriosam ut mollitia a sunt iure nam aut maiores cum rerum dolor repellendus ex. Cupiditate, libero!");
    create_collapse("carousel__elemento", "arriba", "img_student", "", "Foto de estudiante", "", "", "abajo", "", "Excellent ⭐", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae placeat, officiis, quo necessitatibus quam, laboriosam ut mollitia a sunt iure nam aut maiores cum rerum dolor repellendus ex. Cupiditate, libero!");
    create_collapse("carousel__elemento", "arriba", "img_student", "", "Foto de estudiante", "", "", "abajo", "", "Efficient 🌿", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae placeat, officiis, quo necessitatibus quam, laboriosam ut mollitia a sunt iure nam aut maiores cum rerum dolor repellendus ex. Cupiditate, libero!");
    create_collapse("carousel__elemento", "arriba", "img_student", "", "Foto de estudiante", "", "", "abajo", "", "Efficient 🌿", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae placeat, officiis, quo necessitatibus quam, laboriosam ut mollitia a sunt iure nam aut maiores cum rerum dolor repellendus ex. Cupiditate, libero!"); 

    let carga = document.getElementById('load');

    window.onload = () => {
      carga.style.visibility = "hidden"; //De esta manera estan ocultos mientras cargan
      randomUserGenerator();
    }

    const randomUserGenerator = () => {
      fetch('https://randomuser.me/api/?results=5')
      .then((response) => {
        return response.json()
      }).then((data) => {
        carga.style.visibility = "visible"; //Ya cargados
        showRandomUserData(data);
      })
    }


    showRandomUserData = (randomUser) => {
      let users = document.getElementsByClassName('namee');
      let pictures = document.getElementsByClassName('img_student');
      for(var i = 0; i < users.length; i++) {
        users[i].innerText = `${randomUser.results[i].name.first} ${randomUser.results[i].name.last}`;
        pictures[i].setAttribute('src',`${randomUser.results[i].picture.medium}`);
      }
    }

    

    