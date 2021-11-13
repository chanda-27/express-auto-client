import { Button, Modal, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const OrderCard = ({ order, setServerResponse }) => {
  const [open, setOpen] = useState(false);
  const [approveOpen, setApproveOpen] = useState(false);
  const { _id, date, carName, carPrice, status, ownerName, ownerEmail } = order;

  // useHistory
  const history = useHistory();

  const [month, day, year] = [new Date(date).getMonth() + 1, new Date(date).getDate(), new Date(date).getFullYear()];
  console.log(order);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleApproveModalOpen = () => setApproveOpen(true);
  const handleApproveModalClose = () => setApproveOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #ffda39',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
  };

  const handleCancel = (id) => {
    console.log(id);
    fetch(`https://intense-spire-47939.herokuapp.com/deleteOrder/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(result => {
        alert("Deleted successfully!");
        history.push("/dashboard/manageAllOrders");
        setServerResponse({deleted: result});
      })
  }
  const handleApprove = (id) => {
    console.log(id);
    const data = { status: 'shipped' }

    fetch('https://intense-spire-47939.herokuapp.com/updateOrder/'+id, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        alert("Car shipped successfully!");
        history.push("/dashboard/manageAllOrders");
        setServerResponse({shipped: data});
      });
  }
  return (
    <Box sx={{p: 3, mb: 3, bgcolor: 'purple', color: 'white', fontSize: '18px', borderRadius: '0 20px'}} key={_id}>
      <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Box sx={{p: 0, fontWeight: 700}}>Car Name:</Box>
        <Box sx={{p: 1}}>{carName}</Box>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Box sx={{p: 0, fontWeight: 700}}>Car Price:</Box>
        <Box sx={{p: 1, color: '#ffda39'}}>${carPrice}</Box>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Box sx={{p: 0, fontWeight: 700}}>Owner Name:</Box>
        <Box sx={{p: 1, color: '#ffda39'}}>{ownerName}</Box>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Box sx={{p: 0, fontWeight: 700}}>Owner Email:</Box>
        <Box sx={{p: 1, color: '#ffda39'}}>{ownerEmail}</Box>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Box sx={{p: 0, fontWeight: 700}}>Order Date:</Box>
        <Box sx={{p: 1}}>{`${day}/${month}/${year}`}</Box>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Box sx={{p: 0, fontWeight: 700}}>Status:</Box>
        <Box sx={{p: 1}}>{status}</Box>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Box sx={{p: 1}}>
          {
            status === 'pending' &&
            <Button variant="contained" color="success" onClick={handleApproveModalOpen} sx={{mr: 2}}>Ship This Order!</Button>
          }
          <Button variant="contained" onClick={handleOpen}>Delete This Order</Button>
          <Modal
            open={approveOpen}
            onClose={handleApproveModalClose}
            aria-labelledby="approve-modal-modal-title"
            aria-describedby="approve-modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="approve-modal-modal-title" variant="h6" component="h2">
                Are you sure!
              </Typography>
              <Typography id="approve-modal-modal-description" sx={{ my: 2 }}>
                You're going to ship this order!
              </Typography>
              <Box textAlign="center">
                <Button onClick={handleApproveModalClose}>No</Button>
                <Button color="success" onClick={() => { handleApprove(_id); handleApproveModalClose(); }}>Yes</Button>
              </Box>
            </Box>
          </Modal>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Are you sure!
              </Typography>
              <Typography id="modal-modal-description" sx={{ my: 2 }}>
                You're going to delete this order!
              </Typography>
              <Box textAlign="center">
                <Button onClick={handleClose}>No</Button>
                <Button color="warning" onClick={() => { handleCancel(_id); handleClose(); }}>Yes</Button>
              </Box>
            </Box>
          </Modal>
        </Box>
      </Box>
    </Box>
  );
};

export default OrderCard;