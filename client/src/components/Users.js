import React from 'react'
import './Card.css';
import './AnimateCard.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export const Users = ({users}) => {
    console.log("user",users)
    // users = [{"firstName":"first1","lastName":"last1"},{"firstName":"first2","lastName":"last2"},{"firstName":"first3","lastName":"last3"},
    // {"firstName":"first1","lastName":"last1"},{"firstName":"first2","lastName":"last2"},{"firstName":"first3","lastName":"last3"},
    // {"firstName":"first1","lastName":"last1"},{"firstName":"first2","lastName":"last2"},{"firstName":"first3","lastName":"last3"}]
    // console.log('users length:::', users)
    if (users.length === 0) return null
    var UserRow = []
    const Row = (user,index) => {
        return (
            <div class="col-md-4 col-sm-6 col-xs-10">
            <article class="material-card Red">
                <h2>
                    <span><i class="fa fa-fw fa-star"></i>{user.title}</span>
                    <div style={{ textAlign: 'justify', padding: '10px' }}>
                    <h6>{user.description}</h6>
                    </div>
                        
                </h2>
                <div class="mc-content">
                    <div class="img-container">
                    <a href={user.dashboard_url} rel="noreferrer noopener">
                        <img class="img-responsive img-thumbnail" src={user.image_url}/>
                    </a>
                    </div>
                    <div class="mc-description">
                        He has appeared in more than 100 films and television shows, including The Deer Hunter, Annie Hall, The Prophecy trilogy, The Dogs of War ...
                    </div>
                </div>
                <a class="mc-btn-action">
                    <i class="fa fa-bars"></i>
                </a>
                <div class="mc-footer">
                    <h4>
                        Social
                    </h4>
                    <a class="fa fa-fw fa-facebook"></a>
                    <a class="fa fa-fw fa-twitter"></a>
                    <a class="fa fa-fw fa-linkedin"></a>
                    <a class="fa fa-fw fa-google-plus"></a>
                </div>
            </article>
        </div>
        )
}
                                   


    const userTable = users.map((user,index) => Row(user,index))
    console.log('userTable', userTable)

    return(
        <section class="container">
        <div class="row">
            {userTable}
        </div>
    </section>
    )
}