import React from 'react';
import { Link } from 'react-router-dom';
import ImageUpload from './ImageUpload';
import serializeForm from 'form-serialize';

class AddNewLocation extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault()
        const values = serializeForm(e.target, { hash:true })
        if (this.props.NewLocation) {
            this.props.NewLocation(values)
        }
    }

    render() {
        return (
            <div>
                <Link
                    className='return-link'
                    to='/'>
                    Go Back
                </Link>
                
                <form onSubmit={this.handleSubmit}className='create-new-organization'>
                
                    <div className='create-title'>
                        <h2>New Charitable Organization</h2> 
                        <p className='new-heart'></p>
                    </div>

                    <div>
                        <span>Click the icon to upload a photo:</span>
                        <ImageUpload
                            className='image-upload'
                            name='imageURL'
                            maxHeight={100}
                        />
                    </div>


                    <div className='create-input-form'>
                        <span>Name:</span>
                        <input type='text' name='name' placeholder='Organization'/>
                        <span>Email:</span>
                        <input type='text' name='email' placeholder='Email'/>
                        <span>Description:</span>
                        <input type='text' name='description' placeholder='Description'/>
                        <span>Selection:</span>
                        <div className='fruit-container'>
                            <select name='fruit'>
                                <option value='select'>select</option>
                                <option value='banana'>Banana</option>
                                <option value='apple'>Apple</option>
                                <option value='peach'>Peach</option>
                                <option value='orange'>Orange</option>
                            </select>
                            <input className='fruit-amount' type='number' name='fruitcount' placeholder='Amount'/>
                        </div>


                        {/* <form name='fruitoption'>
                            <input type='checkbox' value='apple'/>Apple
                            <input type='checkbox' value='orange'/>Orange
                            <input type='checkbox' value='banana'/>Banana
                        </form> */}

                        <button>Add Organization</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddNewLocation;