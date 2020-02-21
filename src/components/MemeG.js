import React, { Component } from 'react';
import Header from './Header';
import Axios from 'axios'
class MemeG extends Component {
    constructor(props) {
        super(props)

        this.state = {
            topText: '',
            bottomText: '',
            Images: [],
            randomImage: "https://i.imgflip.com/1bij.jpg"
        }
    }
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json()).then(response => {
                const { memes } = response.data
                this.setState({
                    Images: memes
                })
            })

    }

    subHandler = (e) => {
        e.preventDefault()
        console.log(this.state.Images)
        const ran = Math.floor(Math.random() * this.state.Images.length)
        const randomImage = this.state.Images[ran].url
        this.setState({
            randomImage: randomImage
        })
    }



    handler = ((e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    })
    render() {
        return (
            <div className="container">
                <Header />
                <form onSubmit={this.subHandler}>
                    <div>
                    <input type="text" placeholder="TopText"
                        name="topText" value={this.state.topText}
                        onChange={this.handler} />
                         
                    <input type="text" placeholder="bottomText"
                        name="bottomText" value={this.state.bottomText}
                        onChange={this.handler} />
                    <button type="submit">Generate</button>
                   </div>
                </form>
                <div>
                    <img src={this.state.randomImage} alt="" style={{width:'100%',height:'100%'}}/>
                    <h1 style={styleTop()}>{this.state.topText}</h1>
                    <h1 style={styleBottom()}>{this.state.bottomText}</h1>
                </div>
            </div>
        );
    }
}
const styleTop = () => {
    return {
        position: 'absolute',
        top: "20%",
        left: "5%"
        , tranform: 'translate(-50%,-50%)'
        , width: '100%',
        height:'100%'
        ,color:'black'
        ,fontSize:'50px'
    }
}
const styleBottom = () => {
    return {
        position: 'absolute',
        top: "95%",
        left: "5%"
        , tranform: 'translate(-50%,-50%)'
        , width: '100%'
        ,color:'black',
        fontSize:'50px'
    }
}
export default MemeG;