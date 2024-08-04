import React from 'react';
import { Card, CardContent, Typography, List, ListItem, Grid, Avatar } from '@mui/material';
import { Icon } from '@iconify/react';
import accountIcon from '@iconify-icons/mdi/account';
import starFilled from '@iconify-icons/ic/round-star';
import starOutline from '@iconify-icons/ant-design/star-outlined';

const feedbackData = [
  { customer: 'Charan', feedback: '"I have been using this product for the past six months, and I am extremely satisfied with its performance."', rating: 5 },
  { customer: 'Saran', feedback: '"This service has been a game-changer for our business. The user interface is intuitive and easy to navigate, which has significantly improved our efficiency.', rating: 4 },
  { customer: 'Uday', feedback: '"I recently switched to this software after using a competitors product for several years. The difference is night and day"', rating: 4 },
  { customer: 'Kiran', feedback: 'The speed and reliability of this software are remarkable, and it has simplified many of our daily operations. The support team is fantastic, always quick to respond and resolve any issues. I appreciate the attention to detail and the user-friendly design.', rating: 3 },
  { customer: 'Bhargav', feedback: 'The product quality is excellent.', rating: 4 },
];

const renderStars = (rating) => {
  return [...Array(5)].map((_, index) => (
    <Icon key={index} icon={index < rating ? starFilled : starOutline} style={{ color: '#FFD700' }} />
  ));
};

const CustomerFeedback = () => (
  <Card>
    <CardContent sx={{ maxHeight: '500px', overflow: 'auto' }}>
      <Typography variant="h6" gutterBottom>
        Customer Feedback
      </Typography>
      <List>
        {feedbackData.map((feedback, index) => (
          <ListItem key={index} alignItems="flex-start">
            <Grid container direction="column">
              <Grid item container alignItems="center" spacing={1}>
                <Grid item>
                  <Avatar>
                    <Icon icon={accountIcon} />
                  </Avatar>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">{feedback.customer}</Typography>
                </Grid>
              </Grid>
              <Grid item>
                {renderStars(feedback.rating)}
              </Grid>
              <Grid item>
                <Typography variant="body2">{feedback.feedback}</Typography>
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default CustomerFeedback;
