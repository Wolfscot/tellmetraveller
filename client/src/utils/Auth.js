import React, {Component} from 'react'
import UserContext from './Context'

function getCookie(name) {
    const cookieValue = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return cookieValue ? cookieValue[2] : null;
}

class Auth extends Component {
    constructor(props) {
        super(props)

        this.state = {
            signedIn: null,
            user: null
        }
    }

    signIn = (user) => {
        this.setState({
            signedIn: true,
            user
        })
    }

    signOut = () => {
        document.cookie = "x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
        this.setState({
            signedIn: false,
            user: null
        })
    }

    componentDidMount() {
        const token = getCookie('x-auth-token')
    
        if(!token) {
            this.signOut()
            return
        }
    
        fetch('http://localhost:5000/api/user/verify', {
        
            method: 'POST',
            body: JSON.stringify({
                token
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(promise => {
            return promise.json()
        }).then(response => {
            if(response.status) {
                this.signIn({
                    username: response.user.username,
                    id: response.user._id,
                    
            })
            } else {
                this.signOut()
            }
        })
      }
    
    render() {
        const {
            signedIn,
            user
        } = this.state

        if (signedIn === null) {
            return (<div>Loading...</div>)
        }

        return (
            <UserContext.Provider value={{
                signedIn,
                user,
                signIn: this.signIn,
                signOut: this.signOut
            }}>
                {this.props.children}
            </UserContext.Provider>
        )
    }

}

export default Auth;