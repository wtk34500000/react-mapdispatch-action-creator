import React,{Component} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'
import { connect } from 'react-redux'

class Home extends Component {
    render(){
        console.log(this.props)
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post =>{
                return (
                    <div className="post card" key={post.id}>
                        <img src={Pokeball} alt="A pokeball" />
                        <div className="card-content">
                            <Link to={'/'+post.id}>
                                 <span className="card-title red-text">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ):(
            <div className="center">no post yet </div>
        )

        return (
            <div className="containern home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }  
}

const mapStateToProps = (state)=>{
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home)