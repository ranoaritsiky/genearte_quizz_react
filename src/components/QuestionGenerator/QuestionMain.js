import QuestionForm from './QuestionForm'
import QuestionList from './QuestionList'

const QuestionMain =()=>{
    return (
        <div className="d-flex p-3" style={{ height: "90vh",margin:'10px' }}>
            <QuestionForm/>
            <QuestionList/>
        </div>
    )
}

export default QuestionMain