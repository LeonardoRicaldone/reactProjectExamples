import "./card.css";

const Card = ({ titulo, descripcion, videojuegos, deporte, comida}) => {
  
  return (
    <div class="card">
      <div className="contenedorImagen">
        <img
          src="https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w960/f_auto/primary/deuhfjnknblurdxdhgsn"
          class="card-img-top"
          alt="..."
          className="imagen"
        />
      </div>
      <div class="card-body">
        <h5 class="card-title">{titulo}</h5>
        <p class="card-text">{descripcion}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{videojuegos}</li>
        <li class="list-group-item">{deporte}</li>
        <li class="list-group-item">{comida}</li>
      </ul>
    </div>
  );
};

export default Card;
