import ReactMde from "react-mde";
import * as Showdown from "showdown";
import { useState } from 'react'
import "react-mde/lib/styles/css/react-mde-all.css"

//Markdown to html
const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
});

type Props = {
  value: string
  setValue: any
}


const Editor = (props: Props) => {
  // const [value, setValue] = useState("**Hello world!!!**");
  const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write")

  return (
    <div>
      <ReactMde
        value={props.value}
        onChange={props.setValue}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={markdown =>
          Promise.resolve(converter.makeHtml(markdown))
        }
        minEditorHeight={80}
        heightUnits="vh"
      />
    </div>
  )
}

export default Editor

/*
export default function Editor() {
  return <div>hello</div>
}
*/
