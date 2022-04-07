/* eslint-disable */
import React, { Component } from 'react'
import 'codemirror/keymap/sublime'
import 'codemirror/theme/eclipse.css'
import 'codemirror/theme/monokai.css'
import 'codemirror/mode/sql/sql'
import 'codemirror/addon/hint/sql-hint.js'
import 'codemirror/addon/hint/show-hint.css'
import 'codemirror/addon/hint/show-hint.js'
import CodeMirror from '@uiw/react-codemirror'

class FlinkConsoleCodeMirror extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value:props.value||''
    }
  }
  handlerChange(value){
    this.triggerChange(value)
  }
  triggerChange = changedValue => {
    const { onChange } = this.props
    if (onChange) {
      onChange(changedValue)
    }
  }
  render() {
    const { formValue } = this.props
    const options = {
      lineNumbers: true,
      keyMap: 'sublime',
      theme: 'monokai',
      mode: 'sql',
      smartIndent: true,
      indentWithTabs: true,
      lineWrapping: true
    }
    return (
      <CodeMirror title="sql" options={options} style={{ margin: 8 }}
                  height={350}
                  value={formValue}
                  onChange={(e) => {
                    this.handlerChange(e.getValue())
                  }}
      />
    )
  }
}

export default FlinkConsoleCodeMirror
