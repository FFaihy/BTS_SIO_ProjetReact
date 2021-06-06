import {Link} from 'react-router-dom'

const DetailBoisson = (props) => {
    return (
        <li>
            <Link to={`/boissons/${props.boisson.id}`}>
                <img src={`http://127.0.0.1:8000/image/${props.boisson.image}`} alt={props.boisson.titre} height="30" width="30" />
                {props.boisson.titre}
            </Link>
        </li>
    )
}

export default DetailBoisson