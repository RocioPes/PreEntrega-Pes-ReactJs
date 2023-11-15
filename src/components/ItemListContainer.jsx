import Container from 'react-bootstrap/Container';

export const ItemListContainer  = props => {
    return (
<Container className='mt-4'><h3>{props.greeting}</h3></Container>
    )
}