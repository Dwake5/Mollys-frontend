import React, { Component } from 'react'

import { NavDiv, Title, NewsDiv, News } from './style'

import NewsForm from './NewsForm'

import HyperLinks from './HyperLinks'
import ContactDiv from './ContactDiv'

import { fetchNews }  from '../../Services/api'

class NavBar extends Component {
    
    state = {
        formOpen: false,
        currentNews: [],
        newsHeight: 100
    }


    toggleForm = () => {
        this.setState({
            formOpen: !this.state.formOpen
        })
    }

    componentDidMount = () => {
        fetchNews()
        .then(data => {
            if (data.error) {
                alert(data.error)
            } else {
                this.setState({
                    currentNews: data.news
                })
            }
        })

        setTimeout(this.handleNewsHeight, 500)
    }

    handleNewsHeight = () => {
        if (document.getElementById('news')) {
            const height = document.getElementById('news').offsetHeight;
            this.setState({ newsHeight: height });
        }
    }

    render() {
        return(
            <NavDiv>
                <HyperLinks />
                                    
                {  
                this.props.height > 736 &&
                    <ContactDiv />
                }

                {  
                this.props.height > (780 + this.state.newsHeight) &&
                    <NewsDiv id='news' news={this.state.currentNews.length > 0}>
                        <Title>What's New?</Title>
                        <News>{this.state.currentNews}</News>
                        { this.props.currentUser && 
                            <button onClick={this.toggleForm}>Change News?</button>
                        }
                        { this.state.formOpen &&
                            <NewsForm />
                        }
                    </NewsDiv>
                }
            </NavDiv>
        )
    }
}

export default NavBar