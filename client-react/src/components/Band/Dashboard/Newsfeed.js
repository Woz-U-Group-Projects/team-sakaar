import React from 'react';
import { StreamApp, NotificationDropdown, FlatFeed, LikeButton, Activity, CommentList, CommentField, StatusUpdateForm } from 'react-activity-feed';
import 'react-activity-feed/dist/index.css';

import './BandDashboard.css';



class App extends React.Component {
  render () {
    return (
     <div className='col-sm'><StreamApp
      
        apiKey="du8he7epvp94"
        appId="45206"
        token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNjYxNjhjYWUtZDIyZC00NDUxLWE4MjYtMjljZDYyMmE2ZDFhIn0.RcLGpYELeiA1nDtKviBCZ1amIVuRajViTpkTooxxWNU"
      >
        <NotificationDropdown notify />
        <StatusUpdateForm
          feedGroup="timeline"
          userId="66168cae-d22d-4451-a826-29cd622a6d1a" />
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
    );
  }
}

export default App;