import React from 'react'

import { postPhotos } from '../../../Services/api'

class AddPhotos extends React.Component {
    state = {
        imagesToAdd: [],
    }

    updateList = e => {
        this.setState({
            imagesToAdd: [...e.target.files]
        })
    }

    handleUpload (){
        this.state.imagesToAdd.forEach( function (image) {
            postPhotos(image.file)
        })
    }

    render() {
        const { imagesToAdd } = this.state
        return(
            <div>
                <input id="fileUploader" type="file" multiple="multiple" onChange={e => this.updateList(e)}/>
                { imagesToAdd.length > 0 &&
                    <>
                        <p>You are adding the following files:</p>
                        {imagesToAdd.map(image => {
                            return <p key={image.size}>{image.name}</p>
                        })}
                        <button onClick={() => this.handleUpload()}>Do you want to upload them now?</button>
                    </>
                }
            </div>
        )
    }
}

export default AddPhotos