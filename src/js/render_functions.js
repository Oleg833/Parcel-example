const createMarkupRecipies = recipies => {
  recipies
    .map(
      ({
        id,
        name,
        description,
        image,
        price,
        ingredients,
      }) => ` <li class="recipes-list__item">
            <article class="card">
                <img src=" ${image} " alt="${description}">
                    <div>
                        <h2>${name}</h2>
                        <p> ${price} </p>
                        <p> ${description} </p>
                    </div>
                </img>
            </article>
        </li>`
    )
    .join('');
};
