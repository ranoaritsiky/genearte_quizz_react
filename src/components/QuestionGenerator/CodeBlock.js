
import { CopyBlock, dracula } from "react-code-blocks";

const CodeBlock=(props)=>{
    return(
        <CopyBlock
          language={"jsx"}
          text={props.code}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
    )
}

export default CodeBlock