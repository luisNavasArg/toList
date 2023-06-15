import ListGroup from 'react-bootstrap/ListGroup'
export const Item=({item})=><ListGroup.Item>{item.id} {item.msg}</ListGroup.Item>