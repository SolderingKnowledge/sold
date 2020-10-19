import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Alert from '../components/Alert'
import { addToCart, removeFromCart } from '../actions/cartAction'

const Cart = ({ match, location, history }) => {
  const itemId = match.params.id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1

//   console.log("qty: ",qty);//2
//   console.log("location.search", location.search);//?qty=2

  const dispatch = useDispatch()

  useEffect(() => {
    //   console.log("itemId", itemId);
    if (itemId) {
      dispatch(addToCart(itemId, qty))
    }
  }, [dispatch, itemId, qty])

  const cartState = useSelector((state) => state.cartState)
  const { cartItems } = cartState

  const removeFromCartHandler = (id) => {
      console.log("id", id);
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping')
  }

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Alert>
            Your cart is empty <Link to='/'>Go Back</Link>
          </Alert>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.itemId}>
                <Row>
                  <Col md={2}>
                    <Image src={item.img} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/item/${item.itemId}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={2}>
                    <Form.Control
                      as='select'
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.itemId, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.inStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => removeFromCartHandler(item.itemId)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items
              </h2>
              $
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type='button'
                className='btn-block'
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}

export default Cart
