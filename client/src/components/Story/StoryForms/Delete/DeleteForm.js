import React from 'react';
import   '../styles/StoryForm.css'
import EditForm from '../Edit/EditForm';
import { withRouter } from 'react-router-dom';

import * as storyService from '../../../../services/storyServices';
import UserContext from '../../../../utils/UserContext';

class DeleteForm extends React.Component {

    static contextType = UserContext;

    deleteIt = async () => {
        const id = this.props._id 
        console.log(this.context)
        
        storyService.deleteStory(id)
        .then(() => {            
            this.props.history.push('/')
            
        })
    } 

    render() {
        const loggedUserId =  this.context.user.id;
        const storyCreatorId = this.props.creator;
        const creator = (loggedUserId === storyCreatorId)
        

            return (
                <>
                <div >
                    <div>
                        
                        <EditForm {...this.props}></EditForm>
                       {
                            creator
                            ? <input type="submit" value="Delete" onClick={this.deleteIt}/> 
                            : <p></p>
                        }
                        </div> 
                </div> 
                
                </>
            )
        }
    }

    export default withRouter(DeleteForm);