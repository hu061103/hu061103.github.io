

export const cssObj = {
    one: {
        backgroundColor: "pink",
        fontSize: 18,
        color:"#000"
    },
    two: {
        display:'flex',
        flexDirection:"colume"
    }
}


import { resetCss } from "&";


export class CssDemo extends Component{
    render() {
        console.log(this)
        return (
            <div className="box" style={resetCss.all}>
                <h2 className="h2">react  书写样式   </h2>
                <h2 style={{ color: "yellow",fontSize:24,height:30,lineHeight:'30px'}}>天道酬勤 </h2>
                <h2 style={cssObj.one}>明天会更嗨、、、、、   </h2>
                <h2 style={this.myCss.three}>美还是好的、、、、、   </h2>
            </div>
        );
    }
}

CssDemo.prototype.myCss = {
    three: {
        color: "red",
        backgroundColor:"#0f0"
    }
}