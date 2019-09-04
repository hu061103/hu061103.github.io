console.log("这是react    js代码的文件。。。")


import React,{Component} from "React";
import ReactDOM from "react-dom";


import { IndexView } from "./components";

// ES6 class 构造函数创建组件
export class App extends React.Component{
    render() {
        return (
            <div>
                <h2>APP===app</h2>
                <div>
                    <h2>root - root - react </h2>
                </div>
                {/* <Demo />
                <Slide />
                <Tips /> */}
                <IndexView/>
            </div>
        )
    }
}
export class Demo extends Component{
    render() {
        return (
            <div>
                <h2>demo====demo</h2>
            </div>
        )
    }
}


// 纯函数组件  无状态组件 stateless
export const Slide = () => {
    return (
        <div>
            <h2>Slide====slide</h2>
        </div>
    )
}

export let Tips = () => (
    <div>
        <h2>tips=====tips</h2>
    </div>
)





ReactDOM.render(
    <App />,
    document.getElementById("app")
)