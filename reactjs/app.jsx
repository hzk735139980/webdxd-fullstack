//component, each component has getInitialState
var Student = React.createClass({

    // getInitialState: function(){
        // return{
        //     firstName: "Yan",
        //     lastName: "Hong",
        // }
    // },

    render: function () {
        //render 返回 studentlist
        return <div>{this.props.student.firstName}</div>
    }

});

var StudentList = React.createClass({

    getInitialState:function () {
        return {
            studentList: []
        }
        //    object
    },

    componentDidMount: function () {
        var ReactThis = this;

        axios.get('http://localhost:3000/student')
            .then(function (response) {
                ReactThis.setState({
                    studentList:response.data
                });
                // console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    handleClick(){
        //TODO:
    },

    render: function () {
        //render 返回 studentlist

        // var studentnode=;
        return (
            <div>
                {
                    this.state.studentList.map(function(student){
                        return  <Student onClick={this.handleClick} student = {student} key= {student._id} />

                            })
                            }

            </div>
        );
        //    return html
    }

});


ReactDOM.render(
    <StudentList/>, document.getElementById('app')
);