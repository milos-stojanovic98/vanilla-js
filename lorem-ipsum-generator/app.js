const text = [
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolor laudantium ad quam alias quo explicabo nostrum assumenda, cum amet in? Minima excepturi quae expedita nam quod quas officia voluptate!`,
    `Quod minima perferendis pariatur autem, perspiciatis tenetur reprehenderit libero dignissimos mollitia et, aliquam a totam dolorum. Voluptatibus minus nobis quae exercitationem nemo, sint, rem expedita praesentium accusantium vel beatae debitis aperiam eaque aut veniam? Odio impedit facilis sequi repellat laudantium nihil eius tenetur libero qui?`,
    `Mollitia quos quidem nesciunt obcaecati perspiciatis! Facere, beatae. Dolorem sint est reprehenderit! Voluptas incidunt sed beatae suscipit doloremque, vitae inventore ratione magni, nostrum corporis tempora dolorum maxime velit totam sit recusandae laudantium!`,
    `audantium quidem, repellat nostrum totam sint quo quasi atque doloribus nulla voluptatibus facere nesciunt corporis fugiat odit omnis tempore quibusdam ad? Expedita accusantium quia harum. Saepe quasi fugiat animi! Quidem reprehenderit deserunt libero numquam maiores in quia voluptatem neque mollitia, repellendus consequuntur incidunt impedit illum, dolorum possimus labore expedita porro enim molestiae minima? Illum aliquam voluptatem excepturi aut quibusdam, inventore enim tempore neque possimus ipsam ducimus consequatur reprehenderit, voluptas `,
    `Illum aliquam voluptatem excepturi aut quibusdam, inventore enim tempore neque possimus ipsam ducimus consequatur reprehenderit, voluptas blanditiis quos repellendus, hic laborum dolorum architecto. Ea consequatur facere asperiores quibusdam saepe nesciunt incidunt molestias tempora eius magnam, suscipit harum ducimus voluptatibus possimus at assumenda blanditiis, maxime rerum. Minima ducimus, consequatur ut itaque eaque at expedita vero totam quam quas obcaecati dolores impedit dignissimos. Neque earum, eius iusto recusandae quidem officiis laborum quos quasi ad labore! Distinctio perferendis, impedit eum consequatur quaerat recusandae voluptate repellendus eaque quidem enim?`,
    `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
    `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
    `AAA has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
]

const form = document.querySelector(".lorem-form");
const result = document.querySelector(".lorem-text");
const amount = document.getElementById("amount");


form.addEventListener("submit", function(e){
    e.preventDefault(); //required

    //Parsing the input to number type
    const value = parseInt(amount.value);
    const random = Math.floor(Math.random() * text.length);
    
    //If one of 3 conditions is true, user gets a random paragraph
    if( isNaN(value) || value <= 0 || value > 9 ){
        result.innerHTML = `<p> ${text[random]} </p>`;
    }else{
        //Slicing array to get amount of paragraphs wanted by user's input
        let tempText = text.slice(0, value);
        tempText = tempText
        .map(function (item){
            return `<p>${item}</p>`;
        })
        .join("");
        //Displaying paragraphs
        result.innerHTML = tempText;
    }
})

// solution for displaying desired parapgraph by normal position(not index position)
// result.innerHTML = `<p> ${text[value-1]} </p>`;
