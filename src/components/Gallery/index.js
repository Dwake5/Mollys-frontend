import React from 'react'

import AddPhotos from './AddPhotos'

import { Div, Photo, SingleImageDiv, AllImagesDiv, SlideshowButton, AddPhotosButton } from './style'
import { H1 } from '../../theme.js'

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 


class Photos extends React.Component {
    state = {
        listOfImages: [],
        photoIndex: 0,
        showModal: false,
        addingPhotos: false,
        showingSlideshow: false,
    }
    
    timerID

    toggleModal = () => {
        this.setState(prevState => {
          return { showModal: !prevState.showModal };
        });
    };

    importAll(r) {
        return r.keys().map(r);
    }
    
    componentDidMount() {
        this.setState({
            listOfImages: this.importAll(require.context('./Images/', false, /\.(png|jpe?g|svg)$/))
        })
    }

    toggleAddPhotos() {
        this.setState({
            addingPhotos: !this.state.addingPhotos
        })
    }

    handlePhotoIndexState = () => {
        let pictureQuantity = this.state.listOfImages.length
        let newIndex = this.state.photoIndex + 1
        if (pictureQuantity === newIndex) {
            newIndex = 0
        } 
        this.setState({
            photoIndex: newIndex
        })
    }

    startTimeout = () => {
        let width = window.innerWidth
        let timer = width < 721 ? 2000 : 3000
        this.timerID = setInterval(() => 
            this.handlePhotoIndexState(),
            timer
        );
        // The next line does nothing except get rid of a React no unused var warning.
        return this.timerID
    }

    stopTimeout = () => {

        clearInterval(this.timerID)
    }
    
    handleSlideshow = () => {
        this.setState({ isOpen: true, photoIndex: 0, showingSlideshow: true })
        this.startTimeout()
    }

    handleClickOffSlideshow = () => {
        this.setState({ isOpen: false })
        this.stopTimeout()
    }

    render(){
        const { photoIndex, isOpen, listOfImages, addingPhotos } = this.state
        const { currentUser } = this.props
        return (
            <Div>
                <H1>Gallery</H1>
                <SlideshowButton type="button" onClick={() => this.handleSlideshow()}>
                    View slideshow
                </SlideshowButton>
                { currentUser && 
                    <>
                        <p>You have a total of {listOfImages.length} photo's</p>
                        <AddPhotosButton onClick={() => this.setState({ addingPhotos: !this.state.addingPhotos })}> Add photo's</AddPhotosButton>
                        <br />
                    </>
                }
                { addingPhotos &&
                    <AddPhotos />
                }
                <AllImagesDiv>
                    {
                        listOfImages.map((image, index) => {
                            return(
                                    <SingleImageDiv key={index}>
                                        <Photo src={image} onClick={() => this.setState({ isOpen: true, photoIndex: index })} alt="info" />
                                    </SingleImageDiv>
                                )
                            })
                        }
                </AllImagesDiv>
                
                { isOpen && (
                    <Lightbox
                    mainSrc={listOfImages[photoIndex]}
                        nextSrc={listOfImages[(photoIndex + 1) % listOfImages.length]}
                        prevSrc={listOfImages[(photoIndex + listOfImages.length - 1) % listOfImages.length]}
                        onCloseRequest={() => this.handleClickOffSlideshow()}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + listOfImages.length - 1) % listOfImages.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % listOfImages.length,
                            })
                        }
                    />
                )}
            </Div>
        )
    }
}

export default Photos