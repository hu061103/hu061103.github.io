

export class BaseDemo extends Component{
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h2>BaseDemo====react 组件特点 独立小巧可复用</h2>
                <hr/>
                <Nav />
                <Swipe></Swipe>
                <List id="111" name="小琼琼"></List>
                <Upload msg="天道酬勤" count={1992}></Upload>
            </div>
        );
    }
}

const title = "小琼琼";
const word = "明天会更好！！！"
export class Nav extends Component{
    render() {
        return (
            <div>
                <h2>Nav=====nav</h2>
                <h2>{title}</h2>
                <h2>{word}</h2>
            </div>
        );
    }
}

export class Swipe extends Component{
    render() {
        return (
            <div>
                <h2>swipe====swipe</h2>
            </div>
        );
    }
}

export const List = (props) => (
    <div>
        <h2>list====list</h2>
        <h2>id==={props.id}</h2>
        <h2>name==={props.name}</h2>
    </div>
)

export const Upload = ({msg,count}) => {
    return (
        <div>
            <h2>upload===upload=={msg}/{count}</h2>
            <ForeEach></ForeEach>
        </div>
    )
}



const teachers = ["小怡子", "马姐", "小琼"];
export class ForeEach extends Component{
    render() {
        return (
            <div>
                <h2>ForeEach===foreeach</h2>
                {
                    teachers.map((item, index) => {
                        return <p key={index}>{item}</p>
                    })
                }
            </div>
        );
    }
}