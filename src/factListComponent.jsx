import React, {Component} from 'react';
import FactDataService from './factDataService'
import doggy from './images.jpeg'

class factListComponent extends Component {
    constructor(props) {
        super(props)
        this.state={
            facts: [],
            message:null
        }

        this.refreshFacts = this.refreshFacts.bind(this)
        this.deleteFactClicked = this.deleteFactClicked.bind(this)
        this.updateFactClicked = this.updateFactClicked.bind(this)
        this.addFactClicked = this.addFactClicked.bind(this)
    }
    componentDidMount() {
        this.refreshFacts();
    }
    refreshFacts() {
        FactDataService.retrieveAllFacts()
            .then(
                response => {
                    console.log(response);
                    this.setState({facts: response.data})
                }
            )
    }
    updateFactClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/facts/${id}`)
    }

    deleteFactClicked(id){
        FactDataService.deleteFact(id)
        .then(
            response => {
                this.setState({ message: `Deletion of fact no. ${id} was successful` })
                this.refreshFacts()
            }
        )
    }



    addFactClicked() {
        this.props.history.push(`/facts/-1`)
    }

        render() {
            return (
                <div className="container">
                    <h3>All Doggy Facts</h3>
                    <img src={doggy} alt={"doggy"}/>
                    {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                    <div className="container">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Fact</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                    this.state.facts.map(
                                        fact =>
                                            <tr key={fact.id}>
                                                <td>{fact.id}</td>
                                                <td>{fact.description}</td>
                                                <td><button className="btn btn-success" onClick={() => this.updateFactClicked(fact.id)}>Update</button></td>
                                                <td><button className="btn btn-warning" onClick={() => this.deleteFactClicked(fact.id)}>Delete</button></td>

                                            </tr>
                                    )
                            }


                            </tbody>

                        </table>
                        <div className="row">
                                <button className="btn btn-success" onClick={this.addFactClicked}>Add</button>
                                
                        </div>

                    </div>
                </div>
            )
        }
}
export default factListComponent
