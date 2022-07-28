import { useSelector } from "react-redux";

const QuestionList = () => {
  const questionState = useSelector((state) => state);
//   console.log(questionState)
  return (
    <div className="d-flex">
      {questionState.map((q, i) => (
        <div key={i} className="card" >
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
                <span>Q- </span> {q.question}
            </li>
            <li className="list-group-item">
                <div>{q.code}</div>
            </li>
            <li className="list-group-item">
                {console.log(q.option)}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
