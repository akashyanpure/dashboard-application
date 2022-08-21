// dataset details card component
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

export const Card = (props) => {
    const { title, description, id, onDelete, onEdit } = props;
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <div className="card-footer">
                    <div className="row">
                        <div className="col-md-6">
                            <FontAwesomeIcon icon={faTrash} onClick={() => onDelete(id)} />
                        </div>
                        <div className="col-md-6">
                            <FontAwesomeIcon icon={faEdit} onClick={() => onEdit(id)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;