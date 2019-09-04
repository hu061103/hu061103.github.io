





import {commonEvent} from "&"



const action = {
    parentTodo() {
        console.log("我是父元素事件。。。")
    },
    fnA(a) {
        console.log("child-one" + a);
    },
    fnB: function (e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
        console.log("child-two  阻止事件冒泡")
    }

}
const styles = {
    width: 100,
    height: 100,
    backgroundColor:"pink"
}

var obj = {
    name:""
}

export class EventDemo extends Component{
    constructor() {
        super();
        this.state = {
            
        };
        this.getThisTwo = this.getThisTwo.bind(this);
    }
    // prototype 原型对象 
    handleMove(e) {
        console.log(e.clientX)
    }

    getSome(e) {
        console.log(e.target.value);
        console.log(e.keyCode)
    }
    countAdd(e) {
        console.log("ppp")
    }



    // react 自定义内部函数this 默认为  undefined  不会指向组件 
    getthis() {
        console.log(this);    
    }

    getThisTwo() {
        console.log(this)
    }

    getThisThree=()=>{
        console.log(this)
    }
    render() {
       
        // var that = this;
        console.log(this);
        return (
            <div className="box" onClick={()=>action.parentTodo()}>
                <h2 onClick={()=>console.log("haohaode")} style={{ color: "deeppink" }}> react 书写 事件</h2>
                <h2 onClick={()=>action.fnA("react so easy")}>我是子元素 one  我不会阻止事件冒泡...</h2>
                <h2 className="h2" onClick={action.fnB}>我是子元素 two  我 一定会     阻止事件冒泡...</h2>
                <h2 onClick={commonEvent.watchUrl}>get Url</h2>
                <h2 onTouchStart={()=>this.todo.one(event)} style={styles}> onTouchStart</h2>
                <h2 onMouseMove={this.handleMove} style={styles}> onMouseMove</h2>
                <p><input onKeyPress={this.getSome} type="text" placeholder="keypress"/></p>
                <p><input onChange={this.countAdd} type="text" placeholder="onInput" /></p>
                <h2> { obj.names }   </h2>
                <h2 className="h3"> react  视图更新  必须是修改 state diff算法计算生成新的虚拟DOM 重新渲染 </h2>
                <button onClick={() => this.getthis()}> 获取 this </button>
                <button onClick={this.getThisTwo}>获取this two</button>
                <button onClick={this.getThisThree}>获取this three</button>
            </div>
        );
    }
}

EventDemo.prototype.todo = {
    one(e) {
        console.log(e.touches[0].clientX);
        e.target.innerHTML = e.touches[0].clientX;
    }
}