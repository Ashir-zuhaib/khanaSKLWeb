import * as React from 'react';
import {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import firebase from '../../Config/Config'

export default function Reject() {

    const [post, setPost] = useState()

    // const [items, setItems] = useState([])
    useEffect(async() => {
        await firebase.firestore.collection("Request").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.data)
                setPost(doc.data);

            });
        });
        
    }, [])
    console.log('data: ', post)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Name: Ashir
        </Typography>
        <Typography variant="body2" color="text.secondary">
          F/Name:Raees 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          CNIC number: 4220158766528
        </Typography>
        <Typography variant="body2" color="text.secondary">
        DoB:
        </Typography>
        <Typography variant="body2" color="text.secondary">
        FamilyMembers :
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Category :
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Income :
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Nearestbranch :
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="success" size="small">Accept </Button>
        <Button color="error" size="small">Reject</Button>
      </CardActions>
    </Card>
  );
}