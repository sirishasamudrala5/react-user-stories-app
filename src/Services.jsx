import axios from 'axios';
import history from './history';
const baseUrl = "https://react-user-stories-app-be.free.beeceptor.com/api";

export const LoginAction = (user) => {
    const endpoint = user.isadmin ? baseUrl+ '/admin-login' : baseUrl+ '/login';
    axios.post(endpoint , {user})
      .then((res) => {
          var result = res.data
          var path = result && result.userRoles && result? '/admin-home' : '/user-home';
          localStorage.setItem('currentUser', res.data);
          history.push(path)
      }
      ) 
}

export const isLoggedin = () => {
    if(!(localStorage.getItem('currentUser'))){
        history.push('/')
    }
}

export const CreateUserStory = (data) => {
    axios.post(baseUrl + '/createStory' , {data})
      .then(() => {
          history.push('/user-home')
      }
      ) 
}

export const GetStories = () => {
    var data = []
    // TODO: recheck parsing res.data
    // userid = .id
    // axios.get(baseUrl + '/getStories?createdBy='+userid')
    //     .then((res) => {
    //         data.concat(res.data)
    //     })
    localStorage.setItem('currentUser', {
        id: 2,
        summary: ' story created by 2',
        description: 'dummy desc',
        type: 'enhancement',
        complexity: 'high',
        estimatedHrs: 1,
        cost: 100,
        status: ''
    })
    const user = localStorage.getItem('currentUser')
    if(user.userRoles != 'Admin' ){
        return [{
            createdBy: 2,
            summary: 'rejected story created by 2',
            description: 'dummy desc',
            type: 'enhancement',
            complexity: 'high',
            estimatedHrs: 1,
            cost: 100,
            status: 'rejected'
            },
            {
                createdBy: 2,
                summary: 'accepted story created by 2',
                description: 'dummy desc',
                type: 'enhancement',
                complexity: 'high',
                estimatedHrs: 1,
                cost: 100,
                status: 'accepted'
            },
            ,
            {
                createdBy: 2,
                summary: ' story created by 2',
                description: 'dummy desc',
                type: 'enhancement',
                complexity: 'high',
                estimatedHrs: 1,
                cost: 100,
                status: ''
            }]
    }
    else {
        return [{
        createdBy: 2,
        summary: '1st story created by 2',
        description: 'dummy desc',
        type: 'enhancement',
        complexity: 'high',
        estimatedHrs: 1,
        cost: 100
        }];
    }
}