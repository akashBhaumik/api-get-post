import React, { Component } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'


class GetUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            post: [],
            errorMsg: ''
        }
    }
    componentDidMount() {
        axios.get("https://www.webappfactory.co/shaktipeeth/public/api/users")
            .then(response => {
                this.setState({
                    post: response.data.data.data
                })
                console.log(this.state.post)
            })
            .catch(error => {
                this.setState({ errorMsg: "error retriving data" })
                console.log(error)
            })
    }

    render() {
        const { post, errorMsg } = this.state

        const content = post.map(posts => {
            return <tr key={posts.id}>

                <td>{posts.name}</td>
                <td>{posts.email}</td>
                <td>{posts.phone}</td>
                <td>{posts.username}</td>
                <td>{posts.street_address}</td>
                <td>{posts.city_name}</td>
                <td>{posts.country_name}</td>
                <td>{posts.state_name}</td>
                <td>{posts.pin_code}</td>
            </tr>
        })

        return (
            <div>
                <Table stripped bordered hover variant="dark" size="sm">
                    <thead>
                        <tr>
                            <th width="170"> Name</th>
                            <th width="170">email</th>
                            <th width="170">phone</th>
                            <th width="870">City Name</th>
                            <th width="1950">username</th>
                            <th width="1950">street_address</th>    
                            <th width="1950">country_name</th>
                            <th width="1950">state_name</th>
                            <th width="1950">pin_code</th>

                        </tr>
                    </thead>
                    <tbody>
                        {content}
                    </tbody>

                </Table>

                {errorMsg ? <div>{errorMsg}</div> : null}
            </div>
        )
    }
}

export default GetUser
