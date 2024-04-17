import React, { useState } from 'react'
import { Button,Modal,Form,Row ,Col  } from 'react-bootstrap'
import './modal.css'
const AddCategoryModal = (props) => {
    const {show ,handalModal,heading}=props
    const [catName,setCatName]=useState('')
    const [catImage,setCatImage]=useState('')
    const handalFormSubmit =()=>{
        console.log(catImage,"catImage",catName)

    }
    const setCategoryImage=(e)=>{
        console.log(e.target.value,"e.target")
    }
    
  return (
    <>
      <Modal show={show} onHide={handalModal} 
      size="lg" >
        <Modal.Header closeButton>
          <Modal.Title>{heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body  style={{textAlign:"left" }} className="p-4 h-0">
          <Form>
            <Form.Group className="mb-3 " as={Row} controlId="exampleForm.ControlInput1" >
              <Form.Label column sm="3">Add Category:</Form.Label>
              <Col sm="9">
              <Form.Control
                type="text"
                value={catName || ''}
                onChange={(e)=>{setCatName(e.target.value)}}
                placeholder="Enter Category Name"
                autoFocus
                className='p-1 '
              />
              </Col>
            </Form.Group>
            <Form.Group className="mb-3 p-0 " as={Row} controlId="formFile" >
              <Form.Label column sm="3">Add Category Image:</Form.Label>
              <Col sm="9">
              <Form.Control type="file" 
               className='p-2 '
               size="lg"
             
               onChange={(e)=>setCategoryImage(e)}
              />
              </Col>
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handalModal}>
            Close
          </Button>
          <Button variant="primary" onClick={(e)=>handalFormSubmit}>
            Add Category
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddCategoryModal
