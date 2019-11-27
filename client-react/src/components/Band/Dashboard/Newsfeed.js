import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { StreamApp, NotificationDropdown, FlatFeed, LikeButton, Activity, CommentList, CommentField, StatusUpdateForm } from 'react-activity-feed';
import 'react-activity-feed/dist/index.css';

import BandDashboardHeader from './BandDashboardHeader';

import './BandDashboard.css';



const NewsFeed = props => {
  const history = useHistory();
  // const username = history.location.state.user.username;
  

  
    return (
     <Container>
       <Row>
         <Col>
       {/* <BandDashboardHeader username={username} /> */}
        <div className='newsfeed'><StreamApp
          
            apiKey="du8he7epvp94"
            appId="45206"
            token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNjYxNjhjYWUtZDIyZC00NDUxLWE4MjYtMjljZDYyMmE2ZDFhIn0.RcLGpYELeiA1nDtKviBCZ1amIVuRajViTpkTooxxWNU"
          >
            <div className='d-flex justify-content-between' style={{marginBottom:30}}> 
              
              {/* <Button 
                className=''
                onClick={ () => history.goBack()} 
                style={{backgroundColor:'#6DD68B', border: 'none'}}
              > &#8249; Back  </Button> */}

              <NotificationDropdown notify className='m-5' />

            </div>
      
            <StatusUpdateForm
              feedGroup="timeline"
              userId="66168cae-d22d-4451-a826-29cd622a6d1a" 
            />
            
            <FlatFeed
              options={ {reactions: { recent: true } } }
              notify
              Activity={(props) =>
                  <Activity {...props}
                    Footer={() => (
                      <div style={ {padding: '8px 16px'} }>
                        <LikeButton {...props} />
                        <CommentField
                          activity={props.activity}
                          onAddReaction={props.onAddReaction} />
                        <CommentList activityId={props.activity.id} />
                      </div>
                    )}
                  />
                }
              />
          </StreamApp></div>
            </Col>
          </Row>
      </Container>
    );
}

export default NewsFeed;